import os
import shutil

# Define the directories
directory_a = '/home/vandit/Documents/new-content'
directory_b = '/home/vandit/gsoc-project/jenkins-docs/docs'

# Function to search for files in directory A and replace if found in directory B
def replace_files():
    for root, _, files in os.walk(directory_b):
        for file in files:
            file_path = os.path.join(root, file)
            file_to_replace = os.path.join(directory_a, file)
            if os.path.isfile(file_to_replace):
                shutil.copyfile(file_to_replace, file_path)
                print(f"Replaced file: {file} in directory B")
            else:
                print(f"File not found in directory A: {file}")

# Call the function to perform the replacement
replace_files()
