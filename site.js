// Site interactions: the mobile menu button and the abstract toggles.
// Pages stay fully readable without this file; it only adds the toggles.
(function () {
  var menuButton = document.querySelector('.hamburger');
  var menu = document.getElementById('site-menu');
  if (menuButton && menu) {
    menuButton.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var toggles = document.querySelectorAll('.abstract-toggle');
  Array.prototype.forEach.call(toggles, function (button) {
    var panel = document.getElementById(button.getAttribute('aria-controls'));
    if (!panel) { return; }
    button.addEventListener('click', function () {
      var expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      panel.classList.toggle('is-collapsed', expanded);
      button.textContent = expanded ? 'Show abstract' : 'Hide abstract';
    });
  });
})();
