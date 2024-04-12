import os
import sys
import re

def find_image_files(root_dir):
    image_files = {}
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.lower().endswith(".png"):
                image_files[file.lower()] = os.path.relpath(os.path.join(root, file), root_dir)
    return image_files

def fix_markdown_files(top_folder, image_folder):
    image_files = find_image_files(image_folder)
    markdown_link_pattern = re.compile(r'!\[.*?\]\((.*?)\)')

    for root, dirs, files in os.walk(top_folder):
        for file in files:
            if file.lower().endswith(".md"):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                modified = False
                matches = markdown_link_pattern.findall(content)
                for match in matches:
                    image_name = os.path.basename(match)
                    if image_name.lower() in image_files:
                    
                        new_path = "/" + os.path.join(image_folder, image_files[image_name.lower()])
                        content = content.replace(match, new_path)
                        if match != new_path:
                            print(f"> Path: {match} replaced with: {new_path}")
                            modified = True

                if modified:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"Processed {file_path}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        
        print("Usage: fiximages.py <topfolder> <imagefolder>")
        print("Fixes the image links to PNGs in all markdown files in the topfolder.")
        print("topfolder: The top-level folder to search for markdown files.")
        print("imagefolder: The folder containing the PNG images.")
        sys.exit(1)

    top_folder = sys.argv[1]
    image_folder = sys.argv[2]
    fix_markdown_files(top_folder, image_folder)
