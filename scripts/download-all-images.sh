#!/bin/bash

BASE_URL="https://www.littlewayassociation.com"
OUTPUT_DIR="public/images/projects"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

echo "Downloading images from $BASE_URL..."
echo ""

# List of images to download - format: "source_filename:destination_filename"
images=(
  "India-Sisters.jpg:india-sisters.jpg"
  "Peru.jpg:peru-mission.jpg"
  "SouthAfrica.jpg:south-africa-aids.jpg"
  "Tanzania.jpg:tanzania-food-shortage.jpg"
  "Congo.jpg:congo-dispensary.jpg"
  "Vietnam.jpg:vietnam-homes.jpg"
  "Wells.jpg:india-wells.jpg"
  "Borewell.jpg:india-borewell.jpg"
  "Leprosy.jpg:india-leprosy.jpg"
  "Zambia.jpg:zambia-mission.jpg"
  "frontpic4.png:hero-1.png"
  "frontpic6.png:hero-2.png"
  "centpic--resized-.png:about-preview.png"
  "centpic2--resized-.png:work-preview.png"
  "centpicourw--resized-.png:our-work-hero.png"
  "centpicwhatyoucan--resized-.png:get-involved-hero.png"
)

for img_pair in "${images[@]}"; do
  IFS=':' read -r source dest <<< "$img_pair"
  url="$BASE_URL/$source"
  output_path="$OUTPUT_DIR/$dest"
  
  # Skip if already exists
  if [ -f "$output_path" ]; then
    echo "✓ Already exists: $dest"
    continue
  fi
  
  echo "Downloading: $source -> $dest"
  if curl -s -f -o "$output_path" "$url"; then
    file_size=$(stat -f%z "$output_path" 2>/dev/null || stat -c%s "$output_path" 2>/dev/null || echo "0")
    if [ "$file_size" -gt 100 ]; then
      echo "✓ Downloaded: $dest ($file_size bytes)"
    else
      echo "✗ File too small, removing: $dest"
      rm -f "$output_path"
    fi
  else
    echo "✗ Failed: $source"
    rm -f "$output_path" 2>/dev/null
  fi
done

echo ""
echo "Download complete!"
