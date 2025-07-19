#!/bin/bash

echo "🔧 Optimizing problem images for fast web loading..."

# Navigate to problems directory
cd images/problems

# Function to optimize an image
optimize_image() {
    local filename="$1"
    local max_width=800
    local quality=85
    
    if [ -f "$filename" ]; then
        echo "Processing $filename..."
        
        # Create backup if it doesn't exist
        if [ ! -f "${filename}.backup" ]; then
            cp "$filename" "${filename}.backup"
        fi
        
        # Get original size
        original_size=$(stat -f%z "$filename")
        
        # Optimize image: resize to max width 800px, set quality, convert to JPEG
        sips -Z $max_width -s formatOptions $quality -s format jpeg "${filename}.backup" --out "$filename" > /dev/null 2>&1
        
        # Get new size
        new_size=$(stat -f%z "$filename")
        
        # Calculate savings
        savings=$(( (original_size - new_size) * 100 / original_size ))
        
        echo "✅ Optimized $filename: $(( new_size / 1024 ))KB (${savings}% smaller)"
    else
        echo "⚠️  $filename not found"
    fi
}

# Optimize all problem images
optimize_image "erosion-damage.jpg"
optimize_image "pothole-water.jpg" 
optimize_image "stuck-truck.jpg"
optimize_image "road-washout.jpg"

echo ""
echo "🎯 Image optimization complete!"
echo "All images are now optimized for fast web loading."

# Go back to project root
cd ../.. 