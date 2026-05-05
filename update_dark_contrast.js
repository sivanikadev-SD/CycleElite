const fs = require('fs');
const stylePath = 'd:/Project/magtan/cycle/cycle/css/style.css';
let content = fs.readFileSync(stylePath, 'utf8');

// Ensure that in dark mode, buttons, badges, or elements with primary background have white text
if (!content.includes('[data-theme="dark"] .bg-primary')) {
  content += '\n\n/* Ensure white text on primary/blue backgrounds in dark mode */\n';
  content += '[data-theme="dark"] .bg-primary, \n';
  content += '[data-theme="dark"] .badge-primary, \n';
  content += '[data-theme="dark"] .btn-primary, \n';
  content += '[data-theme="dark"] .gradient-bg { \n';
  content += '  color: #ffffff !important;\n';
  content += '}\n';
  
  // also target nav-logo blue span if needed, but it might just be the word 'Elite'. Let's not touch that if not a bg.
  
  fs.writeFileSync(stylePath, content, 'utf8');
}
console.log('Added dark mode contrast fix.');
