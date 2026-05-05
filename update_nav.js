const fs = require('fs');
const path = require('path');

const dir = 'd:/Project/magtan/cycle/cycle';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix RTL icon
  content = content.replace(/<span data-rtl-icon><\/span>/g, '<i data-lucide=\"arrow-left-right\" style=\"width:18px;height:18px;\"><\/i>');

  // Rename Nexus Home
  content = content.replace(/>Nexus Home<\/a>/g, '>Pro Dashboard</a>');
  content = content.replace(/>Home 2 \(Nexus\)<\/a>/g, '>Pro Dashboard</a>');

  // Move About in nav-menu
  // We can look for the about link and remove it, then insert it after the Home dropdown
  let aboutMatch = content.match(/<li><a href="about\.html" class="nav-link(?: active)?">About<\/a><\/li>\s*/);
  if (aboutMatch) {
    content = content.replace(aboutMatch[0], ''); // remove it
    // find where the Home dropdown ends: <\/li>
    content = content.replace(/(<\/div>\s*<\/li>\s*)/, "$1" + aboutMatch[0]);
  }

  // Move About in mobile-drawer
  let aboutMobMatch = content.match(/<a href="about\.html" class="mobile-nav-link(?: active)?">About<\/a>\s*/);
  if (aboutMobMatch) {
    content = content.replace(aboutMobMatch[0], ''); // remove it
    // insert after Pro Dashboard
    content = content.replace(/(<a href="home2\.html" class="mobile-nav-link(?: active)?">Pro Dashboard<\/a>\s*)/, "$1" + aboutMobMatch[0]);
  }

  fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Update complete');
