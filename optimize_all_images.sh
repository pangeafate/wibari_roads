#!/bin/bash

echo "🔧 Optimizing solutions and process images for fast web loading..."

# Function to optimize an image
optimize_image() {
    local filepath="$1"
    local max_width=800
    local quality=85
    
    if [ -f "$filepath" ]; then
        local filename=$(basename "$filepath")
        local directory=$(dirname "$filepath")
        
        echo "Processing $filepath..."
        
        # Create backup if it doesn't exist
        if [ ! -f "${filepath}.backup" ]; then
            cp "$filepath" "${filepath}.backup"
        fi
        
        # Get original size
        original_size=$(stat -f%z "$filepath")
        
        # Optimize image: resize to max width, set quality, convert to JPEG
        sips -Z $max_width -s formatOptions $quality -s format jpeg "${filepath}.backup" --out "$filepath" > /dev/null 2>&1
        
        # Get new size
        new_size=$(stat -f%z "$filepath")
        
        # Calculate savings
        if [ $original_size -gt 0 ]; then
            savings=$(( (original_size - new_size) * 100 / original_size ))
        else
            savings=0
        fi
        
        echo "✅ Optimized $filename: $(( new_size / 1024 ))KB (${savings}% smaller)"
    else
        echo "⚠️  $filepath not found"
    fi
}

# Go to project root
cd /Users/sergeypodolskiy/CODEBASE/25\ 07\ 19\ African\ Roads\ vC

echo ""
echo "📂 Optimizing Solutions images..."
optimize_image "images/solutions/heavy-equipment.jpg"
optimize_image "images/solutions/construction-process.jpg"

echo ""
echo "📂 Optimizing Process images..."
optimize_image "images/process/soil-testing.jpg"
optimize_image "images/process/engineering-plans.jpg"
optimize_image "images/process/aerial-mapping.jpg"
optimize_image "images/process/construction-crew.jpg"

echo ""
echo "🎯 All image optimization complete!"
echo "Solutions and Process sections now have fast-loading, high-quality images." 