# 📸 Image Download Guide - Wibari Mining Roads Website

## 🎯 Overview
This guide provides step-by-step instructions for downloading and replacing placeholder images with professional mining/construction photos from free stock photo sites.

## 📁 Current Status
✅ **20 placeholder images** have been generated in proper sizes  
✅ **HTML updated** to use image paths  
✅ **CSS optimized** for image display  
⏳ **Real images needed** - follow guide below  

## 🔍 Image Requirements by Section

### 1. HERO SECTION
**Location**: `images/hero/`

#### mining-truck-dust.jpg (1920x1080)
- **Search Terms**: "mining truck dust road", "construction vehicle africa", "heavy equipment mining"
- **Recommended Sites**: 
  - [Pexels - Mining Trucks](https://www.pexels.com/search/mining%20truck/)
  - [Unsplash - Construction Vehicles](https://unsplash.com/s/photos/construction-vehicle)
- **Requirements**: Wide shot of mining trucks on dusty/muddy roads
- **Style**: Dramatic, industrial setting

### 2. PROBLEM SECTION  
**Location**: `images/problems/`

#### pothole-water.jpg (800x600)
- **Search Terms**: "pothole water", "road damage water", "flooded pothole"
- **Sites**: [Pexels - Pothole](https://www.pexels.com/search/pothole/)
- **Requirements**: Deep pothole filled with muddy water

#### stuck-truck.jpg (800x600)
- **Search Terms**: "stuck truck mud", "vehicle stuck", "mining equipment mud"
- **Sites**: [Unsplash - Stuck Vehicle](https://unsplash.com/s/photos/stuck-truck)
- **Requirements**: Heavy vehicle or truck stuck in mud/poor road conditions

#### erosion-damage.jpg (800x600)
- **Search Terms**: "road erosion", "road damage", "washout road"
- **Sites**: [Pixabay - Road Erosion](https://pixabay.com/images/search/road%20erosion/)
- **Requirements**: Severe road erosion or surface damage

#### road-washout.jpg (800x600)
- **Search Terms**: "flood road damage", "road washout", "storm damage road"
- **Sites**: [Pexels - Flood Damage](https://www.pexels.com/search/flood%20damage/)
- **Requirements**: Road damage from flooding/washout

### 3. SOLUTION SECTION
**Location**: `images/solutions/`

#### heavy-equipment.jpg (1200x800)
- **Search Terms**: "400 ton mining truck", "heavy mining equipment", "large mining vehicle"
- **Sites**: [Pexels - Heavy Equipment](https://www.pexels.com/search/heavy%20equipment/)
- **Requirements**: Massive mining truck (preferably 400+ ton capacity)

#### construction-process.jpg (1200x800)
- **Search Terms**: "road construction equipment", "construction machinery working", "road building"
- **Sites**: [Unsplash - Construction](https://unsplash.com/s/photos/road-construction)
- **Requirements**: Construction equipment actively working on road project

### 4. PROCESS SECTION
**Location**: `images/process/`

#### soil-testing.jpg (600x400)
- **Search Terms**: "soil testing equipment", "geotechnical testing", "soil analysis"
- **Sites**: [Pexels - Soil Testing](https://www.pexels.com/search/soil%20testing/)
- **Requirements**: Engineers with soil testing equipment

#### engineering-plans.jpg (600x400)
- **Search Terms**: "construction blueprint", "engineering drawings", "technical plans"
- **Sites**: [Unsplash - Blueprint](https://unsplash.com/s/photos/construction-blueprint)
- **Requirements**: Technical drawings, blueprints, or engineering plans

#### aerial-mapping.jpg (600x400)
- **Search Terms**: "aerial construction view", "drone construction site", "bird view mining"
- **Sites**: [Pixabay - Aerial Construction](https://pixabay.com/images/search/aerial%20construction/)
- **Requirements**: Aerial/drone view of construction or mining site

#### construction-crew.jpg (600x400)
- **Search Terms**: "construction crew working", "construction workers africa", "diverse construction team"
- **Sites**: [Pexels - Construction Workers](https://www.pexels.com/search/construction%20workers/)
- **Requirements**: Professional construction crew at work

### 5. CASE STUDIES SECTION
**Location**: `images/case-studies/`

#### nigeria-oil-roads.jpg (800x500)
- **Search Terms**: "nigeria oil field", "oil industry africa", "petroleum infrastructure"
- **Sites**: [Pexels - Oil Industry](https://www.pexels.com/search/oil%20industry/)
- **Requirements**: Industrial oil field setting with roads/infrastructure

#### drc-copper-mine.jpg (800x500)
- **Search Terms**: "copper mine africa", "open pit mine", "mining operation trucks"
- **Sites**: [Unsplash - Mining](https://unsplash.com/s/photos/copper-mine)
- **Requirements**: Large scale mining operation with haul trucks

#### ghana-gold-mine.jpg (800x500)
- **Search Terms**: "gold mine ghana", "african gold mining", "mining operation africa"
- **Sites**: [Pixabay - Gold Mining](https://pixabay.com/images/search/gold%20mine/)
- **Requirements**: Gold mining operation, preferably in African setting

## 🛠️ Download & Optimization Process

### Step 1: Download Images
1. **Visit recommended sites** (Pexels, Unsplash, Pixabay)
2. **Search using provided terms**
3. **Download in highest available resolution**
4. **Ensure "Free for Commercial Use" license**
5. **Save with exact filename** from guide

### Step 2: Image Optimization
```bash
# Using ImageMagick (install: brew install imagemagick)

# Resize and optimize JPG images
convert input.jpg -resize 1920x1080^ -gravity center -crop 1920x1080+0+0 -quality 85 output.jpg

# Compress all images in a folder
find images/ -name "*.jpg" -exec convert {} -quality 85 -strip {} \;

# Create WebP versions for better performance
find images/ -name "*.jpg" -exec cwebp -q 80 {} -o {}.webp \;
```

### Step 3: Replace Placeholders
1. **Navigate to appropriate folder** (e.g., `images/hero/`)
2. **Replace placeholder** with optimized real image
3. **Keep exact same filename**
4. **Test loading** in browser

### Step 4: Quality Check
- ✅ **File sizes** under 200KB each
- ✅ **Proper dimensions** matching requirements
- ✅ **Good visual quality** at web resolution
- ✅ **Fast loading** on slow connections

## 📋 Alternative Image Sources

### If Specific Images Not Available:
- **Mining trucks** → "heavy construction equipment"
- **African mining** → "industrial mining operation" 
- **Specific countries** → "african industrial infrastructure"
- **Oil fields** → "petroleum industrial complex"

### Backup Free Image Sites:
- [StockVault](https://www.stockvault.net/)
- [FreeImages](https://www.freeimages.com/)
- [Burst by Shopify](https://burst.shopify.com/)
- [Nappy](https://nappy.co/) (diverse people in images)

## 🎨 Image Style Guidelines

### Visual Consistency:
- **Color palette**: Earthy tones, industrial colors
- **Lighting**: Professional, well-lit images
- **Composition**: Clear subjects, minimal distractions
- **Quality**: High resolution, sharp focus

### Content Guidelines:
- **Professional appearance** - no amateur photos
- **Industrial/mining focus** - relevant to target audience
- **Diverse representation** - when showing people
- **Modern equipment** - current technology, not outdated

## ⚡ Performance Optimization

### Target Specs:
- **Hero image**: 1920x1080, <300KB
- **Problem images**: 800x600, <150KB each
- **Solution images**: 1200x800, <200KB each
- **Process images**: 600x400, <100KB each
- **Case study images**: 800x500, <150KB each

### WebP Conversion:
```bash
# Convert all JPG to WebP for better compression
for file in images/**/*.jpg; do
    cwebp -q 80 "$file" -o "${file%.jpg}.webp"
done
```

### HTML Implementation:
```html
<!-- Use picture element for WebP support -->
<picture>
    <source srcset="images/hero/mining-truck.webp" type="image/webp">
    <img src="images/hero/mining-truck.jpg" alt="Mining truck on road">
</picture>
```

## 📸 Quick Start Checklist

- [ ] **Choose 5 priority images** (hero + 4 problems)
- [ ] **Download from Pexels/Unsplash**
- [ ] **Optimize file sizes** (<200KB each)
- [ ] **Replace placeholders** with same filenames
- [ ] **Test website loading** speed
- [ ] **Download remaining images** 
- [ ] **Create WebP versions** for performance
- [ ] **Final optimization** and testing

## 🔗 Direct Links for Quick Access

### Priority Downloads (Start Here):
1. [Mining Trucks - Pexels](https://www.pexels.com/search/mining%20truck/)
2. [Road Damage - Pexels](https://www.pexels.com/search/pothole/)
3. [Construction Equipment - Unsplash](https://unsplash.com/s/photos/heavy-equipment)
4. [Mining Operations - Pixabay](https://pixabay.com/images/search/mining/)

### License Information:
- **Pexels**: Free for commercial use, no attribution required
- **Unsplash**: Free for commercial use, attribution appreciated
- **Pixabay**: Free for commercial use, no attribution required

---

**📞 Need Help?** 
- Check image licenses before use
- Optimize for web to maintain fast loading
- Test on mobile devices for responsiveness
- Keep backups of original high-res images

**🎯 Goal**: Professional, fast-loading website that converts mining company visitors into leads! 