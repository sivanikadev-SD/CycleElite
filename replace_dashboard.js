const fs = require('fs');
const path = require('path');

const dir = 'd:/Project/magtan/cycle/cycle';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Change Pro Dashboard to Home 2
  content = content.replace(/>Pro Dashboard<\/a>/g, '>Home 2</a>');

  fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Update complete');
