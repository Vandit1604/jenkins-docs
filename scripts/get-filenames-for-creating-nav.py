import os

def create_file_list(directory):
    file_list = os.listdir(directory)
    
    # Create a new file to store the list
    output_file = 'file_list.txt'
    with open(output_file, 'w') as file:
        for filename in file_list:
            file.write(filename + '\n')
    
    print(f"File list created successfully. Please check '{output_file}'.")

# Prompt the user to input a directory
directory = input("Enter the directory path: ")

# Call the function
create_file_list(directory)
