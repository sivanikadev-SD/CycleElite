const fs = require('fs');

let indexContent = fs.readFileSync('d:/Project/magtan/cycle/cycle/index.html', 'utf8');
let aboutContent = fs.readFileSync('d:/Project/magtan/cycle/cycle/about.html', 'utf8');

// Extract full footer from index.html
const footerMatch = indexContent.match(/<footer class="footer">[\s\S]*?<\/footer>/);
if (footerMatch && aboutContent.includes('<footer class="footer"')) {
  // Replace about.html footer
  aboutContent = aboutContent.replace(/<footer class="footer"[\s\S]*?<\/footer>/, footerMatch[0]);
}

// Update About Hero Section
const heroOverlay = `
    <!-- HERO SECTION -->
    <header class="nexus-hero" style="min-height: 60vh; padding: 160px 0 80px; background-image: url('images/coaches_hero_bg.png'); background-size: cover; background-position: center; position: relative;">
        <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(15,23,42,0.9), rgba(15,23,42,0.4)); z-index: 1;"></div>
        <div class="container" style="position: relative; z-index: 2;">
`;
aboutContent = aboutContent.replace(/<header class="nexus-hero" style="[^"]*">\s*<div class="container">/, heroOverlay);

// Update last section (Built by Athletes)
aboutContent = aboutContent.replace(/<section class="nexus-section" style="background: rgba\(15, 23, 42, 0\.4\);(?: padding[^"]*)?">/, '<section class="nexus-section" style="background: var(--bg-2); padding: 80px 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);">');

fs.writeFileSync('d:/Project/magtan/cycle/cycle/about.html', aboutContent, 'utf8');
console.log('About page updated');
