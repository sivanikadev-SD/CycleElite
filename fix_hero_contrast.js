const fs = require('fs');

// 1. Fix home2_nexus.css
let nexusCss = fs.readFileSync('d:/Project/magtan/cycle/cycle/css/home2_nexus.css', 'utf8');

// Ensure hero title and desc are always white
nexusCss = nexusCss.replace(/\.nexus-hero-title \{([\s\S]*?)\}/, (match, p1) => {
  if (!p1.includes('color:')) return `.nexus-hero-title {${p1}\n    color: #ffffff;\n}`;
  return match;
});

// Remove light mode overrides for hero desc and title
nexusCss = nexusCss.replace(/\[data-theme="light"\] \.home2-nexus \.nexus-hero-desc \{ color: #334155; \}/, '/* removed dark text override for hero desc */');

// Remove the span override that drops the gradient
nexusCss = nexusCss.replace(/\[data-theme="light"\] \.home2-nexus \.nexus-hero-title span \{[\s\S]*?\}/, '/* removed span override */');

fs.writeFileSync('d:/Project/magtan/cycle/cycle/css/home2_nexus.css', nexusCss, 'utf8');

// 2. Fix home2_premium.css
let premiumCss = fs.readFileSync('d:/Project/magtan/cycle/cycle/css/home2_premium.css', 'utf8');

// Ensure std-hero-title and desc are always white
premiumCss = premiumCss.replace(/\.std-hero-title \{([\s\S]*?)\}/, (match, p1) => {
  if (!p1.includes('color:')) return `.std-hero-title {${p1}\n  color: #ffffff;\n}`;
  return match;
});
premiumCss = premiumCss.replace(/\.std-hero-desc \{([\s\S]*?)\}/, (match, p1) => {
  if (!p1.includes('color:')) return `.std-hero-desc {${p1}\n  color: rgba(255, 255, 255, 0.8);\n}`;
  return match;
});

// Remove light mode overrides for std-hero
premiumCss = premiumCss.replace(/\[data-theme="light"\] \.home2-premium \.std-hero-title \{.*?\}/, '/* removed dark text override */');
premiumCss = premiumCss.replace(/\[data-theme="light"\] \.home2-premium \.std-hero-desc \{.*?\}/, '/* removed dark text override */');
premiumCss = premiumCss.replace(/\[data-theme="light"\] \.h2p-hero-title \{.*?\}/, '/* removed */');
premiumCss = premiumCss.replace(/\[data-theme="light"\] \.h2p-hero-desc \{.*?\}/, '/* removed */');

fs.writeFileSync('d:/Project/magtan/cycle/cycle/css/home2_premium.css', premiumCss, 'utf8');

// 3. Fix home.css (for index.html)
if (fs.existsSync('d:/Project/magtan/cycle/cycle/css/home.css')) {
  let homeCss = fs.readFileSync('d:/Project/magtan/cycle/cycle/css/home.css', 'utf8');
  homeCss = homeCss.replace(/\.hero-title \{([\s\S]*?)\}/, (match, p1) => {
    if (!p1.includes('color:')) return `.hero-title {${p1}\n  color: #ffffff;\n}`;
    return match;
  });
  homeCss = homeCss.replace(/\.hero-desc \{([\s\S]*?)\}/, (match, p1) => {
    if (!p1.includes('color:')) return `.hero-desc {${p1}\n  color: rgba(255, 255, 255, 0.8);\n}`;
    return match;
  });
  fs.writeFileSync('d:/Project/magtan/cycle/cycle/css/home.css', homeCss, 'utf8');
}

// 4. Fix home2.css (for index.html hero2)
if (fs.existsSync('d:/Project/magtan/cycle/cycle/css/home2.css')) {
  let home2Css = fs.readFileSync('d:/Project/magtan/cycle/cycle/css/home2.css', 'utf8');
  home2Css = home2Css.replace(/\.hero2-title \{([\s\S]*?)\}/, (match, p1) => {
    if (!p1.includes('color:')) return `.hero2-title {${p1}\n  color: #ffffff;\n}`;
    return match;
  });
  home2Css = home2Css.replace(/\.hero2-desc \{([\s\S]*?)\}/, (match, p1) => {
    if (!p1.includes('color:')) return `.hero2-desc {${p1}\n  color: rgba(255, 255, 255, 0.8);\n}`;
    return match;
  });
  // Also remove any light mode text overrides in home2.css
  home2Css = home2Css.replace(/\[data-theme="light"\] \.hero2-title \{.*?\}/g, '/* removed */');
  home2Css = home2Css.replace(/\[data-theme="light"\] \.hero2-desc \{.*?\}/g, '/* removed */');
  fs.writeFileSync('d:/Project/magtan/cycle/cycle/css/home2.css', home2Css, 'utf8');
}

console.log("Fixed hero text contrast globally.");
