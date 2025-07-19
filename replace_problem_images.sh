#!/bin/bash

echo "🔄 Problem Images Replacement Helper"
echo "=================================="

# Function to replace an image
replace_image() {
    local source_file="$1"
    local target_name="$2"
    local description="$3"
    
    if [ -f "$source_file" ]; then
        echo "📋 Replacing $target_name with $source_file"
        echo "   → $description"
        
        # Copy to correct location
        cp "$source_file" "images/problems/$target_name"
        echo "   ✅ Copied successfully"
        echo ""
    else
        echo "⚠️  Source file $source_file not found"
        echo "   Please upload your image as $source_file first"
        echo ""
    fi
}

echo "This script will help you replace placeholder images with your real photos."
echo ""
echo "Instructions:"
echo "1. Save your 4 images in the project root as:"
echo "   - cracked_road.jpg (your first image - cracked dirt road)"
echo "   - pothole_water.jpg (your second image - potholes with water)"  
echo "   - stuck_trucks.jpg (your third image - trucks stuck in mud)"
echo "   - road_collapse.jpg (your fourth image - road washout)"
echo ""
echo "2. Run this script again: ./replace_problem_images.sh"
echo ""

# Check if user images exist and replace them
replace_image "cracked_road.jpg" "erosion-damage.jpg" "Cracked dirt road → Erosion & Failure problem"
replace_image "pothole_water.jpg" "pothole-water.jpg" "Potholes with water → Water Damage problem"
replace_image "stuck_trucks.jpg" "stuck-truck.jpg" "Trucks stuck in mud → Vehicle Delays problem"
replace_image "road_collapse.jpg" "road-washout.jpg" "Road washout → Infrastructure Loss problem"

# Check if any images were replaced
if [ -f "cracked_road.jpg" ] || [ -f "pothole_water.jpg" ] || [ -f "stuck_trucks.jpg" ] || [ -f "road_collapse.jpg" ]; then
    echo "🎯 Running optimization on new images..."
    ./optimize_images.sh
    
    echo ""
    echo "🚀 SUCCESS! Your real images are now in place and optimized."
    echo "   Test your website: python3 -m http.server 8002"
    echo "   The Problems section now shows your authentic road photos!"
else
    echo "📥 Please upload your 4 images with the names shown above, then run this script."
fi 