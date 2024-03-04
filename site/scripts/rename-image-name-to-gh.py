import os
import re
import shutil

def update_file_names(directory):
    for subdir, _, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(subdir, file)
            if os.path.isfile(file_path):
                with open(file_path, 'r') as f:
                    content = f.read()
                    github_match = re.search(r':page-github:\s*(\S+)', content)
                    avatar_match = re.search(r':page-authoravatar:\s*(\S+)', content)

                    if github_match and avatar_match:
                        github_value = github_match.group(1)
                        avatar_path = avatar_match.group(1)
                        _, ext = os.path.splitext(avatar_path)
                        
                        full_avatar_path = os.path.normpath(os.path.join(os.path.dirname(file_path), avatar_path))
                        
                        if os.path.exists(full_avatar_path):
                            new_avatar_name = os.path.join(os.path.dirname(full_avatar_path), f'{github_value}{ext}')
                            os.rename(full_avatar_path, new_avatar_name)
                            print(f"Renamed {full_avatar_path} to {new_avatar_name} based on {github_value} in {file_path}")
                        else:
                            print(f"File path {full_avatar_path} from {file_path} does not exist.")

# Replace 'directory_path' with the path to the directory you want to traverse
directory_path = '/home/vandit/gsoc-project/jenkins-docs/blog/authors'
update_file_names(directory_path)
