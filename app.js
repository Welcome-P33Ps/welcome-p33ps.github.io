// Mobile menu toggle (existing)
(function () {
  function setupToggle(toggleId) {
    var toggle = document.getElementById(toggleId);
    if (!toggle) return;
    var menu = document.getElementById('primary-navigation');
    if (!menu) return;

    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true' || false;
      toggle.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('active');
    });
  }

  setupToggle('mobile-menu');
  setupToggle('mobile-menu-home');
  setupToggle('mobile-menu-infosec');
  setupToggle('mobile-menu-about');
})();

// Timezone clock
(function () {
  var zones = [
    { label: 'Local', tz: 'local' },
    { label: 'UTC', tz: 'UTC' },
    { label: 'New York', tz: 'America/New_York' },
    { label: 'London', tz: 'Europe/London' },
    { label: 'Tokyo', tz: 'Asia/Tokyo' }
  ];

  function formatTimeForZone(date, tz) {
    var options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: tz === 'local' ? undefined : tz
    };
    return new Intl.DateTimeFormat([], options).format(date);
  }

  function updateClock() {
    var now = new Date();
    zones.forEach(function(z) {
      var selector = z.tz === 'local' ? '[data-tz="local"]' : '[data-tz="' + z.tz + '"]';
      var el = document.querySelector(selector);
      if (el) el.textContent = formatTimeForZone(now, z.tz);
    });
  }

  if (document.querySelector('#timezone-clock')) {
    updateClock();
    setInterval(updateClock, 1000);
  }
})();
