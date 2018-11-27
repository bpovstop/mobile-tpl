(function() {
  document.body.addEventListener(
    "touchmove",
    function(ev) {
      ev.preventDefault();
    },
    { passive: false }
  );
})();
