const fs = require('fs');

['programs.html', 'pricing.html'].forEach(file => {
  const filePath = `d:/Project/magtan/cycle/cycle/${file}`;
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace warning and danger with primary and secondary
  content = content.replace(/var\(--warning\)/g, 'var(--primary)');
  content = content.replace(/var\(--danger\)/g, 'var(--secondary)');
  content = content.replace(/warning/g, 'primary'); // for badge-warning etc
  content = content.replace(/danger/g, 'secondary'); // for badge-danger etc
  
  fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Removed 3rd colors');
