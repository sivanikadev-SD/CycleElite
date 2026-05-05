const fs = require('fs');

let cssContent = fs.readFileSync('d:/Project/magtan/cycle/cycle/css/home2_premium.css', 'utf8');
let lines = cssContent.split('\n');

lines.forEach((line, i) => {
  if (line.includes('.intermediate') || line.includes('.pro') || line.includes('.beginner')) {
    console.log(`${i+1}: ${line}`);
  }
});
