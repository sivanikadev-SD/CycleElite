const fs = require('fs');

// 1. Update programs.html inline SVGs
let programsHtml = fs.readFileSync('d:/Project/magtan/cycle/cycle/programs.html', 'utf8');

// Beginner wave: cyan -> green
programsHtml = programsHtml.replace('fill="rgba(6,182,212,0.15)"', 'fill="rgba(16,185,129,0.15)"');
// Intermediate wave: purple -> blue
programsHtml = programsHtml.replace('fill="rgba(139,92,246,0.15)"', 'fill="rgba(59,130,246,0.15)"');

fs.writeFileSync('d:/Project/magtan/cycle/cycle/programs.html', programsHtml, 'utf8');

// 2. Update pricing.html classes
let pricingHtml = fs.readFileSync('d:/Project/magtan/cycle/cycle/pricing.html', 'utf8');

// Starter card: purple -> green
pricingHtml = pricingHtml.replace('<div class="nebula-card purple">', '<div class="nebula-card green">');

fs.writeFileSync('d:/Project/magtan/cycle/cycle/pricing.html', pricingHtml, 'utf8');

// 3. Update home2_premium.css
let css = fs.readFileSync('d:/Project/magtan/cycle/cycle/css/home2_premium.css', 'utf8');

// Fix .beginner
css = css.replace(/\.pg-card\.beginner \.pg-card-top \{\s*border-top: 2px solid #06B6D4;\s*\}/g, '.pg-card.beginner .pg-card-top { border-top: 2px solid #10B981; }');
css = css.replace(/\.pg-card\.beginner \.pg-card-top::before \{\s*background: radial-gradient\(circle at top, #06B6D4 0%, transparent 70%\);\s*\}/g, '.pg-card.beginner .pg-card-top::before { background: radial-gradient(circle at top, #10B981 0%, transparent 70%); }');
css = css.replace(/background: linear-gradient\(135deg, #3B82F6, #2563EB\);\s*color: white;\s*box-shadow: 0 4px 15px rgba\(37, 99, 235, 0\.3\);\s*padding: 12px;/g, 'background: linear-gradient(135deg, #10B981, #059669);\n  color: white;\n  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);\n  padding: 12px;');

// Wait, the .beginner btn used blue before! Let's carefully replace using regex for .pg-card.beginner .pg-btn
css = css.replace(/\.pg-card\.beginner \.pg-btn \{([\s\S]*?)\}/, '.pg-card.beginner .pg-btn {\n  background: linear-gradient(135deg, #10B981, #059669);\n  color: white;\n  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);\n  padding: 12px;\n}');

// Fix .intermediate
css = css.replace(/\.pg-card\.intermediate \.pg-card-top \{\s*border-top: 2px solid #8B5CF6;\s*\}/g, '.pg-card.intermediate .pg-card-top { border-top: 2px solid #3B82F6; }');
css = css.replace(/\.pg-card\.intermediate \.pg-card-top::before \{\s*background: radial-gradient\(circle at top, #8B5CF6 0%, transparent 70%\);\s*\}/g, '.pg-card.intermediate .pg-card-top::before { background: radial-gradient(circle at top, #3B82F6 0%, transparent 70%); }');
css = css.replace(/\.pg-card\.intermediate \.pg-btn \{([\s\S]*?)\}/, '.pg-card.intermediate .pg-btn {\n  background: linear-gradient(135deg, #3B82F6, #2563EB);\n  color: white;\n  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);\n  padding: 12px;\n}');

fs.writeFileSync('d:/Project/magtan/cycle/cycle/css/home2_premium.css', css, 'utf8');

console.log("Removed 3rd colors from Programs and Pricing");
