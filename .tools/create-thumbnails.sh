
#!/bin/bash

PROJECTS_DIR="./projects"

for dir in "$PROJECTS_DIR"/*/; do
    if [ -d "$dir" ]; then
        for img in "$dir"/*-cover.jpg "$dir"/*-cover.jpeg; do
            if [ -f "$img" ]; then
                # Get the base name without -cover.jpg or -cover.jpeg
                img_base="${img%-cover.*}"
                thumb="${img_base}-thumbnail.jpg"
                # Create thumbnail: resize to 300x300 with cropping (object-cover), quality 60%
                convert "$img" -resize 300x300^ -gravity center -extent 300x300 -quality 60 "$thumb"
                echo "Created thumbnail: $thumb"
            fi
        done
    fi
done