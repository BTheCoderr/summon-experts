#!/bin/bash

echo "🚀 Building Summon Experts Landing Page..."

# Build the project
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📁 Your built files are in the 'dist' folder"
    echo ""
    echo "🌐 Deployment Options:"
    echo "1. Netlify: Drag the 'dist' folder to netlify.com"
    echo "2. Vercel: Run 'vercel' in this directory"
    echo "3. GitHub Pages: Run 'npm run deploy' (if configured)"
    echo ""
    echo "🔗 Preview locally: npm run preview"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi 