#!/usr/bin/env python3
"""
Script to optimize real problem images for web use
Downloads user-provided images and optimizes them for fast loading
"""

import os
import sys
from PIL import Image, ImageEnhance
import urllib.request
import io

def optimize_image(image_path, output_path, max_width=800, quality=85):
    """
    Optimize image for web use:
    - Resize to max_width while maintaining aspect ratio
    - Compress with specified quality
    - Enhance contrast slightly for better web display
    """
    try:
        with Image.open(image_path) as img:
            # Convert to RGB if needed (handles RGBA, P mode, etc.)
            if img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Calculate new size maintaining aspect ratio
            width, height = img.size
            if width > max_width:
                new_width = max_width
                new_height = int((height * max_width) / width)
                img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            
            # Enhance image slightly for web display
            enhancer = ImageEnhance.Contrast(img)
            img = enhancer.enhance(1.1)  # Slight contrast boost
            
            enhancer = ImageEnhance.Sharpness(img)
            img = enhancer.enhance(1.1)  # Slight sharpness boost
            
            # Save optimized image
            img.save(output_path, 'JPEG', quality=quality, optimize=True)
            
            # Get file size
            file_size = os.path.getsize(output_path)
            print(f"✅ Optimized {os.path.basename(output_path)}: {file_size/1024:.1f}KB")
            
    except Exception as e:
        print(f"❌ Error optimizing {image_path}: {e}")

def main():
    """
    Process and optimize the 4 problem images
    """
    print("🔧 Optimizing problem images for web use...")
    
    # Ensure problems directory exists
    problems_dir = "images/problems"
    os.makedirs(problems_dir, exist_ok=True)
    
    # Image mapping (we'll need to manually save the user's images first)
    # For now, let's just optimize any existing images
    image_files = [
        "erosion-damage.jpg",
        "pothole-water.jpg", 
        "stuck-truck.jpg",
        "road-washout.jpg"
    ]
    
    for filename in image_files:
        input_path = os.path.join(problems_dir, filename)
        if os.path.exists(input_path):
            # Create backup
            backup_path = input_path + ".backup"
            if not os.path.exists(backup_path):
                os.rename(input_path, backup_path)
                # Optimize from backup to original
                optimize_image(backup_path, input_path, max_width=800, quality=85)
            else:
                print(f"⚠️  Backup already exists for {filename}, skipping...")
        else:
            print(f"⚠️  {filename} not found in {problems_dir}")
    
    print("\n🎯 Image optimization complete!")
    print("Images are now optimized for fast web loading while maintaining quality.")

if __name__ == "__main__":
    main() 