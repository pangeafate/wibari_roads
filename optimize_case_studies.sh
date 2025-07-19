#!/bin/bash

echo "🔧 Optimizing case-studies images for web deployment..."

# Function to optimize an image
optimize_image() {
    local filepath="$1"
    local max_width=800
    local quality=85
    
    if [ -f "$filepath" ]; then
        local filename=$(basename "$filepath")
        
        echo "Processing $filepath..."
        
        # Create backup if it doesn't exist
        if [ ! -f "${filepath}.backup" ]; then
            cp "$filepath" "${filepath}.backup"
        fi
        
        # Get original size
        original_size=$(stat -f%z "$filepath")
        
        # Optimize image: resize to max width, set quality, ensure JPEG format
        sips -Z $max_width -s formatOptions $quality -s format jpeg "${filepath}.backup" --out "$filepath" > /dev/null 2>&1
        
        # Get new size
        new_size=$(stat -f%z "$filepath")
        
        # Calculate savings
        if [ $original_size -gt 0 ]; then
            savings=$(( (original_size - new_size) * 100 / original_size ))
        else
            savings=0
        fi
        
        echo "✅ Optimized $filename: $(( new_size / 1024 ))KB (${savings}% change)"
    else
        echo "⚠️  $filepath not found"
    fi
}

echo ""
echo "📂 Optimizing Case Studies images..."
optimize_image "images/case-studies/nigeria-oil-roads.jpg"
optimize_image "images/case-studies/drc-copper-mine.jpg"
optimize_image "images/case-studies/ghana-gold-mine.jpg"

echo ""
echo "🎯 Case Studies optimization complete!"
echo "All sections now have optimized, professional images ready for deployment." 