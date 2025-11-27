
#!/bin/bash

PROJECTS_DIR="./projects"
TARGET_WIDTH=1280
TARGET_HEIGHT=1080

# Step 1: Convert all .png files to .jpg with target width
for dir in "$PROJECTS_DIR"/*/; do
    if [ -d "$dir" ]; then
        project_name=$(basename "$dir")
        for png_file in "$dir"*.png; do
            if [ -f "$png_file" ]; then
                base=$(basename "$png_file" .png)
                convert "$png_file" -resize ${TARGET_WIDTH}x "$dir$base.jpg"
            fi
        done
    fi
done

# Step 2: Delete all .png files
for dir in "$PROJECTS_DIR"/*/; do
    if [ -d "$dir" ]; then
        rm -f "$dir"*.png
    fi
done

# Step 3: Rename .jpg files, skipping those with 'cover' or 'thumbnail'
for dir in "$PROJECTS_DIR"/*/; do
    if [ -d "$dir" ]; then
        project_name=$(basename "$dir")
        # Collect list of jpg files not containing 'cover' or 'thumbnail', sorted
        files=()
        mapfile -d '' all_files < <(find "$dir" -maxdepth 1 -name "*.jpg" -print0 | sort -z)
        for jpg_file in "${all_files[@]}"; do
            base=$(basename "$jpg_file")
            if [[ "$base" != *cover* && "$base" != *thumbnail* ]]; then
                files+=("$jpg_file")
            fi
        done
        # Rename them sequentially
        index=1
        for file in "${files[@]}"; do
            target="$dir${project_name}-${index}.jpg"
            if [ "$file" != "$target" ]; then
                mv "$file" "$target"
            fi
            ((index++))
        done
    fi
done

# Step 4: Rename any .jpeg files to .jpg
for dir in "$PROJECTS_DIR"/*/; do
    if [ -d "$dir" ]; then
        for jpeg_file in "$dir"*.jpeg; do
            if [ -f "$jpeg_file" ]; then
                mv "$jpeg_file" "${jpeg_file%.jpeg}.jpg"
            fi
        done
    fi
done

# Step 5: Resize all .jpg files to fit within target dimensions
for dir in "$PROJECTS_DIR"/*/; do
    if [ -d "$dir" ]; then
        for jpg_file in "$dir"*.jpg; do
            if [ -f "$jpg_file" ]; then
                convert "$jpg_file" -resize ${TARGET_WIDTH}x${TARGET_HEIGHT} -strip "$jpg_file"
            fi
        done
    fi
done

