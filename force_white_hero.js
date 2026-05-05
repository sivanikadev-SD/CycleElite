const fs = require('fs');

let styleCss = fs.readFileSync('d:/Project/magtan/cycle/cycle/css/style.css', 'utf8');

if (!styleCss.includes('/* Force White Text in Hero Sections */')) {
  styleCss += `
/* Force White Text in Hero Sections */
.nexus-hero .nexus-hero-title,
.nexus-hero .nexus-hero-desc,
.std-hero .std-hero-title,
.std-hero .std-hero-desc,
.hero2-section .hero2-title,
.hero2-section .hero2-desc,
.hero-section .hero-title,
.hero-section .hero-desc {
  color: #ffffff !important;
}

.nexus-hero .nexus-hero-desc,
.std-hero .std-hero-desc,
.hero2-section .hero2-desc,
.hero-section .hero-desc {
  color: rgba(255, 255, 255, 0.8) !important;
}

.nexus-hero .section-badge,
.std-hero .section-badge,
.hero2-section .hero-badge,
.hero-section .hero-badge {
  background: rgba(255, 255, 255, 0.15) !important;
  color: #ffffff !important;
  border-color: rgba(255, 255, 255, 0.3) !important;
}

[data-theme="light"] .home2-nexus .nexus-hero-title span {
  -webkit-text-fill-color: #ffffff !important;
  color: #ffffff !important;
  background: none !important;
}
`;
  fs.writeFileSync('d:/Project/magtan/cycle/cycle/css/style.css', styleCss, 'utf8');
}
console.log("Forced white text in all hero sections globally.");
