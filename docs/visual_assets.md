# Wibari Website - Image & Video Implementation Guide

## Overview
This guide provides specific instructions for finding, downloading, and implementing images and videos for the Wibari landing page. All images should be downloaded from free stock photo sites (Pexels, Unsplash, Pixabay) to ensure commercial usage rights.

## Image Download Instructions

### Step 1: Create Image Directory Structure
```bash
images/
├── hero/
│   ├── mining-road-rain.mp4
│   ├── mining-road-rain-poster.jpg
│   └── mining-truck-dust.jpg
├── problems/
│   ├── pothole-water.jpg
│   ├── stuck-truck.jpg
│   ├── erosion-damage.jpg
│   └── road-washout.jpg
├── solutions/
│   ├── soil-cross-section.jpg
│   ├── heavy-equipment.jpg
│   ├── construction-process.jpg
│   └── stabilized-road.jpg
├── process/
│   ├── soil-testing.jpg
│   ├── engineering-plans.jpg
│   ├── aerial-mapping.jpg
│   └── construction-crew.jpg
├── case-studies/
│   ├── nigeria-oil-roads.jpg
│   ├── drc-copper-mine.jpg
│   └── ghana-gold-mine.jpg
├── icons/
│   ├── wibari-logo.png
│   ├── iso-cert.png
│   └── ce-mark.png
└── misc/
    ├── before-after.jpg
    └── testimonial-bg.jpg
```

## Section-by-Section Image Requirements

### 1. HERO SECTION

#### Primary Video Background
**Source**: Pexels
**Search**: "mining truck dust road"
**Specific recommendation**: 
- Go to: https://www.pexels.com/search/videos/mining%20truck/
- Look for videos showing trucks on dusty/muddy roads
- Download in 1920x1080 resolution
- Convert to both .mp4 and .webm formats

**Implementation**:
```html
<video autoplay muted loop playsinline poster="images/hero/mining-road-rain-poster.jpg">
    <source src="images/hero/mining-road-rain.webm" type="video/webm">
    <source src="images/hero/mining-road-rain.mp4" type="video/mp4">
</video>
```

#### Fallback Hero Image
**Source**: Pexels
**Search**: "construction vehicle africa"
**URL**: https://www.pexels.com/search/construction%20vehicle/
- Download a dramatic shot of heavy equipment
- Optimize to 1920x1080px
- Save as `mining-truck-dust.jpg`

### 2. PROBLEM SECTION

#### Image 1: Water-Filled Pothole
**Source**: Pexels
**Search**: "pothole water"
**URL**: https://www.pexels.com/search/pothole/
- Look for deep pothole filled with muddy water
- Crop to 800x600px
- Save as `pothole-water.jpg`

#### Image 2: Stuck Vehicle
**Source**: Unsplash
**Search**: "stuck truck mud"
**URL**: https://unsplash.com/s/photos/stuck-truck
- Find image of vehicle stuck in mud
- Crop to 800x600px
- Save as `stuck-truck.jpg`

#### Image 3: Road Erosion
**Source**: Pixabay
**Search**: "road erosion damage"
**URL**: https://pixabay.com/images/search/road%20erosion/
- Download severe erosion image
- Crop to 800x600px
- Save as `erosion-damage.jpg`

#### Image 4: Washout Damage
**Source**: Pexels
**Search**: "flood road damage"
**Alternative search**: "durban flood road" or "road washout"
- Find dramatic washout image
- Crop to 800x600px
- Save as `road-washout.jpg`

### 3. SOLUTION SECTION

#### Technical Diagram Alternative
Since we need a soil cross-section diagram, use:
**Source**: Create using CSS/SVG
**Alternative**: Search "soil layers diagram" on Pixabay
**Implementation**: 
```html
<!-- If no suitable image found, create with CSS -->
<div class="soil-diagram">
    <div class="layer topsoil">Original Soil</div>
    <div class="layer stabilized">Stabilized Layer (150-300mm)</div>
    <div class="layer subgrade">Compacted Subgrade</div>
</div>
```

#### Heavy Equipment Image
**Source**: Pexels
**Search**: "mining dump truck"
**URL**: https://www.pexels.com/search/mining%20truck/
- Find 400-ton class truck
- Crop to 1200x800px
- Save as `heavy-equipment.jpg`

