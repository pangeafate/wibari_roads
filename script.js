// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===== NAVIGATION =====
class Navigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.mobileToggle = document.getElementById('mobile-toggle');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.navLinks = document.querySelectorAll('.nav-link, .mobile-menu-item');
        
        this.init();
    }
    
    init() {
        this.handleScroll();
        this.setupMobileMenu();
        this.setupSmoothScroll();
        
        window.addEventListener('scroll', throttle(() => this.handleScroll(), 100));
    }
    
    handleScroll() {
        if (window.scrollY > 50) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }
    }
    
    setupMobileMenu() {
        this.mobileToggle.addEventListener('click', () => {
            this.mobileMenu.classList.toggle('open');
        });
        
        // Close mobile menu when clicking on a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.mobileMenu.classList.remove('open');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navbar.contains(e.target)) {
                this.mobileMenu.classList.remove('open');
            }
        });
    }
    
    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        const offset = 80; // Navbar height
                        const targetPosition = target.offsetTop - offset;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
}

// ===== SCROLL ANIMATIONS =====
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        this.init();
    }
    
    init() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, this.observerOptions);
        
        // Observe all animation elements
        const animatedElements = document.querySelectorAll('.fade-in-up, .scale-in, .stagger-container');
        animatedElements.forEach(el => {
            this.observer.observe(el);
        });
    }
}

// ===== ANIMATED COUNTERS =====
class AnimatedCounters {
    constructor() {
        this.counters = document.querySelectorAll('.stat-number[data-target]');
        this.init();
    }
    
    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        this.counters.forEach(counter => {
            observer.observe(counter);
        });
    }
    
    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }
}

// ===== ROI CALCULATOR =====
class ROICalculator {
    constructor() {
        this.roadLengthSlider = document.getElementById('road-length');
        this.roadLengthValue = document.getElementById('road-length-value');
        this.roadTypeSelect = document.getElementById('road-type');
        this.trafficIntensitySelect = document.getElementById('traffic-intensity');
        this.maintenanceFrequencySelect = document.getElementById('maintenance-frequency');
        
        this.totalSavingsElement = document.getElementById('total-savings');
        this.currentInitialElement = document.getElementById('current-initial');
        this.wibaricInitialElement = document.getElementById('wibari-initial');
        this.currentMaintenanceElement = document.getElementById('current-maintenance');
        this.wibariMaintenanceElement = document.getElementById('wibari-maintenance');
        this.currentTotalElement = document.getElementById('current-total');
        this.wibariTotalElement = document.getElementById('wibari-total');
        this.roiPercentageElement = document.getElementById('roi-percentage');
        this.paybackPeriodElement = document.getElementById('payback-period');
        
        this.init();
    }
    
    init() {
        // Update road length display
        this.roadLengthSlider.addEventListener('input', () => {
            this.roadLengthValue.textContent = `${this.roadLengthSlider.value} km`;
            this.calculateROI();
        });
        
        // Update calculations on any input change
        [this.roadTypeSelect, this.trafficIntensitySelect, this.maintenanceFrequencySelect].forEach(element => {
            element.addEventListener('change', () => this.calculateROI());
        });
        
        // Initial calculation
        this.calculateROI();
    }
    
    calculateROI() {
        const roadLength = parseInt(this.roadLengthSlider.value);
        const roadType = this.roadTypeSelect.value;
        const trafficIntensity = this.trafficIntensitySelect.value;
        const maintenanceFrequency = this.maintenanceFrequencySelect.value;
        
        // Base costs per km
        const costs = {
            gravel: { initial: 80000, annual: 25000 },
            asphalt: { initial: 350000, annual: 85000 },
            concrete: { initial: 650000, annual: 10000 }
        };
        
        // Traffic multipliers
        const trafficMultipliers = {
            light: 0.8,
            medium: 1.0,
            heavy: 1.3
        };
        
        // Maintenance frequency multipliers
        const maintenanceMultipliers = {
            quarterly: 1.5,
            biannual: 1.0,
            annual: 0.7
        };
        
        const currentCosts = costs[roadType];
        const trafficMultiplier = trafficMultipliers[trafficIntensity];
        const maintenanceMultiplier = maintenanceMultipliers[maintenanceFrequency];
        
        // Calculate current solution costs
        const currentInitial = currentCosts.initial * roadLength * trafficMultiplier;
        const currentAnnualMaintenance = currentCosts.annual * roadLength * trafficMultiplier * maintenanceMultiplier;
        const current15YearMaintenance = currentAnnualMaintenance * 15;
        const currentTotal = currentInitial + current15YearMaintenance;
        
        // Calculate Wibari costs (30% less initial, zero maintenance)
        const wibariInitial = 245000 * roadLength * trafficMultiplier;
        const wibariMaintenance = 0;
        const wibariTotal = wibariInitial + wibariMaintenance;
        
        // Calculate savings and ROI
        const totalSavings = currentTotal - wibariTotal;
        const roiPercentage = ((totalSavings / wibariInitial) * 100);
        const paybackPeriod = wibariInitial / (currentAnnualMaintenance + (currentInitial - wibariInitial) / 15);
        
        // Update display
        this.updateDisplay({
            totalSavings,
            currentInitial,
            wibariInitial,
            current15YearMaintenance,
            wibariMaintenance,
            currentTotal,
            wibariTotal,
            roiPercentage,
            paybackPeriod
        });
    }
    
