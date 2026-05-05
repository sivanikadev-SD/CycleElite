const fs = require('fs');
const files = ['home2.html', 'analytics.html', 'about.html'];

files.forEach(file => {
  const filePath = `d:/Project/magtan/cycle/cycle/${file}`;
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Look for duplicate navToggle listener
    const badRegex = /document\.getElementById\('navToggle'\)\.addEventListener\('click',\s*function\(\)\s*\{\s*document\.getElementById\('mobileDrawer'\)\.classList\.toggle\('open'\);\s*\}\);/g;
    
    // Also about.html has a different format
    const badRegexAbout = /const navToggle = document\.getElementById\('navToggle'\);\s*const mobileDrawer = document\.getElementById\('mobileDrawer'\);\s*if \(navToggle && mobileDrawer\) \{\s*navToggle\.addEventListener\('click',\s*\(\) => \{\s*mobileDrawer\.classList\.toggle\('open'\);\s*navToggle\.classList\.toggle\('active'\);\s*\}\);\s*\}/g;

    content = content.replace(badRegex, '');
    content = content.replace(badRegexAbout, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
  }
});
console.log('Fixed hamburger duplication');
