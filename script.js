/* ============================================================
   V&A Wild Silk Archive — Interaction script
   ============================================================ */

const grid = document.getElementById('grid');
const resultCount = document.getElementById('result-count');
const totalCount = document.getElementById('total-count');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const clearBtn = document.getElementById('clear-filters');
const modal = document.getElementById('modal');
const modalContent = modal.querySelector('.modal-content');
const modalCloseBtn = modal.querySelector('.modal-close');

const activeFilters = {
  region: new Set(),
  yearBucket: new Set(),
  fibre: new Set(),
  sampleType: new Set(),
  technique: new Set(),
  dyeBinary: new Set(),
  dyeStatus: new Set(),
  objectType: new Set()
};

/* Reads either a real field or a derived virtual field */
function itemValue(item, key) {
  if (key === 'sampleType') return getSampleType(item);
  if (key === 'dyeBinary') return getDyeBinary(item);
  return item[key];
}

let activeSort = 'year-asc';
let activeSearch = '';

/* ============= IMAGE PATH RESOLUTION ============= */
function imagePath(item) {
  // Files live in _WEBSITE/images/. Encode for URL safety.
  const filename = item.imageFile;
  return 'images/' + encodeURIComponent(filename);
}

/* ============= YEAR PARSING (for sort) ============= */
function parseYearForSort(item) {
  const y = item.year || '';
  if (y.includes('17th')) return 1650;
  const m = y.match(/(\d{4})/);
  if (m) return parseInt(m[1], 10);
  return 9999;
}

/* ============= RENDER FILTERS ============= */
function renderFilters() {
  Object.keys(filterDefinitions).forEach(key => {
    const group = document.querySelector(`.filter-group[data-filter="${key}"] .filter-list`);
    if (!group) return;

    // count items per option
    const counts = {};
    items.forEach(i => {
      const v = itemValue(i, key);
      if (v) counts[v] = (counts[v] || 0) + 1;
    });

    // Show only options that have at least one item
    const options = filterDefinitions[key].filter(opt => counts[opt] > 0);

    group.innerHTML = options.map(opt => `
      <li>
        <label>
          <input type="checkbox" data-filter="${key}" data-value="${escapeHtml(opt)}">
          <span>${escapeHtml(opt)}</span>
          <span class="count">${counts[opt]}</span>
        </label>
      </li>
    `).join('');
  });

  document.querySelectorAll('.filter-list input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', e => {
      const f = e.target.dataset.filter;
      const v = e.target.dataset.value;
      if (e.target.checked) activeFilters[f].add(v);
      else activeFilters[f].delete(v);
      renderGrid();
    });
  });
}

