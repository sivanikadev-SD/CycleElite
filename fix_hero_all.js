const fs = require('fs');

let styleCss = fs.readFileSync('d:/Project/magtan/cycle/cycle/css/style.css', 'utf8');

if (!styleCss.includes('/* Catch-all for dark hero sections */')) {
  styleCss += `

/* Catch-all for dark hero sections */
.nexus-hero *,
.std-hero *,
.hero2-section * {
  /* Only apply to elements that typically inherit text color */
}

.nexus-hero h1, .nexus-hero h2, .nexus-hero h3, .nexus-hero p, .nexus-hero div, .nexus-hero span:not(.gradient-text):not(.pulse),
.std-hero h1, .std-hero h2, .std-hero h3, .std-hero p, .std-hero div, .std-hero span:not(.gradient-text):not(.pulse),
.hero2-section h1, .hero2-section h2, .hero2-section h3, .hero2-section p, .hero2-section div, .hero2-section span:not(.gradient-text-blue):not(.pulse-dot) {
  text-shadow: 0 2px 10px rgba(0,0,0,0.5); /* subtle shadow for better readability */
}

/* Ensure features list is white */
.hero2-feat {
  color: #ffffff !important;
}
`;
  fs.writeFileSync('d:/Project/magtan/cycle/cycle/css/style.css', styleCss, 'utf8');
}
console.log("Added text shadow and explicit colors for hero content.");
