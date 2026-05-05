const fs = require('fs');

// Fix home2.css 360px layout issues
let home2Css = fs.readFileSync('d:/Project/magtan/cycle/cycle/css/home2.css', 'utf8');
if (!home2Css.includes('/* 360px fixes */')) {
  home2Css += `
/* 360px fixes */
@media (max-width: 360px) {
  .hero2-dashboard { padding: 12px; }
  .hero2-db-header { flex-direction: column; gap: 10px; align-items: flex-start; }
  .hero2-db-stats { grid-template-columns: 1fr; }
  .hero2-actions { flex-direction: column; gap: 12px; }
  .hero2-actions .btn { width: 100%; justify-content: center; }
}
`;
  fs.writeFileSync('d:/Project/magtan/cycle/cycle/css/home2.css', home2Css, 'utf8');
}

// Fix home2_premium.css 360px layout issues
let premiumCss = fs.readFileSync('d:/Project/magtan/cycle/cycle/css/home2_premium.css', 'utf8');
if (!premiumCss.includes('/* 360px fixes */')) {
  premiumCss += `
/* 360px fixes */
@media (max-width: 480px) {
  .h2p-hero-actions { flex-direction: column; width: 100%; gap: 12px; }
  .h2p-hero-actions .h2p-btn { width: 100%; justify-content: center; }
}
`;
  fs.writeFileSync('d:/Project/magtan/cycle/cycle/css/home2_premium.css', premiumCss, 'utf8');
}

// Fix style.css for app-float-card issue
let styleCss = fs.readFileSync('d:/Project/magtan/cycle/cycle/css/style.css', 'utf8');
if (!styleCss.includes('.app-float-card-fix')) {
  styleCss += `
/* app-float-card-fix */
@media (max-width: 480px) {
  .app-float-card {
    left: 10px !important;
    right: auto !important;
    transform: scale(0.85);
  }
}
`;
  fs.writeFileSync('d:/Project/magtan/cycle/cycle/css/style.css', styleCss, 'utf8');
}
console.log('Fixed 360px layouts');
