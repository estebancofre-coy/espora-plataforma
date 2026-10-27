(function () {
  'use strict';

  var source = window.ESPORA_ORGANIZACIONES;
  var list = document.getElementById('lista-organizaciones');
  var summary = document.getElementById('resumen-registro');
  var status = document.getElementById('estado-organizaciones');
  var error = document.getElementById('error-organizaciones');
  var empty = document.getElementById('sin-resultados');
  var search = document.getElementById('buscar-organizacion');
  var buttons = Array.prototype.slice.call(document.querySelectorAll('.organization-filters button'));
  var previous = document.getElementById('pagina-anterior');
  var next = document.getElementById('pagina-siguiente');
  var pageLabel = document.getElementById('pagina-actual');
  var pageSize = 40;
  var selectedType = 'todos';
  var currentPage = 1;

  if (!Array.isArray(source) || !list || !summary || !status || !error || !empty || !search || !previous || !next || !pageLabel) {
    if (error) error.hidden = false;
    return;
  }

  var normalize = function (value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es');
  };
  var typeCounts = source.reduce(function (counts, organization) {
    counts[organization.tipo] = (counts[organization.tipo] || 0) + 1;
    return counts;
  }, {});
  var filterOrganizations = function () {
    var query = normalize(search.value.trim());
    return source.filter(function (organization) {
      var typeMatches = selectedType === 'todos' || organization.tipo.toLocaleLowerCase('es') === selectedType;
      var searchMatches = !query || normalize(organization.nombre).indexOf(query) !== -1 ||
        normalize(organization.numero).indexOf(query) !== -1;
      return typeMatches && searchMatches;
    });
  };
  var render = function () {
    var filtered = filterOrganizations();
    var pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
    currentPage = Math.min(currentPage, pageCount);
    var start = (currentPage - 1) * pageSize;
    var visible = filtered.slice(start, start + pageSize);

    list.textContent = '';
    visible.forEach(function (organization) {
      var item = document.createElement('li');
      item.className = 'organization-record';

      var name = document.createElement('h3');
      name.textContent = organization.nombre;

      var number = document.createElement('span');
      number.className = 'organization-record-number';
      number.textContent = 'Registro N° ' + organization.numero;

      var type = document.createElement('span');
      type.className = 'organization-type';
      type.textContent = organization.tipo;

      item.appendChild(name);
      item.appendChild(number);
      item.appendChild(type);
      list.appendChild(item);
    });

    empty.hidden = filtered.length !== 0;
    status.textContent = filtered.length
      ? 'Mostrando ' + (start + 1) + '–' + Math.min(start + pageSize, filtered.length) + ' de ' + filtered.length + ' organizaciones.'
      : '0 organizaciones encontradas.';
    pageLabel.textContent = 'Página ' + currentPage + ' de ' + pageCount;
    previous.disabled = currentPage === 1;
    next.disabled = currentPage === pageCount;
    document.getElementById('paginacion-organizaciones').hidden = filtered.length === 0;
  };

  summary.textContent = source.length.toLocaleString('es-CL') + ' registros: ' +
    (typeCounts.funcionales || 0).toLocaleString('es-CL') + ' funcionales y ' +
    (typeCounts.territoriales || 0).toLocaleString('es-CL') + ' territoriales.';
  buttons.forEach(function (button) {
    var count = button.querySelector('[data-count]');
    if (count) {
      var type = button.getAttribute('data-type');
      count.textContent = '(' + (type === 'todos' ? source.length : typeCounts[type] || 0).toLocaleString('es-CL') + ')';
    }
    button.addEventListener('click', function () {
      selectedType = button.getAttribute('data-type');
      currentPage = 1;
      buttons.forEach(function (candidate) {
        candidate.setAttribute('aria-pressed', candidate === button ? 'true' : 'false');
      });
      render();
    });
  });
  search.addEventListener('input', function () {
    currentPage = 1;
    render();
  });
  previous.addEventListener('click', function () {
    currentPage -= 1;
    render();
  });
  next.addEventListener('click', function () {
    currentPage += 1;
    render();
  });
  render();
})();