#### Construction Process
**Source**: Pexels
**Search**: "road construction equipment"
**URL**: https://www.pexels.com/search/road%20construction/
- Find grader or compactor working
- Crop to 1200x800px
- Save as `construction-process.jpg`

### 4. PROCESS SECTION IMAGES

#### Stage 1: Soil Testing
**Source**: Pexels
**Search**: "soil testing"
**URL**: https://www.pexels.com/search/soil%20testing/
- Find engineer with testing equipment
- Crop to 600x400px
- Save as `soil-testing.jpg`

#### Stage 2: Engineering Plans
**Source**: Unsplash
**Search**: "construction blueprint"
**URL**: https://unsplash.com/s/photos/construction-blueprint
- Find technical drawings/plans
- Crop to 600x400px
- Save as `engineering-plans.jpg`

#### Stage 3: Aerial Mapping
**Source**: Pixabay
**Search**: "aerial view construction"
**URL**: https://pixabay.com/images/search/aerial%20construction/
- Find drone/aerial site view
- Crop to 600x400px
- Save as `aerial-mapping.jpg`

#### Stage 4: Construction Crew
**Source**: Pexels
**Search**: "construction crew africa"
**Alternative**: "construction workers"
**URL**: https://www.pexels.com/search/construction%20workers/
- Find diverse crew at work
- Crop to 600x400px
- Save as `construction-crew.jpg`

### 5. CASE STUDIES SECTION

#### Nigeria Oil Roads
**Source**: Pixabay
**Search**: "nigeria oil field"
**Alternative**: "oil pipeline road africa"
- Industrial road setting
- Crop to 800x500px
- Save as `nigeria-oil-roads.jpg`

#### DRC Copper Mine
**Source**: Pexels
**Search**: "copper mine africa"
**Alternative**: "open pit mine trucks"
- Mining operation with roads
- Crop to 800x500px
- Save as `drc-copper-mine.jpg`

#### Ghana Gold Mine
**Source**: Unsplash
**Search**: "gold mine ghana"
**Alternative**: "african gold mine"
- Gold mining operation
- Crop to 800x500px
- Save as `ghana-gold-mine.jpg`

### 6. TRUST ELEMENTS & LOGOS

#### Company Logo
**Create using**: Canva Free or CSS
```css
.logo {
    font-family: 'Inter', sans-serif;
    font-weight: 900;
    color: #f97316;
    font-size: 2rem;
}
```

#### Certification Badges
**Source**: Flaticon or create with CSS
**Alternative**: Simple CSS badges
```html
<div class="cert-badge">
    <i class="fas fa-certificate"></i>
    <span>ISO 9001</span>
</div>
```

## Image Optimization Guidelines

### 1. Format Selection
- **JPG**: For photographs (hero, case studies, process photos)
- **PNG**: For logos, icons, diagrams with transparency
- **WebP**: Create WebP versions for modern browsers
- **MP4/WebM**: For video backgrounds

### 2. Compression Settings
```bash
# Using ImageMagick for batch optimization
# Install: sudo apt-get install imagemagick

# Optimize JPGs
find images/ -name "*.jpg" -exec convert {} -quality 85 -strip {} \;

# Create WebP versions
find images/ -name "*.jpg" -exec cwebp -q 80 {} -o {}.webp \;

# Resize images to exact dimensions
convert input.jpg -resize 1920x1080^ -gravity center -crop 1920x1080+0+0 output.jpg
```

### 3. Lazy Loading Implementation
```html
<!-- Add loading="lazy" and data-src attributes -->
<img 
    src="placeholder.jpg" 
    data-src="images/problems/pothole-water.jpg"
    alt="Water-filled pothole damaging mining road"
    loading="lazy"
    class="lazy"
>
```

### 4. Responsive Images
```html
<picture>
    <source 
        media="(max-width: 768px)" 
        srcset="images/hero/mining-truck-mobile.jpg"
    >
    <source 
        media="(min-width: 769px)" 
        srcset="images/hero/mining-truck-desktop.jpg"
    >
    <img 
        src="images/hero/mining-truck-desktop.jpg" 
        alt="Mining truck on muddy road"
    >
</picture>
```

## Video Implementation