    updateDisplay(data) {
        this.totalSavingsElement.textContent = this.formatCurrency(data.totalSavings);
        this.currentInitialElement.textContent = this.formatCurrency(data.currentInitial);
        this.wibaricInitialElement.textContent = this.formatCurrency(data.wibariInitial);
        this.currentMaintenanceElement.textContent = this.formatCurrency(data.current15YearMaintenance);
        this.wibariMaintenanceElement.textContent = this.formatCurrency(data.wibariMaintenance);
        this.currentTotalElement.textContent = this.formatCurrency(data.currentTotal);
        this.wibariTotalElement.textContent = this.formatCurrency(data.wibariTotal);
        this.roiPercentageElement.textContent = `${Math.round(data.roiPercentage)}%`;
        this.paybackPeriodElement.textContent = data.paybackPeriod.toFixed(1);
    }
    
    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(amount);
    }
}

// ===== FAQ ACCORDION =====
class FAQAccordion {
    constructor() {
        this.faqItems = document.querySelectorAll('.faq-item');
        this.init();
    }
    
    init() {
        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other items
                this.faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                
                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });
    }
}

// ===== FORM HANDLING =====
class FormHandler {
    constructor() {
        this.assessmentForm = document.getElementById('assessment-form');
        this.init();
    }
    
    init() {
        if (this.assessmentForm) {
            this.assessmentForm.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        const submitButton = this.assessmentForm.querySelector('.form-submit');
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = 'Submitting...';
        submitButton.disabled = true;
        
        // Collect form data
        const formData = new FormData(this.assessmentForm);
        const data = Object.fromEntries(formData.entries());
        
        try {
            // Simulate form submission (replace with actual endpoint)
            await this.simulateSubmission(data);
            
            // Success message
            this.showMessage('Thank you! We\'ll contact you within 24 hours to schedule your free assessment.', 'success');
            this.assessmentForm.reset();
            
        } catch (error) {
            // Error message
            this.showMessage('Something went wrong. Please try again or contact us directly.', 'error');
        } finally {
            // Reset button
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    }
    
    async simulateSubmission(data) {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Form submitted:', data);
                resolve();
            }, 2000);
        });
    }
    
    showMessage(message, type) {
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = `form-message form-message-${type}`;
        messageEl.textContent = message;
        
        // Style the message
        messageEl.style.cssText = `
            padding: 1rem;
            border-radius: 0.5rem;
            margin-top: 1rem;
            font-weight: 500;
            ${type === 'success' 
                ? 'background: rgba(16, 185, 129, 0.1); color: #10B981; border: 1px solid #10B981;'
                : 'background: rgba(239, 68, 68, 0.1); color: #EF4444; border: 1px solid #EF4444;'
            }
        `;
        
        // Insert after form
        this.assessmentForm.parentNode.insertBefore(messageEl, this.assessmentForm.nextSibling);
        
        // Remove after 5 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 5000);
    }
}

// ===== PERFORMANCE OPTIMIZATIONS =====
class PerformanceOptimizer {
    constructor() {
        this.init();
    }
    
    init() {
        this.lazyLoadImages();
        this.preloadCriticalAssets();
    }
    
    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                img.classList.add('loaded');
            });
        }
    }
    
    preloadCriticalAssets() {
        // Preload critical fonts
        const fontUrls = [
            'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap'
        ];
        
        fontUrls.forEach(url => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'style';
            link.href = url;
            document.head.appendChild(link);
        });
    }
}

// ===== MAGNETIC BUTTON EFFECTS =====
class MagneticButtons {
    constructor() {
        this.magneticButtons = document.querySelectorAll('.magnetic-btn');
        this.init();
    }
    