/* ============= APPLY FILTERS + SEARCH ============= */
function applyFilters() {
  return items.filter(item => {
    // each active filter group must match (OR within group, AND across groups)
    for (const key of Object.keys(activeFilters)) {
      const set = activeFilters[key];
      if (set.size > 0 && !set.has(itemValue(item, key))) return false;
    }
    if (activeSearch) {
      const q = activeSearch.toLowerCase();
      const haystack = [
        item.title, item.place, item.accession, item.description,
        item.maker || '', item.notes || '', item.watsonRef || ''
      ].join(' ').toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}

function applySort(arr) {
  const sorted = [...arr];
  switch (activeSort) {
    case 'year-asc':
      sorted.sort((a, b) => parseYearForSort(a) - parseYearForSort(b));
      break;
    case 'year-desc':
      sorted.sort((a, b) => parseYearForSort(b) - parseYearForSort(a));
      break;
    case 'title':
      sorted.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'region':
      sorted.sort((a, b) => (a.region || '').localeCompare(b.region || ''));
      break;
  }
  return sorted;
}

/* ============= RENDER GRID ============= */
function renderGrid() {
  const filtered = applySort(applyFilters());
  resultCount.textContent = filtered.length === items.length
    ? `Showing all ${items.length} objects`
    : `Showing ${filtered.length} of ${items.length} objects`;

  if (filtered.length === 0) {
    grid.innerHTML = '<div class="empty-state">No objects match the current filter combination. Try clearing some filters.</div>';
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <article class="card" data-id="${item.id}">
      <div class="img-wrap">
        ${item.imageFile.endsWith('.pdf')
          ? '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#5c5240;font-style:italic;font-size:13px;">PDF preview only</div>'
          : `<img src="${imagePath(item)}" alt="${escapeHtml(item.title)}" loading="lazy">`}
      </div>
      <div class="card-body">
        <h3 class="card-title">${escapeHtml(item.title)}</h3>
        <p class="card-meta">${escapeHtml(item.place)} · ${escapeHtml(item.year)}</p>
        <p class="card-meta-sub">${escapeHtml(item.accession || '—')}</p>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => openModal(parseInt(card.dataset.id, 10)));
  });
}

/* ============= MODAL ============= */
function openModal(id) {
  const item = items.find(i => i.id === id);
  if (!item) return;

  const vaUrl = buildVaUrl(item);
  const watsonHtml = item.watsonRef
    ? `<div class="watson-callout"><strong>Watson cross-reference:</strong> ${escapeHtml(item.watsonRef)}</div>`
    : '';

  modalContent.innerHTML = `
    <div class="modal-image">
      ${item.imageFile.endsWith('.pdf')
        ? '<div style="text-align:center;color:#5c5240;font-style:italic;padding:60px;">No JPG preview available.<br>Use the "Open original PDF" button below.</div>'
        : `<img src="${imagePath(item)}" alt="${escapeHtml(item.title)}">`}
    </div>
    <div class="modal-info">
      <h2>${escapeHtml(item.title)}</h2>
      <p class="subtitle-modal">${escapeHtml(item.place)} · ${escapeHtml(item.year)}</p>
      <p class="accession-line">Accession: <strong>${escapeHtml(item.accession || '—')}</strong></p>

      <p class="description">${escapeHtml(item.description)}</p>

      ${watsonHtml}

      <dl class="detail-grid">
        <dt>Region</dt><dd>${escapeHtml(item.region)}</dd>
        <dt>Year</dt><dd>${escapeHtml(item.year)}</dd>
        <dt>Fibre</dt><dd>${escapeHtml(item.fibre)}</dd>
        <dt>Sample type</dt><dd>${escapeHtml(getSampleType(item))}</dd>
        <dt>Technique</dt><dd>${escapeHtml(item.technique)}</dd>
        <dt>Dye</dt><dd>${escapeHtml(getDyeBinary(item))} — ${escapeHtml(item.dyeStatus)}</dd>
        <dt>Object type</dt><dd>${escapeHtml(item.objectType)}</dd>
        ${item.maker ? `<dt>Maker</dt><dd>${escapeHtml(item.maker)}</dd>` : ''}
        ${item.notes ? `<dt>Notes</dt><dd>${escapeHtml(item.notes)}</dd>` : ''}
      </dl>

      <div class="actions">
        <a class="btn btn-primary" href="${vaUrl}" target="_blank" rel="noopener">View on V&amp;A site</a>
      </div>
    </div>
  `;

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.hidden) closeModal();
});

/* ============= SEARCH + SORT + CLEAR ============= */
searchInput.addEventListener('input', e => {
  activeSearch = e.target.value.trim();
  renderGrid();
});

sortSelect.addEventListener('change', e => {
  activeSort = e.target.value;
  renderGrid();
});

clearBtn.addEventListener('click', () => {
  Object.keys(activeFilters).forEach(k => activeFilters[k].clear());
  document.querySelectorAll('.filter-list input[type="checkbox"]').forEach(cb => cb.checked = false);
  searchInput.value = '';
  activeSearch = '';
  renderGrid();
});

/* ============= UTILS ============= */
function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ============= INIT ============= */
totalCount.textContent = items.length;
renderFilters();
renderGrid();
