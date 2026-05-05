const fs = require('fs');

// Add FAQs to index.html
let indexContent = fs.readFileSync('d:/Project/magtan/cycle/cycle/index.html', 'utf8');
const newFaqIndex = 
      <div class="faq-item">
        <div class="faq-header" onclick="this.parentElement.classList.toggle('active')">
          <span class="faq-title">Can I switch plans mid-way through a block?</span>
          <i data-lucide="chevron-down" class="faq-icon" style="width:18px;"></i>
        </div>
        <div class="faq-body">
          <div class="faq-content">Yes, you can transition between Beginner, Intermediate, and Pro tracks at any time. The system will recalculate your TSS targets based on your current 6-week CTL.</div>
        </div>
      </div>
      <div class="faq-item">
        <div class="faq-header" onclick="this.parentElement.classList.toggle('active')">
          <span class="faq-title">Do I need a power meter to use CycleElite?</span>
          <i data-lucide="chevron-down" class="faq-icon" style="width:18px;"></i>
        </div>
        <div class="faq-body">
          <div class="faq-content">While a power meter unlocks our most advanced features like FTP progression and precise TSS targeting, you can still use our platform with a heart rate monitor to get estimated load and recovery metrics.</div>
        </div>
      </div>
;
if (indexContent.includes('What sensors can I connect?')) {
  // Find the end of the second faq item
  // Replace the closing div of the faq-grid with the new items + closing div
  indexContent = indexContent.replace(/(<span class="faq-title">What sensors can I connect\?<\/span>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)/, "\" + newFaqIndex);
  fs.writeFileSync('d:/Project/magtan/cycle/cycle/index.html', indexContent, 'utf8');
}

// Add FAQs to programs.html
let progContent = fs.readFileSync('d:/Project/magtan/cycle/cycle/programs.html', 'utf8');
const newFaqProg = 
            <div class="faq-item">
              <div class="faq-header" onclick="this.parentElement.classList.toggle('active')">
                <span class="faq-title">Are the programs suitable for beginners?</span>
                <i data-lucide="chevron-down" class="faq-icon" style="width:18px;"></i>
              </div>
              <div class="faq-body">
                <div class="faq-content">Absolutely! Our platform adapts to your current fitness level. Whether you're just starting out or preparing for a Grand Tour, our LoadDelta algorithm tailors the intensity specifically for you.</div>
              </div>
            </div>
            <div class="faq-item">
              <div class="faq-header" onclick="this.parentElement.classList.toggle('active')">
                <span class="faq-title">How often are the training blocks updated?</span>
                <i data-lucide="chevron-down" class="faq-icon" style="width:18px;"></i>
              </div>
              <div class="faq-body">
                <div class="faq-content">Training blocks dynamically adjust every 2-4 weeks based on your performance data, ensuring you're continually challenged but never overtrained.</div>
              </div>
            </div>
;
if (progContent.includes('Can I switch plans mid-way through a block?')) {
  progContent = progContent.replace(/(<span class="faq-title">Can I switch plans mid-way through a block\?<\/span>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)/, "\" + newFaqProg);
  fs.writeFileSync('d:/Project/magtan/cycle/cycle/programs.html', progContent, 'utf8');
}

// Add FAQs to pricing.html
let priceContent = fs.readFileSync('d:/Project/magtan/cycle/cycle/pricing.html', 'utf8');
const newFaqPrice = 
          <div class="faq-item">
            <div class="faq-header" onclick="this.parentElement.classList.toggle('active')">
              <span class="faq-title">Is there a discount for annual billing?</span>
              <i data-lucide="chevron-down" class="faq-icon" style="width:18px;"></i>
            </div>
            <div class="faq-body">
              <div class="faq-content">Yes, you save up to 20% by choosing our annual billing option compared to paying month-to-month.</div>
            </div>
          </div>
;
if (priceContent.includes('How do I get matched with a coach?')) {
  priceContent = priceContent.replace(/(<span class="faq-title">How do I get matched with a coach\?<\/span>[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)/, "\" + newFaqPrice);
  fs.writeFileSync('d:/Project/magtan/cycle/cycle/pricing.html', priceContent, 'utf8');
}
console.log('FAQ Added');