    init() {
        this.magneticButtons.forEach(button => {
            button.addEventListener('mouseenter', (e) => this.handleMouseEnter(e));
            button.addEventListener('mouseleave', (e) => this.handleMouseLeave(e));
            button.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        });
    }
    
    handleMouseEnter(e) {
        e.target.style.transition = 'transform 0.2s ease';
    }
    
    handleMouseLeave(e) {
        e.target.style.transform = '';
        e.target.style.transition = 'transform 0.4s ease';
    }
    
    handleMouseMove(e) {
        const button = e.target;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const moveX = x * 0.1;
        const moveY = y * 0.1;
        
        button.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
}

// ===== COOKIE CONSENT (GDPR) =====
class CookieConsent {
    constructor() {
        this.cookieName = 'wibari-cookie-consent';
        this.init();
    }
    
    init() {
        if (!this.getCookie(this.cookieName)) {
            this.showCookieBanner();
        }
    }
    
    showCookieBanner() {
        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-content">
                <p>We use cookies to improve your experience and analyze site traffic. By continuing to use this site, you agree to our use of cookies.</p>
                <div class="cookie-actions">
                    <button class="btn btn-primary cookie-accept">Accept</button>
                    <button class="btn btn-ghost cookie-decline">Decline</button>
                </div>
            </div>
        `;
        
        // Style the banner
        banner.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: var(--bg-tertiary);
            border-top: 1px solid var(--border-color);
            padding: 1rem;
            z-index: 10000;
            transform: translateY(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(banner);
        
        // Animate in
        setTimeout(() => {
            banner.style.transform = 'translateY(0)';
        }, 100);
        
        // Handle actions
        banner.querySelector('.cookie-accept').addEventListener('click', () => {
            this.setCookie(this.cookieName, 'accepted', 365);
            this.hideBanner(banner);
        });
        
        banner.querySelector('.cookie-decline').addEventListener('click', () => {
            this.setCookie(this.cookieName, 'declined', 365);
            this.hideBanner(banner);
        });
    }
    
    hideBanner(banner) {
        banner.style.transform = 'translateY(100%)';
        setTimeout(() => {
            banner.remove();
        }, 300);
    }
    
    setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }
    
    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
}

// ===== ANALYTICS =====
class Analytics {
    constructor() {
        this.events = [];
        this.init();
    }
    
    init() {
        this.trackPageView();
        this.setupEventTracking();
    }
    
    trackPageView() {
        this.trackEvent('page_view', {
            page: window.location.pathname,
            title: document.title,
            timestamp: new Date().toISOString()
        });
    }
    
    setupEventTracking() {
        // Track CTA clicks
        document.querySelectorAll('.btn-primary').forEach(btn => {
            btn.addEventListener('click', () => {
                this.trackEvent('cta_click', {
                    text: btn.textContent.trim(),
                    location: this.getSectionName(btn)
                });
            });
        });
        
        // Track calculator usage
        const calculator = document.getElementById('road-length');
        if (calculator) {
            calculator.addEventListener('change', debounce(() => {
                this.trackEvent('calculator_use', {
                    road_length: calculator.value
                });
            }, 1000));
        }
        
        // Track form submissions
        const assessmentForm = document.getElementById('assessment-form');
        if (assessmentForm) {
            assessmentForm.addEventListener('submit', () => {
                this.trackEvent('form_submission', {
                    form: 'assessment'
                });
            });
        }
    }
    
    trackEvent(eventName, data = {}) {
        const event = {
            event: eventName,
            timestamp: new Date().toISOString(),
            ...data
        };
        
        this.events.push(event);
        
        // In production, send to analytics service
        console.log('Analytics Event:', event);
        
        // Example: Send to Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, data);
        }
    }
    
    getSectionName(element) {
        const section = element.closest('section');
        return section ? section.id || 'unknown' : 'header';
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new Navigation();
    new ScrollAnimations();
    new AnimatedCounters();
    new ROICalculator();
    new FAQAccordion();
    new FormHandler();
    new PerformanceOptimizer();
    new MagneticButtons();
    new CookieConsent();
    new Analytics();
    
    // Add loading complete class
    document.body.classList.add('loaded');
    
    console.log('Wibari website initialized successfully!');
});

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    
    // Track errors in analytics
    if (window.analytics) {
        window.analytics.trackEvent('javascript_error', {
            message: e.message,
            filename: e.filename,
            line: e.lineno
        });
    }
});

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Navigation,
        ROICalculator,
        ScrollAnimations,
        FormHandler
    };
} 