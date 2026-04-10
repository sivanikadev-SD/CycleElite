// Dashboard Charts & Logic
document.addEventListener('DOMContentLoaded', () => {
  initDashboard();
});

function initDashboard() {
  // Sidebar toggle
  const menuBtn = document.getElementById('topbarMenuBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  if (menuBtn) {
    menuBtn.addEventListener('click', () => toggleSidebar());
  }
  if (overlay) {
    overlay.addEventListener('click', () => closeSidebar());
  }

  function toggleSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  }

  // Sidebar nav links
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      if (window.innerWidth < 1024) closeSidebar();
    });
  });

  // Charts
  initWeeklyChart();
  initHeartRateChart();
  initDonutChart();

  // Animate progress bars on page load
  setTimeout(() => {
    document.querySelectorAll('.progress-fill[data-width]').forEach(bar => {
      bar.style.width = bar.dataset.width;
    });
  }, 300);
}

function initWeeklyChart() {
  const ctx = document.getElementById('weeklyChart');
  if (!ctx || !window.Chart) return;
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Distance (km)',
        data: [32, 45, 28, 60, 38, 85, 55],
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx: c, chartArea } = chart;
          if (!chartArea) return '#2563EB';
          const gradient = c.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, '#2563EB');
          gradient.addColorStop(1, 'rgba(37,99,235,0.15)');
          return gradient;
        },
        borderRadius: 8,
        borderSkipped: false,
      }, {
        label: 'TSS',
        data: [55, 80, 50, 110, 65, 150, 95],
        type: 'line',
        borderColor: '#22C55E',
        backgroundColor: 'rgba(34,197,94,0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#22C55E',
        borderWidth: 2,
        yAxisID: 'y1'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(15,23,42,0.9)',
          titleColor: '#fff',
          bodyColor: '#94A3B8',
          padding: 12,
          cornerRadius: 8,
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#94A3B8', font: { size: 12 } }
        },
        y: {
          grid: { color: 'rgba(148,163,184,0.08)' },
          ticks: { color: '#94A3B8', font: { size: 11 } }
        },
        y1: {
          position: 'right',
          display: false
        }
      }
    }
  });
}

function initHeartRateChart() {
  const ctx = document.getElementById('heartRateChart');
  if (!ctx || !window.Chart) return;
  const labels = Array.from({ length: 30 }, (_, i) => `${i + 1}`);
  const data = labels.map(() => 130 + Math.floor(Math.random() * 40));
  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        data,
        borderColor: '#EF4444',
        backgroundColor: 'rgba(239,68,68,0.08)',
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 1.5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      scales: { x: { display: false }, y: { display: false } }
    }
  });
}

function initDonutChart() {
  const ctx = document.getElementById('activityDonut');
  if (!ctx || !window.Chart) return;
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Cycling', 'Running', 'Swimming', 'Strength'],
      datasets: [{
        data: [52, 24, 14, 10],
        backgroundColor: ['#2563EB', '#22C55E', '#06B6D4', '#F59E0B'],
        borderWidth: 0,
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '70%',
      plugins: { legend: { display: false } }
    }
  });
}
