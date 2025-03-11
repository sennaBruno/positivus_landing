#!/bin/bash

# Deployment script for Vercel

echo "Starting deployment to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Run build to ensure everything is working
echo "Building project..."
npm run build

# If build is successful, deploy to Vercel
if [ $? -eq 0 ]; then
    echo "Build successful! Deploying to Vercel..."
    
    # Check if this is the first deployment
    if [ ! -f ".vercel/project.json" ]; then
        echo "First deployment - you'll need to authenticate and set up the project."
        vercel
    else
        echo "Deploying existing project..."
        vercel --prod
    fi
else
    echo "Build failed. Please fix the errors before deploying."
    exit 1
fi 