#!/usr/bin/env python3

"""
Generate placeholder images for Wibari website visual assets.
This script creates properly sized placeholder images that can be replaced with real images later.
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_placeholder(width, height, text, filename, bg_color=(31, 31, 35), text_color=(249, 115, 22)):
    """Create a placeholder image with text overlay."""
    # Create image with background color
    img = Image.new('RGB', (width, height), bg_color)
    draw = ImageDraw.Draw(img)
    
    # Try to use a default font, fallback to basic font
    try:
        font_size = min(width, height) // 15
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", font_size)
    except:
        try:
            font_size = min(width, height) // 15
            font = ImageFont.truetype("arial.ttf", font_size)
        except:
            font = ImageFont.load_default()
    
    # Calculate text position (centered)
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    x = (width - text_width) // 2
    y = (height - text_height) // 2
    
    # Draw text
    draw.text((x, y), text, font=font, fill=text_color)
    
    # Add border
    draw.rectangle([0, 0, width-1, height-1], outline=text_color, width=2)
    
    return img

def main():
    # Ensure images directory exists
    image_configs = [
        # Hero section
        ("images/hero", "mining-truck-dust.jpg", 1920, 1080, "Mining Truck\nDust Road"),
        
        # Problem section
        ("images/problems", "pothole-water.jpg", 800, 600, "Water-Filled\nPothole"),
        ("images/problems", "stuck-truck.jpg", 800, 600, "Stuck Mining\nVehicle"),
        ("images/problems", "erosion-damage.jpg", 800, 600, "Road Erosion\nDamage"),
        ("images/problems", "road-washout.jpg", 800, 600, "Road Washout\nDamage"),
        
        # Solution section
        ("images/solutions", "heavy-equipment.jpg", 1200, 800, "400-Ton Mining\nTruck"),
        ("images/solutions", "construction-process.jpg", 1200, 800, "Construction\nProcess"),
        ("images/solutions", "stabilized-road.jpg", 1200, 800, "Stabilized\nRoad"),
        
        # Process section
        ("images/process", "soil-testing.jpg", 600, 400, "Soil Testing\nEquipment"),
        ("images/process", "engineering-plans.jpg", 600, 400, "Engineering\nBlueprints"),
        ("images/process", "aerial-mapping.jpg", 600, 400, "Aerial Site\nMapping"),
        ("images/process", "construction-crew.jpg", 600, 400, "Construction\nCrew"),
        
        # Case studies
        ("images/case-studies", "nigeria-oil-roads.jpg", 800, 500, "Nigerian Oil\nField Roads"),
        ("images/case-studies", "drc-copper-mine.jpg", 800, 500, "DRC Copper\nMine"),
        ("images/case-studies", "ghana-gold-mine.jpg", 800, 500, "Ghana Gold\nMining"),
        
        # Icons
        ("images/icons", "wibari-logo.png", 200, 200, "WIBARI\nLOGO"),
        ("images/icons", "iso-cert.png", 150, 150, "ISO\n9001"),
        ("images/icons", "ce-mark.png", 150, 150, "CE\nMARK"),
        
        # Misc
        ("images/misc", "before-after.jpg", 1200, 600, "Before/After\nComparison"),
        ("images/misc", "testimonial-bg.jpg", 1200, 400, "Testimonial\nBackground"),
    ]
    
    for folder, filename, width, height, text in image_configs:
        # Create directory if it doesn't exist
        os.makedirs(folder, exist_ok=True)
        
        # Create placeholder image
        img = create_placeholder(width, height, text, filename)
        
        # Save image
        filepath = os.path.join(folder, filename)
        img.save(filepath, quality=85, optimize=True)
        print(f"Created: {filepath} ({width}x{height})")
    
    print(f"\n✅ Generated {len(image_configs)} placeholder images")
    print("\n📋 Next Steps:")
    print("1. Replace placeholders with real images from Pexels/Unsplash/Pixabay")
    print("2. Ensure all images are optimized for web (compress to ~100KB each)")
    print("3. Update alt text in HTML for better accessibility")
    print("4. Test loading performance on slow connections")

if __name__ == "__main__":
    main() 