// search.js - Command palette search implementation

let pagefind = null;
let selectedIndex = -1;
let results = [];

// Initialize Pagefind
async function initSearch() {
  if (pagefind) return;
  try {
    pagefind = await import('/pagefind/pagefind.js');
    await pagefind.init();
  } catch (e) {
    console.error('Search init failed:', e);
  }
}

// Open search modal
function openSearch() {
  const modal = document.getElementById('searchModal');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  const input = document.getElementById('searchInput');
  input.focus();
  input.select();

  initSearch();
}

// Close search modal
function closeSearch() {
  const modal = document.getElementById('searchModal');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  selectedIndex = -1;
  results = [];
}

// Search function
async function performSearch(query) {
  if (!pagefind || !query.trim()) {
    showEmpty();
    return;
  }

  const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
  const searchOpts = {};

  // Apply chapter filter
  if (activeFilter !== 'all') {
    searchOpts.filters = { chapter: [activeFilter] };
  }

  const search = await pagefind.search(query, searchOpts);
  results = await Promise.all(search.results.slice(0, 10).map(r => r.data()));

  renderResults(results, query);
}

// Render results
function renderResults(results, query) {
  const container = document.getElementById('searchResults');

  if (results.length === 0) {
    container.innerHTML = `
      <div class="search-no-results">
        <p>No results for "${query}"</p>
        <p>Try different keywords or check your spelling.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = results.map((r, i) => `
    <a href="${r.url}" class="search-result ${i === selectedIndex ? 'selected' : ''}" data-index="${i}">
      <div class="search-result-title">${r.meta?.title || 'Untitled'}</div>
      <div class="search-result-snippet">${r.excerpt}</div>
      <div class="search-result-meta">
        <span>${r.meta?.chapter || ''}</span>
        <span>${r.meta?.section || ''}</span>
      </div>
    </a>
  `).join('');
}

// Show empty state
function showEmpty() {
  const container = document.getElementById('searchResults');
  container.innerHTML = `
    <div class="search-empty">
      <p>Start typing to search...</p>
      <div class="search-suggestions">
        <span>Try:</span>
        <button onclick="searchFor('ralph')">ralph</button>
        <button onclick="searchFor('hooks')">hooks</button>
        <button onclick="searchFor('gas town')">gas town</button>
      </div>
    </div>
  `;
}

// Quick search from suggestion
function searchFor(term) {
  const input = document.getElementById('searchInput');
  input.value = term;
  performSearch(term);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('searchModal');
  const isOpen = modal?.getAttribute('aria-hidden') === 'false';

  // Cmd+K to open
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    if (isOpen) {
      closeSearch();
    } else {
      openSearch();
    }
    return;
  }

  if (!isOpen) return;

  // Escape to close
  if (e.key === 'Escape') {
    closeSearch();
    return;
  }

  // Arrow navigation
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    selectedIndex = Math.min(selectedIndex + 1, results.length - 1);
    updateSelection();
    return;
  }

  if (e.key === 'ArrowUp') {
    e.preventDefault();
    selectedIndex = Math.max(selectedIndex - 1, 0);
    updateSelection();
    return;
  }

  // Enter to select
  if (e.key === 'Enter' && selectedIndex >= 0 && results[selectedIndex]) {
    window.location.href = results[selectedIndex].url;
    return;
  }
});

// Update visual selection
function updateSelection() {
  document.querySelectorAll('.search-result').forEach((el, i) => {
    el.classList.toggle('selected', i === selectedIndex);
    if (i === selectedIndex) {
      el.scrollIntoView({ block: 'nearest' });
    }
  });
}

// Input handler with debounce
let searchTimeout;
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        performSearch(e.target.value);
        selectedIndex = -1;
      }, 50);
    });
  }

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const input = document.getElementById('searchInput');
      if (input && input.value) {
        performSearch(input.value);
      }
    });
  });
});
