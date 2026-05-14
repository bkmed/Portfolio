#!/bin/bash

# Format all files in specified directories using Prettier
echo "Running Prettier on src, public, and root configuration files..."

npx prettier --write "src/**/*.{ts,tsx,js,jsx,json,css,scss,md}" \
                     "public/**/*.{json,js}" \
                     "*.{js,mjs,json,md}"

echo "Formatting complete!"
