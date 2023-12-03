import shutil

def copy_files_from_list(file_path_list, target_directory):
    with open(file_path_list, 'r') as file:
        paths = file.readlines()
        paths = [path.strip() for path in paths]  # Remove any leading/trailing whitespaces or newlines
    
    for file_path in paths:
        try:
            shutil.copy(file_path, target_directory)
            print(f"File '{file_path}' copied to '{target_directory}' successfully.")
        except FileNotFoundError:
            print(f"File '{file_path}' not found.")
        except PermissionError:
            print(f"No permission to copy '{file_path}'.")

# Usage example:
file_list_path = '/home/vandit/Documents/updated.txt'  # Change this to the path of your file containing the file paths
target_dir = '/home/vandit/Documents/new-content/'  # Change this to your desired target directory

copy_files_from_list(file_list_path, target_dir)
