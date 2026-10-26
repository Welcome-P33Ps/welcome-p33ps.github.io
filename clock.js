/* World clock. Reads the visitor's own device time and formats it for four
   fixed time zones. It makes no network requests and stores nothing. */
(function () {
  "use strict";

  var box = document.getElementById("clock");
  if (!box || !window.Intl || !Intl.DateTimeFormat) return;

  var cells = box.querySelectorAll("[data-tz]");
  var formats = [];

  try {
    for (var i = 0; i < cells.length; i++) {
      formats.push(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: cells[i].getAttribute("data-tz"),
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hourCycle: "h23"
        })
      );
    }
  } catch (err) {
    return; // Unsupported zone data: leave the clock hidden.
  }

  var timer = null;

  function draw() {
    var now = new Date();
    for (var i = 0; i < cells.length; i++) {
      cells[i].textContent = formats[i].format(now);
    }
    return now;
  }

  function loop() {
    var now = draw();
    // Aim for the start of the next second so the digits don't skip.
    timer = setTimeout(loop, 1005 - now.getMilliseconds());
  }

  document.addEventListener("visibilitychange", function () {
    clearTimeout(timer);
    if (!document.hidden) loop();
  });

  var details = box.querySelector("details");
  if (details && window.matchMedia && window.matchMedia("(max-width: 34rem)").matches) {
    details.open = false; // Start collapsed on phones.
  }

  loop();
  box.classList.add("ready");
})();
