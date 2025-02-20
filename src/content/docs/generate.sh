#!/bin/bash

# Define filenames and their content
files=(
    "01_Introduction.md:# 1. Introduction\n\n- What is SuperSIM?\n- Key features and capabilities\n- Who should use this tool?"
    "02_Installation.md:# 2. Installation\n\n- System requirements\n- Installation steps (Linux, Windows, macOS)\n- Verifying installation"
    "03_Quick_Start.md:# 3. Quick Start\n\n- Running a basic simulation\n- Example input and output\n- Understanding results"
    "04_Usage_Guide.md:# 4. Usage Guide\n\n- How to prepare input files\n- Running simulations with different settings\n- Interpreting output data"
    "05_Advanced_Features.md:# 5. Advanced Features\n\n- Customizing parameters\n- Performance optimization tips"
    "06_Troubleshooting_FAQs.md:# 6. Troubleshooting & FAQs\n\n- Common errors and solutions\n- Frequently asked questions"
    "07_Support_Contributions.md:# 7. Support & Contributions\n\n- Where to ask for help\n- How to contribute to SuperSIM"
)

# Loop through the files array and create Markdown files
for entry in "${files[@]}"; do
    filename="${entry%%:*}"  # Extract filename before the first colon
    content="${entry#*:}"    # Extract content after the first colon
    echo -e "$content" > "$filename"
    echo "Created $filename"
done

echo "All Markdown files have been generated successfully."