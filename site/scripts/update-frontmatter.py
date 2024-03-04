import os
import re

# Function to update frontmatter attributes
def update_frontmatter(file_path):
    with open(file_path, 'r') as file:
        content = file.read()

        # Find frontmatter section between '---' delimiters
        frontmatter = re.search(r'---\n(.*?)\n---', content, re.DOTALL)

        if frontmatter:
            attributes = frontmatter.group(1)

            # Update attribute names
            updated_attributes = re.sub(r'^(\w+):', r':page-\1', attributes, flags=re.MULTILINE)

            # Replace old frontmatter with updated one
            updated_content = content.replace(attributes, updated_attributes)

            # Write updated content back to the file
            with open(file_path, 'w') as updated_file:
                updated_file.write(updated_content)
                print(f"Updated frontmatter in '{file_path}'")

# Update frontmatter in multiple files
directory = '/path/to/your/files'  # Update this with your directory path
for filename in os.listdir(directory):
    if filename.endswith('.md'):  # Update file extension if needed
        file_path = os.path.join(directory, filename)
        update_frontmatter(file_path)
