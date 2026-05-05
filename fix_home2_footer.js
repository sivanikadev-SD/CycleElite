const fs = require('fs');

let home2Content = fs.readFileSync('d:/Project/magtan/cycle/cycle/home2.html', 'utf8');

// The bottom section to replace:
const badBottomRegex = /<div style="margin-top:80px; padding-top:24px; border-top:1px solid var\(--border\); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:20px;">[\s\S]*?<\/div>\s*<\/div>\s*<\/footer>/;

const replacement = `<div class="footer-bottom">
          <p>© 2026 CycleElite. All performance rights reserved.</p>
          <div class="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>`;

if (badBottomRegex.test(home2Content)) {
  home2Content = home2Content.replace(badBottomRegex, replacement);
  fs.writeFileSync('d:/Project/magtan/cycle/cycle/home2.html', home2Content, 'utf8');
  console.log('Fixed home2 footer spacing');
} else {
  console.log('Regex did not match');
}
