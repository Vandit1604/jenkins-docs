import os
from rapidfuzz import fuzz

# Define the path to the folder containing .adoc files
adoc_folder = "/home/vandit/gsoc-project/jenkins-docs/blog/authors"

# Read the input file
input_file = "/home/vandit/gsoc-project/jenkins-docs/file.txt"

with open(input_file, 'r') as file:
    for line in file:
        # Assuming each line in the input file is an image file
        image_file = line.strip()
        image_name = os.path.splitext(os.path.basename(image_file))[0]

        # Initialize variables to store the best match and its score
        best_match = None
        best_score = -1

        # Iterate through .adoc files in the folder and find the best match
        for adoc_file in os.listdir(adoc_folder):
            if adoc_file.endswith(".adoc"):
                score = fuzz.ratio(image_name, os.path.splitext(adoc_file)[0])
                if score > best_score:
                    best_match = adoc_file
                    best_score = score

        if best_match:
            # Construct the line to add to the .adoc file
            line_to_add = f":page-author-avatar: {image_file}"

            # Append the line to the .adoc file
            with open(os.path.join(adoc_folder, best_match), 'a') as adoc_file:
                adoc_file.write('\n' + line_to_add)

        else:
            print(f"No matching .adoc file found for {image_file}")

print("Processing complete.")
