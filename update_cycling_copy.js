const fs = require('fs');

// Update home2.html
let h2 = fs.readFileSync('d:/Project/magtan/cycle/cycle/home2.html', 'utf8');

h2 = h2.replace('Nexus Performance v2.0', 'CycleElite Pro Coaching');
h2 = h2.replace('Beyond<br><span>Performance</span>', 'Master Your<br><span>Watts</span>');
h2 = h2.replace('Experience the future of athletic training. AI-driven insights, elite coach network, and immersive analytics tailored for your journey.', 'Dominate your next Ironman or Grand Fondo. Get customized structured intervals, real-time FTP tracking, and world-class endurance coaching.');

h2 = h2.replace('Precision Power', 'FTP & Power Analytics');
h2 = h2.replace('Advanced Recovery', 'Training Stress Balance (TSB)');
h2 = h2.replace('Global Network', 'UCI Certified Coaches');
h2 = h2.replace('Explore Stats', 'View CTL Charts');
h2 = h2.replace('CycleElite Nexus ecosystem', 'CycleElite training ecosystem');

fs.writeFileSync('d:/Project/magtan/cycle/cycle/home2.html', h2, 'utf8');

// Update index.html
let idx = fs.readFileSync('d:/Project/magtan/cycle/cycle/index.html', 'utf8');

idx = idx.replace('Elevate Your<br/>\n        <span class="gradient-text-blue">Performance</span>', 'Build World-Class<br/>\n        <span class="gradient-text-blue">Endurance</span>');
idx = idx.replace('AI-powered training load optimization', 'AI-powered TSS & Load optimization');
idx = idx.replace('Real-time heart rate & power analysis', 'Real-time W/kg & FTP analysis');
idx = idx.replace('Automated race-day strategies', 'Automated Triathlon & TT pacing');
idx = idx.replace('Performance Overview', 'Metabolic Load Profile');
idx = idx.replace('Recovery Score', 'Training Stress Balance');
idx = idx.replace('Peak Power', 'Functional Threshold Power');
idx = idx.replace('Active Athletes', 'Cyclists & Triathletes');

fs.writeFileSync('d:/Project/magtan/cycle/cycle/index.html', idx, 'utf8');

console.log("Copywriting updated for cycling theme");
