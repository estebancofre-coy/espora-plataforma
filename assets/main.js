(function () {
  'use strict';

  // Mobile navigation
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav-principal');
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      nav.classList.toggle('is-open', open);
    };
    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  // Current-section highlighting in nav
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.site-nav a[href^="#"]'));
  if ('IntersectionObserver' in window && navLinks.length) {
    var byId = {};
    navLinks.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) { a.removeAttribute('aria-current'); });
        var link = byId[entry.target.id];
        if (link) link.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(byId).concat('inicio').forEach(function (id) {
      var el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }

  // Project category filters
  var buttons = Array.prototype.slice.call(document.querySelectorAll('.filters button'));
  var projects = Array.prototype.slice.call(document.querySelectorAll('.catalog .project'));
  var empty = document.querySelector('.catalog-empty');
  var status = document.getElementById('estado-filtro');

  var matches = function (project, filter) {
    if (filter === 'todos') return true;
    return (project.getAttribute('data-cat') || '').split(/\s+/).indexOf(filter) !== -1;
  };

  buttons.forEach(function (btn) {
    var filter = btn.getAttribute('data-filter');
    var n = projects.filter(function (p) { return matches(p, filter); }).length;
    var countEl = btn.querySelector('.count');
    if (countEl) countEl.textContent = String(n);
  });

  var applyFilter = function (filter, label) {
    var shown = 0;
    projects.forEach(function (p) {
      var visible = matches(p, filter);
      var wasHidden = p.hidden;
      p.hidden = !visible;
      if (visible) {
        shown++;
        if (wasHidden) {
          p.classList.remove('is-entering');
          void p.offsetWidth;
          p.classList.add('is-entering');
        }
      }
    });
    if (empty) empty.hidden = shown !== 0;
    if (status) {
      status.textContent = 'Mostrando ' + shown + ' de ' + projects.length + ' iniciativas' +
        (filter === 'todos' ? '.' : ' en la categoría ' + label + '.');
    }
  };

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
      btn.setAttribute('aria-pressed', 'true');
      var label = btn.firstChild ? btn.firstChild.textContent.trim() : '';
      applyFilter(btn.getAttribute('data-filter'), label);
    });
  });
})();
