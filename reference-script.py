import os

def convert_adoc_files(root_dir):
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".adoc"):
                filepath = os.path.join(root, file)
                convert_adoc_file(filepath)

def convert_adoc_file(filepath):
    with open(filepath, 'r') as file:
        content = file.read()

    # Find and replace the specified text format
    converted_content = content.replace('---\ntitle:', '=').replace('layout: developer\n', '')

    with open(filepath, 'w') as file:
        file.write(converted_content)

# Specify the root directory to search for .adoc files
root_directory = '/home/vandit/gsoc-project-demo/antora-jenkins/docs/dev-docs'

convert_adoc_files(root_directory)
