(function () {
  'use strict';

  /* =========================================================
   *  search-enhance.js
   *  Redesign search bar + autocomplete from existing game data
   *  Scrapes game names & URLs from all .movie-container items
   * ========================================================= */

  /* ---------- 1. INJECT CSS ---------- */
  var css =
    '/* Hide original search when enhanced exists */' +
    '.se-search-wrap ~ .d-grid form[action="/game"],' +
    '.se-search-wrap ~ .my-2 form[action="/game"],' +
    '.se-search-wrap ~ .my-3 form[action="/game"],' +
    '.se-search-wrap + .d-grid,' +
    '.se-search-wrap + .my-2 { display: none !important; }' +

    '/* ===== Search wrapper override ===== */' +
    '.se-search-wrap {' +
    '  position: relative;' +
    '  margin: 10px 8px;' +
    '  z-index: 100;' +
    '}' +

    '.se-search-inner {' +
    '  display: flex;' +
    '  align-items: center;' +
    '  background: rgba(128,13,13,0.65);' +
    '  border: 1px solid rgba(212,175,55,0.2);' +
    '  border-radius: 12px;' +
    '  padding: 0;' +
    '  overflow: hidden;' +
    '  transition: border-color 0.3s, box-shadow 0.3s;' +
    '  position: relative;' +
    '}' +

    '.se-search-inner.se-focus {' +
    '  border-color: rgba(255,215,0,0.45);' +
    '  box-shadow: 0 0 14px rgba(255,0,0,0.15), 0 0 6px rgba(255,215,0,0.1);' +
    '}' +

    '/* Gold accent line top */' +
    '.se-search-inner::before {' +
    '  content: "";' +
    '  position: absolute;' +
    '  top: 0; left: 0; right: 0;' +
    '  height: 1px;' +
    '  background: linear-gradient(90deg, transparent, rgba(212,175,55,0.3), rgba(255,215,0,0.4), rgba(212,175,55,0.3), transparent);' +
    '  pointer-events: none;' +
    '}' +

    '.se-search-icon {' +
    '  flex-shrink: 0;' +
    '  display: flex;' +
    '  align-items: center;' +
    '  justify-content: center;' +
    '  width: 42px;' +
    '  color: #FFD700;' +
    '  font-size: 0.85rem;' +
    '  opacity: 0.7;' +
    '}' +

    '.se-search-input {' +
    '  flex: 1;' +
    '  background: transparent !important;' +
    '  border: none !important;' +
    '  outline: none !important;' +
    '  box-shadow: none !important;' +
    '  color: #fff !important;' +
    '  font-family: "Saira Condensed", sans-serif !important;' +
    '  font-size: 0.9rem !important;' +
    '  font-weight: 500 !important;' +
    '  padding: 10px 0 !important;' +
    '  letter-spacing: 0.3px;' +
    '}' +

    '.se-search-input::placeholder {' +
    '  color: rgba(255,255,255,0.35) !important;' +
    '  font-style: italic;' +
    '}' +

    '.se-search-btn {' +
    '  flex-shrink: 0;' +
    '  background: linear-gradient(to bottom, #ff0000 0%, #a70000 100%) !important;' +
    '  border: none !important;' +
    '  border-left: 1px solid rgba(212,175,55,0.15) !important;' +
    '  color: #FFD700 !important;' +
    '  padding: 10px 16px !important;' +
    '  font-size: 0.85rem !important;' +
    '  cursor: pointer;' +
    '  transition: background 0.3s;' +
    '  display: flex;' +
    '  align-items: center;' +
    '  gap: 6px;' +
    '  font-family: "Saira Condensed", sans-serif;' +
    '  font-weight: 600;' +
    '  font-size: 0.75rem;' +
    '  text-transform: uppercase;' +
    '  letter-spacing: 0.5px;' +
    '}' +

    '.se-search-btn:hover {' +
    '  background: linear-gradient(to bottom, #ff2222 0%, #cc0000 100%) !important;' +
    '}' +

    '/* ===== Autocomplete dropdown ===== */' +
    '.se-dropdown {' +
    '  position: absolute;' +
    '  top: calc(100% + 4px);' +
    '  left: 0; right: 0;' +
    '  background: rgba(20,2,2,0.97);' +
    '  border: 1px solid rgba(212,175,55,0.2);' +
    '  border-radius: 12px;' +
    '  max-height: 320px;' +
    '  overflow-y: auto;' +
    '  display: none;' +
    '  z-index: 200;' +
    '  box-shadow: 0 8px 32px rgba(0,0,0,0.7);' +
    '  padding: 6px 0;' +
    '  scrollbar-width: thin;' +
    '  scrollbar-color: rgba(255,0,0,0.25) transparent;' +
    '}' +

    '.se-dropdown::-webkit-scrollbar { width: 4px; }' +
    '.se-dropdown::-webkit-scrollbar-track { background: transparent; }' +
    '.se-dropdown::-webkit-scrollbar-thumb { background: rgba(255,0,0,0.25); border-radius: 4px; }' +

    '.se-dropdown.se-show { display: block; }' +

    '.se-dd-item {' +
    '  display: flex;' +
    '  align-items: center;' +
    '  gap: 10px;' +
    '  padding: 8px 12px;' +
    '  cursor: pointer;' +
    '  transition: background 0.2s;' +
    '  text-decoration: none !important;' +
    '}' +

    '.se-dd-item:hover, .se-dd-item.se-active {' +
    '  background: rgba(128,13,13,0.5);' +
    '}' +

    '.se-dd-thumb {' +
    '  width: 40px;' +
    '  height: 40px;' +
    '  border-radius: 8px;' +
    '  object-fit: cover;' +
    '  border: 1px solid rgba(212,175,55,0.2);' +
    '  flex-shrink: 0;' +
    '}' +

    '.se-dd-info {' +
    '  flex: 1;' +
    '  min-width: 0;' +
    '  display: flex;' +
    '  flex-direction: column;' +
    '}' +

    '.se-dd-name {' +
    '  font-family: "Exo 2", sans-serif;' +
    '  font-weight: 700;' +
    '  font-size: 0.82rem;' +
    '  color: #fff;' +
    '  white-space: nowrap;' +
    '  overflow: hidden;' +
    '  text-overflow: ellipsis;' +
    '}' +

    '.se-dd-name mark {' +
    '  background: transparent;' +
    '  color: #FFD700;' +
    '  font-weight: 700;' +
    '}' +

    '.se-dd-provider {' +
    '  font-family: "Saira Condensed", sans-serif;' +
    '  font-size: 0.65rem;' +
    '  color: rgba(255,255,255,0.45);' +
    '  text-transform: uppercase;' +
    '  letter-spacing: 0.3px;' +
    '}' +

    '.se-dd-arrow {' +
    '  flex-shrink: 0;' +
    '  color: rgba(255,215,0,0.4);' +
    '  font-size: 0.65rem;' +
    '}' +

    '.se-dd-empty {' +
    '  padding: 16px 12px;' +
    '  text-align: center;' +
    '  color: rgba(255,255,255,0.4);' +
    '  font-family: "Saira Condensed", sans-serif;' +
    '  font-size: 0.8rem;' +
    '}' +

    '.se-dd-count {' +
    '  padding: 6px 12px;' +
    '  text-align: right;' +
    '  font-family: "Saira Condensed", sans-serif;' +
    '  font-size: 0.6rem;' +
    '  color: rgba(255,255,255,0.3);' +
    '  border-top: 1px solid rgba(255,255,255,0.06);' +
    '  margin-top: 4px;' +
    '}' +

    '/* ===== Responsive ===== */' +
    '@media (max-width: 480px) {' +
    '  .se-search-wrap { margin: 8px 6px; }' +
    '  .se-search-input { font-size: 0.82rem !important; padding: 9px 0 !important; }' +
    '  .se-search-icon { width: 36px; font-size: 0.75rem; }' +
    '  .se-search-btn { padding: 9px 12px !important; }' +
    '  .se-dd-thumb { width: 34px; height: 34px; }' +
    '  .se-dd-name { font-size: 0.78rem; }' +
    '  .se-dropdown { max-height: 260px; }' +
    '}';

  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ---------- 2. SCRAPE GAME DATA FROM DOM ---------- */
  function detectProvider(url) {
    if (url.indexOf('pragmatic') !== -1) return 'PRAGMATIC PLAY';
    if (url.indexOf('pg-soft') !== -1) return 'PG SOFT';
    if (url.indexOf('habanero') !== -1) return 'HABANERO';
    if (url.indexOf('microgaming') !== -1) return 'MICROGAMING';
    if (url.indexOf('joker') !== -1) return 'JOKER';
    if (url.indexOf('spadegaming') !== -1) return 'SPADEGAMING';
    if (url.indexOf('fastspin') !== -1) return 'FASTSPIN';
    if (url.indexOf('fachai') !== -1) return 'FACHAI';
    if (url.indexOf('jili') !== -1) return 'JILI';
    if (url.indexOf('jdb') !== -1) return 'JDB';
    if (url.indexOf('kingmaker') !== -1) return 'KINGMAKER';
    if (url.indexOf('cq9') !== -1) return 'CQ9';
    if (url.indexOf('evolution') !== -1) return 'EVOLUTION';
    if (url.indexOf('redtiger') !== -1) return 'RED TIGER';
    if (url.indexOf('netent') !== -1) return 'NETENT';
    if (url.indexOf('nolimit') !== -1) return 'NOLIMIT CITY';
    if (url.indexOf('playstar') !== -1) return 'PLAYSTAR';
    if (url.indexOf('sbobet') !== -1) return 'SBOBET';
    if (url.indexOf('sexy') !== -1) return 'SEXY BACCARAT';
    if (url.indexOf('ion') !== -1) return 'ION CASINO';
    return 'SLOT';
  }

  function scrapeGames() {
    var games = [];
    var seen = {};

    /* Source 1: movie-container items (homepage) */
    document.querySelectorAll('.movie-container .movie-item').forEach(function (item) {
      var link = item.querySelector('a[href*="/launch-"]');
      var img = item.querySelector('.movie-image img[alt], a > img[alt]');
      if (!link || !img) return;
      addGame(img, link);
    });

    /* Source 2: /game page grid (div.row > div.col > a > img) */
    document.querySelectorAll('.row.mb-3 > div > a[href*="/launch-"]').forEach(function (link) {
      var img = link.querySelector('img[alt]');
      if (!img) return;
      addGame(img, link);
    });

    /* Source 3: fallback -- any a[href*="/launch-"] with img */
    if (games.length === 0) {
      document.querySelectorAll('a[href*="/launch-"]').forEach(function (link) {
        var img = link.querySelector('img[alt]');
        if (!img) return;
        addGame(img, link);
      });
    }

    function addGame(img, link) {
      var name = (img.getAttribute('alt') || '').trim();
      var url = link.getAttribute('href') || '#';
      var src = img.getAttribute('src') || '';
      if (!name || seen[name.toLowerCase()]) return;
      seen[name.toLowerCase()] = true;
      games.push({ name: name, url: url, img: src, provider: detectProvider(url) });
    }

    return games;
  }

  /* ---------- 3. HIGHLIGHT MATCH ---------- */
  function highlight(text, query) {
    if (!query) return text;
    var esc = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return text.replace(new RegExp('(' + esc + ')', 'gi'), '<mark>$1</mark>');
  }

  /* ---------- 4. BUILD & INJECT ---------- */
  function init() {
    /* Find ALL search forms on the page */
    var allForms = document.querySelectorAll('form[action="/game"]');
    if (allForms.length === 0) return false;

    /* Aggressively hide ALL original search forms + their wrappers */
    allForms.forEach(function (form) {
      /* Hide the form itself */
      form.style.cssText = 'display:none!important;visibility:hidden!important;height:0!important;overflow:hidden!important;';
      /* Hide parent wrappers */
      var wrapper = form.closest('.d-grid') || form.closest('.my-2') || form.closest('.my-3') || form.parentElement;
      if (wrapper && !wrapper.classList.contains('se-search-wrap')) {
        wrapper.style.cssText = 'display:none!important;visibility:hidden!important;height:0!important;overflow:hidden!important;';
      }
    });

    /* Also catch standalone search inputs not inside form[action="/game"] */
    document.querySelectorAll('input[placeholder*="cari game"]').forEach(function (inp) {
      var parentForm = inp.closest('form');
      if (parentForm) {
        parentForm.style.cssText = 'display:none!important;';
        var w = parentForm.closest('.d-grid') || parentForm.closest('.my-2') || parentForm.closest('.my-3') || parentForm.parentElement;
        if (w && !w.classList.contains('se-search-wrap')) w.style.cssText = 'display:none!important;';
      }
    });

    /* Check if we already injected */
    if (document.querySelector('.se-search-wrap')) return true;

    /* Use the last form's parent as reference for injection */
    var lastForm = allForms[allForms.length - 1];
    var wrapperDiv = lastForm.closest('.d-grid') || lastForm.closest('.my-2') || lastForm.closest('.my-3') || lastForm.parentElement;

    /* Build new search HTML */
    var wrap = document.createElement('div');
    wrap.className = 'se-search-wrap';
    wrap.innerHTML =
      '<form action="/game" method="get" autocomplete="off">' +
      '  <div class="se-search-inner">' +
      '    <span class="se-search-icon"><i class="fa-solid fa-magnifying-glass"></i></span>' +
      '    <input class="se-search-input" name="q" type="text" placeholder="Cari game favorit kamu..." autocomplete="off">' +
      '    <button type="submit" class="se-search-btn"><i class="fa-solid fa-search"></i> CARI</button>' +
      '  </div>' +
      '  <div class="se-dropdown"></div>' +
      '</form>';

    /* Insert enhanced search before the hidden wrapper */
    wrapperDiv.parentNode.insertBefore(wrap, wrapperDiv);

    var input = wrap.querySelector('.se-search-input');
    var inner = wrap.querySelector('.se-search-inner');
    var dropdown = wrap.querySelector('.se-dropdown');
    var activeIdx = -1;
    var currentResults = [];

    /* Focus glow */
    input.addEventListener('focus', function () {
      inner.classList.add('se-focus');
      if (input.value.trim().length >= 1) showResults(input.value.trim());
    });
    input.addEventListener('blur', function () {
      inner.classList.remove('se-focus');
      setTimeout(function () { dropdown.classList.remove('se-show'); }, 200);
    });

    /* Input handler */
    input.addEventListener('input', function () {
      var q = input.value.trim();
      if (q.length < 1) {
        dropdown.classList.remove('se-show');
        return;
      }
      showResults(q);
    });

    /* Keyboard nav */
    input.addEventListener('keydown', function (e) {
      if (!dropdown.classList.contains('se-show')) return;
      var items = dropdown.querySelectorAll('.se-dd-item');
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIdx = Math.min(activeIdx + 1, items.length - 1);
        updateActive(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIdx = Math.max(activeIdx - 1, 0);
        updateActive(items);
      } else if (e.key === 'Enter' && activeIdx >= 0 && items[activeIdx]) {
        e.preventDefault();
        var href = items[activeIdx].getAttribute('data-url');
        if (href && href !== '#') window.open(href, '_blank');
      }
    });

    function updateActive(items) {
      items.forEach(function (it, i) {
        it.classList.toggle('se-active', i === activeIdx);
      });
      if (items[activeIdx]) items[activeIdx].scrollIntoView({ block: 'nearest' });
    }

    function showResults(q) {
      var games = scrapeGames();
      var ql = q.toLowerCase();
      currentResults = games.filter(function (g) {
        return g.name.toLowerCase().indexOf(ql) !== -1;
      });

      activeIdx = -1;

      if (currentResults.length === 0) {
        dropdown.innerHTML = '<div class="se-dd-empty"><i class="fa-solid fa-ghost"></i> Tidak ditemukan untuk "' + q + '"</div>';
        dropdown.classList.add('se-show');
        return;
      }

      /* Limit to 15 results */
      var show = currentResults.slice(0, 15);
      var html = '';
      show.forEach(function (g) {
        html +=
          '<a class="se-dd-item" data-url="' + g.url + '" href="' + g.url + '" target="_blank">' +
          '  <img class="se-dd-thumb" src="' + g.img + '" alt="' + g.name + '" loading="lazy">' +
          '  <span class="se-dd-info">' +
          '    <span class="se-dd-name">' + highlight(g.name, q) + '</span>' +
          '    <span class="se-dd-provider">' + g.provider + '</span>' +
          '  </span>' +
          '  <span class="se-dd-arrow"><i class="fa-solid fa-chevron-right"></i></span>' +
          '</a>';
      });

      if (currentResults.length > 15) {
        html += '<div class="se-dd-count">' + currentResults.length + ' game ditemukan â€” tekan Enter untuk lihat semua</div>';
      }

      dropdown.innerHTML = html;
      dropdown.classList.add('se-show');
    }

    return true;
  }

  /* ---------- 5. WAIT FOR DOM ---------- */
  function tryInit() {
    if (!init()) {
      var attempts = 0;
      var iv = setInterval(function () {
        attempts++;
        if (init() || attempts > 30) clearInterval(iv);
      }, 500);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(tryInit, 1000); });
  } else {
    setTimeout(tryInit, 1000);
  }

})();