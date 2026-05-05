const fs = require('fs');

let styleCss = fs.readFileSync('d:/Project/magtan/cycle/cycle/css/style.css', 'utf8');

if (!styleCss.includes('/* Global Hero Overlay Standardization */')) {
  styleCss += `

/* Global Hero Overlay Standardization */
/* Ensure all hero backgrounds match the about page overlay */
.nexus-hero-bg::after,
.hero-bg-standard::after,
.hero2-bg::after {
  content: '' !important;
  position: absolute !important;
  inset: 0 !important;
  background: linear-gradient(135deg, rgba(15,23,42,0.9), rgba(15,23,42,0.4)) !important;
  z-index: 1 !important;
}

/* For about page where it's applied inline, ensure standard hero styles */
.nexus-hero {
  position: relative;
}

/* Ensure the image behind the overlay is visible properly */
.nexus-hero-bg img,
.hero-bg-standard img,
.hero2-bg img {
  opacity: 1 !important;
  filter: none !important;
}

/* Fix any stacking issues */
.std-hero .container,
.nexus-hero .container,
.hero2-section .container {
  position: relative !important;
  z-index: 2 !important;
}
`;
  fs.writeFileSync('d:/Project/magtan/cycle/cycle/css/style.css', styleCss, 'utf8');
}
console.log("Standardized hero backgrounds.");
