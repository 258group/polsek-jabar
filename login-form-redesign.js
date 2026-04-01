(function () {
  'use strict';

  /* ========== STYLES ========== */
  var css =
    /* Scope everything to #row-quicklogin */

    /* Card wrapper -- reset */
    '#row-quicklogin.card.mb-3 {' +
    '  background: transparent !important;' +
    '  border: none !important;' +
    '  box-shadow: none !important;' +
    '  overflow: visible !important;' +
    '}' +

    /* Card body -- semi-transparent red-gold glassmorphism */
    '#row-quicklogin.card .card-body {' +
    '  background: linear-gradient(160deg, rgba(120,15,15,0.45) 0%, rgba(80,10,10,0.5) 50%, rgba(100,12,12,0.45) 100%) !important;' +
    '  backdrop-filter: blur(8px) !important;' +
    '  -webkit-backdrop-filter: blur(8px) !important;' +
    '  border: 1.5px solid rgba(255,215,0,0.25) !important;' +
    '  border-radius: 16px !important;' +
    '  box-shadow: 0 4px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,215,0,0.1) !important;' +
    '  padding: 24px 20px 16px !important;' +
    '  position: relative;' +
    '  overflow: hidden;' +
    '  z-index: 2;' +
    '}' +

    /* Top gold accent line */
    '#row-quicklogin.card .card-body::before {' +
    '  content: "";' +
    '  position: absolute; top: 0; left: 0; right: 0; height: 2px;' +
    '  background: linear-gradient(90deg, transparent, #FFD700, transparent);' +
    '  z-index: 2;' +
    '}' +

    /* Shimmer sweep */
    '#row-quicklogin.card .card-body::after {' +
    '  content: "";' +
    '  position: absolute; top: 0; left: -100%; width: 50%; height: 100%;' +
    '  background: linear-gradient(90deg, transparent, rgba(255,215,0,0.03), transparent);' +
    '  animation: loginShimmer 4s ease-in-out infinite;' +
    '  z-index: 1; pointer-events: none;' +
    '}' +

    '@keyframes loginShimmer {' +
    '  0% { left: -100%; }' +
    '  50% { left: 100%; }' +
    '  100% { left: 100%; }' +
    '}' +

    /* ===== Labels ===== */
    '#row-quicklogin .form-label {' +
    '  color: #FFD700 !important;' +
    '  font-size: 0.75rem !important;' +
    '  font-weight: 700 !important;' +
    '  text-transform: uppercase !important;' +
    '  letter-spacing: 1.2px !important;' +
    '  margin-bottom: 6px !important;' +
    '  text-shadow: 0 0 6px rgba(255,215,0,0.15);' +
    '}' +

    /* ===== Input fields ===== */
    '#row-quicklogin .form-control {' +
    '  background: rgba(0,0,0,0.3) !important;' +
    '  border: 1.5px solid rgba(255,215,0,0.2) !important;' +
    '  border-radius: 10px !important;' +
    '  color: #fff !important;' +
    '  font-size: 0.95rem !important;' +
    '  padding: 12px 14px !important;' +
    '  transition: border-color 0.3s, box-shadow 0.3s, background 0.3s !important;' +
    '  box-shadow: inset 0 1px 4px rgba(0,0,0,0.2) !important;' +
    '}' +

    '#row-quicklogin .form-control::placeholder {' +
    '  color: rgba(255,215,0,0.3) !important;' +
    '  font-style: italic;' +
    '}' +

    '#row-quicklogin .form-control:focus {' +
    '  background: rgba(0,0,0,0.4) !important;' +
    '  border-color: rgba(255,215,0,0.5) !important;' +
    '  box-shadow: inset 0 1px 4px rgba(0,0,0,0.2), 0 0 10px rgba(255,215,0,0.15) !important;' +
    '  outline: none !important;' +
    '}' +

    /* ===== Input wrapper icons ===== */
    '#row-quicklogin .form-group {' +
    '  position: relative !important;' +
    '}' +

    '#row-quicklogin .form-group .lf-icon {' +
    '  position: absolute;' +
    '  left: 12px;' +
    '  bottom: 13px;' +
    '  color: rgba(255,215,0,0.35);' +
    '  font-size: 0.85rem;' +
    '  pointer-events: none;' +
    '  transition: color 0.3s;' +
    '  z-index: 3;' +
    '}' +

    '#row-quicklogin .form-group:focus-within .lf-icon {' +
    '  color: rgba(255,215,0,0.7);' +
    '}' +

    '#row-quicklogin .form-group .form-control.has-icon {' +
    '  padding-left: 36px !important;' +
    '}' +

    /* ===== Toggle password ===== */
    '#row-quicklogin #togglePass {' +
    '  z-index: 5;' +
    '  cursor: pointer;' +
    '}' +

    '#row-quicklogin #togglePass i {' +
    '  color: rgba(255,215,0,0.35) !important;' +
    '  font-size: 0.9rem;' +
    '  transition: color 0.3s;' +
    '}' +

    '#row-quicklogin #togglePass:hover i {' +
    '  color: rgba(255,215,0,0.7) !important;' +
    '}' +

    /* ===== Bottom separator ===== */
    '#row-quicklogin form .d-flex.gap-1 {' +
    '  padding-top: 6px !important;' +
    '  margin-top: 16px !important;' +
    '  border-top: 1px solid rgba(212,175,55,0.1);' +
    '}';

  /* ========== INJECT STYLES ========== */
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  /* ========== ADD INPUT ICONS + PLACEHOLDERS ========== */
  function enhance() {
    var form = document.querySelector('#row-quicklogin form');
    if (!form) return false;
    if (form.dataset.lfEnhanced) return true;
    form.dataset.lfEnhanced = '1';

    /* Username input */
    var usernameInput = form.querySelector('#username');
    if (usernameInput) {
      usernameInput.setAttribute('placeholder', 'Masukkan username...');
      usernameInput.classList.add('has-icon');
      var uIcon = document.createElement('span');
      uIcon.className = 'lf-icon';
      uIcon.innerHTML = '<i class="fas fa-user"></i>';
      usernameInput.parentElement.appendChild(uIcon);
    }

    /* Password input */
    var passInput = form.querySelector('#pass');
    if (passInput) {
      passInput.setAttribute('placeholder', 'Masukkan password...');
      passInput.classList.add('has-icon');
      var pIcon = document.createElement('span');
      pIcon.className = 'lf-icon';
      pIcon.innerHTML = '<i class="fas fa-lock"></i>';
      passInput.closest('.form-group').appendChild(pIcon);
    }

    return true;
  }

  /* ========== INIT ========== */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhance);
  } else {
    enhance();
  }

  /* Retry for dynamic content */
  var attempts = 0;
  var interval = setInterval(function () {
    if (enhance() || attempts > 10) clearInterval(interval);
    attempts++;
  }, 500);

})();