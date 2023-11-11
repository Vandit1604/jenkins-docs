import os
import re
import shutil

def find_and_rename(repository_path):
    # Check if the repository path exists
    if not os.path.exists(repository_path):
        print(f"Error: The repository path '{repository_path}' does not exist.")
        return

    # Iterate through each file in the repository
    for root, dirs, files in os.walk(repository_path):
        for file_name in files:
            file_path = os.path.join(root, file_name)

            # Read the content of the file
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()

            # Search for the pattern using regular expression
            match = re.search(r':page-github:\s*(?P<name>.+)', content)

            if match:
                # Extract the name from the regex match
                new_file_name = match.group('name').strip() + '.adoc'

                # Construct the new file path
                new_file_path = os.path.join(root, new_file_name)

                # Rename the file
                shutil.move(file_path, new_file_path)

                print(f"Renamed '{file_name}' to '{new_file_name}'.")

if __name__ == "__main__":
    # Prompt the user to enter the path to the repository
    repository_path = input("Enter the path to the repository: ")

    # Call the function to find and rename files
    find_and_rename(repository_path)
