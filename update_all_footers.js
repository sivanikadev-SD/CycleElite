const fs = require('fs');
const path = require('path');

const dir = 'd:/Project/magtan/cycle/cycle';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'index.html');

// Read the index.html footer
const indexContent = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
const footerMatch = indexContent.match(/<footer class="footer">[\s\S]*?<\/footer>/);

if (!footerMatch) {
  console.error("Could not find footer in index.html");
  process.exit(1);
}

const standardFooter = footerMatch[0];

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find existing footer and replace it
  const existingFooterMatch = content.match(/<footer[^>]*>[\s\S]*?<\/footer>/);
  if (existingFooterMatch) {
    content = content.replace(existingFooterMatch[0], standardFooter);
  } else {
    // If no footer, append before </div> scripts or </body>
    if (content.includes('</div>\n\n  <script')) {
       content = content.replace(/(<\/div>\n\n\s*<script)/, standardFooter + '\n$1');
    } else {
       content = content.replace(/<\/body>/, standardFooter + '\n</body>');
    }
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
});

console.log("Footers updated successfully on all pages.");