### 1. Video Optimization
```bash
# Convert to MP4 (H.264)
ffmpeg -i input.mov -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k output.mp4

# Convert to WebM (VP9)
ffmpeg -i input.mov -c:v libvpx-vp9 -crf 30 -b:v 0 output.webm

# Create poster frame
ffmpeg -i video.mp4 -ss 00:00:03 -vframes 1 poster.jpg
```

### 2. Video Background Code
```html
<div class="video-container">
    <video 
        autoplay 
        muted 
        loop 
        playsinline
        poster="images/hero/poster.jpg"
        id="hero-video"
    >
        <source src="images/hero/mining-road.webm" type="video/webm">
        <source src="images/hero/mining-road.mp4" type="video/mp4">
    </video>
    <!-- Overlay for text readability -->
    <div class="video-overlay"></div>
</div>
```

### 3. Performance Optimization
```javascript
// Pause video when not in viewport
const video = document.getElementById('hero-video');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            video.play();
        } else {
            video.pause();
        }
    });
});
observer.observe(video);
```

## Placeholder Images

### Creating Loading Placeholders
```css
/* Blur-up technique */
.lazy-image-container {
    position: relative;
    overflow: hidden;
    background: #f0f0f0;
}

.lazy-image-container img {
    filter: blur(5px);
    transition: filter 0.3s;
}

.lazy-image-container img.loaded {
    filter: blur(0);
}
```

### SVG Placeholders
```html
<!-- Inline SVG placeholder -->
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#e0e0e0"/>
    <text x="50%" y="50%" text-anchor="middle" fill="#999">
        Loading image...
    </text>
</svg>
```

## Implementation Checklist

### Before Starting
- [ ] Install ImageMagick for image optimization
- [ ] Install FFmpeg for video conversion (if using videos)
- [ ] Create all folder structures

### Image Collection (2-3 hours)
- [ ] Download hero section images/video
- [ ] Download all problem section images
- [ ] Download solution section images
- [ ] Download process stage images
- [ ] Download case study images
- [ ] Create/download logo and cert badges

### Image Processing (1-2 hours)
- [ ] Resize all images to specified dimensions
- [ ] Optimize all images (85% quality for JPG)
- [ ] Create WebP versions
- [ ] Create mobile versions for key images
- [ ] Generate video poster frames

### Implementation (1 hour)
- [ ] Add lazy loading to all images
- [ ] Implement responsive images where needed
- [ ] Add proper alt text to all images
- [ ] Test loading performance
- [ ] Verify all images display correctly

## Alternative Image Sources

If specific images aren't available:

### 1. Generic Alternatives
- Instead of "Ghana gold mine" → "african mining operation"
- Instead of "DRC copper mine" → "open pit mine africa"
- Instead of "Nigeria oil roads" → "industrial road africa"

### 2. Composite Images
Create before/after images using CSS:
```html
<div class="before-after-slider">
    <div class="before" style="background-image: url('damaged-road.jpg')"></div>
    <div class="after" style="background-image: url('smooth-road.jpg')"></div>
    <input type="range" class="slider" value="50">
</div>
```

### 3. Icon Resources
- FontAwesome: For problem/solution icons
- Heroicons: For UI elements
- Feather Icons: For clean, simple icons

## Quick Start Commands

```bash
# 1. Create directories
mkdir -p images/{hero,problems,solutions,process,case-studies,icons,misc}

# 2. Download images (example with wget)
wget -O images/hero/mining-truck.jpg "https://images.pexels.com/photos/[PHOTO_ID]/pexels-photo-[PHOTO_ID].jpeg?auto=compress&cs=tinysrgb&w=1920"

# 3. Batch optimize
find images/ -name "*.jpg" -exec convert {} -quality 85 {} \;

# 4. Create WebP versions
for file in images/**/*.jpg; do cwebp -q 80 "$file" -o "${file%.jpg}.webp"; done
```

## Final Notes

1. **Always verify licenses**: Even on free sites, double-check commercial usage rights
2. **Keep original files**: Store high-res originals in a separate folder
3. **Document sources**: Keep a spreadsheet of image sources for attribution if needed
4. **Test on slow connections**: Ensure images load well on 3G connections
5. **Monitor performance**: Use Lighthouse to check image impact on load times

This guide ensures all images are properly sourced, optimized, and implemented for the best possible performance on the Wibari landing page.