const fs = require('fs');

let content = fs.readFileSync('d:/Project/magtan/cycle/cycle/pricing.html', 'utf8');
let lines = content.split('\n');

lines.forEach((line, i) => {
  if (line.includes('nebula-card')) {
    console.log(`${i+1}: ${line.trim()}`);
  }
});
