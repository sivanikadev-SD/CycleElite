const fs = require('fs');
const files = [
  'd:/Project/magtan/cycle/cycle/css/home.css',
  'd:/Project/magtan/cycle/cycle/css/home2.css',
  'd:/Project/magtan/cycle/cycle/css/home2_nexus.css',
  'd:/Project/magtan/cycle/cycle/css/home2_premium.css',
  'd:/Project/magtan/cycle/cycle/css/style.css'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let lines = content.split('\n');
    let hasMatch = false;
    lines.forEach((line, i) => {
      if (line.includes('[data-theme="light"]') && (line.includes('hero-title') || line.includes('hero-desc') || line.includes('std-hero'))) {
        console.log(`${file}:${i+1}: ${line}`);
      }
    });
  }
});
