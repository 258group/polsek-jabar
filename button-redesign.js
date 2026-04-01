(function () {
  'use strict';

  var css =
    '/* ============================================= */' +
    '/* LOGIN / DAFTAR / PROMOSI Button Redesign      */' +
    '/* ============================================= */' +

    /* --- Shared base for all buttons --- */
    '#row-loginmenu .btn.flex-fill,' +
    '#btn-login,' +
    '#btn-register,' +
    '#btn-promotion {' +
    '  position: relative !important;' +
    '  overflow: hidden !important;' +
    '  font-family: "Exo 2", sans-serif !important;' +
    '  font-weight: 700 !important;' +
    '  font-size: 1rem !important;' +
    '  letter-spacing: 2px !important;' +
    '  text-transform: uppercase !important;' +
    '  padding: 13px 18px !important;' +
    '  border-radius: 8px !important;' +
    '  border: 1.5px solid rgba(255,215,0,0.35) !important;' +
    '  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;' +
    '  box-shadow: 0 3px 12px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1) !important;' +
    '  animation: none !important;' +
    '  background-size: 100% 100% !important;' +
    '  text-align: center !important;' +

    /* Unified gold metallic gradient for ALL buttons */
    '  background: linear-gradient(180deg,' +
    '    #c9a518 0%,' +
    '    #e8c840 12%,' +
    '    #fde372 26%,' +
    '    #f5d130 40%,' +
    '    #c9a518 52%,' +
    '    #a68510 64%,' +
    '    #c9a518 78%,' +
    '    #e8c840 90%,' +
    '    #c9a518 100%' +
    '  ) !important;' +
    '  color: #1a0505 !important;' +
    '  text-shadow: 0 1px 0 rgba(255,255,255,0.25) !important;' +
    '}' +

    /* --- Shimmer sweep --- */
    '#row-loginmenu .btn.flex-fill::before,' +
    '#btn-login::before,' +
    '#btn-register::before,' +
    '#btn-promotion::before {' +
    '  content: "" !important;' +
    '  position: absolute !important;' +
    '  top: 0 !important; left: -100% !important; width: 60% !important; height: 100% !important;' +
    '  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent) !important;' +
    '  animation: btn-gold-shimmer 4s ease-in-out infinite !important;' +
    '  z-index: 2 !important;' +
    '  pointer-events: none !important;' +
    '}' +

    '@keyframes btn-gold-shimmer {' +
    '  0% { left: -100%; }' +
    '  50%, 100% { left: 200%; }' +
    '}' +

    /* --- Inner top highlight (metallic shine) --- */
    '#row-loginmenu .btn.flex-fill::after,' +
    '#btn-login::after,' +
    '#btn-register::after,' +
    '#btn-promotion::after {' +
    '  content: "" !important;' +
    '  position: absolute !important;' +
    '  top: 0 !important; left: 5% !important; right: 5% !important; height: 45% !important;' +
    '  background: linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 100%) !important;' +
    '  border-radius: 8px 8px 50% 50% !important;' +
    '  z-index: 1 !important;' +
    '  pointer-events: none !important;' +
    '}' +

    /* --- Hover state (all same) --- */
    '#row-loginmenu .btn.flex-fill:hover,' +
    '#btn-login:hover,' +
    '#btn-register:hover,' +
    '#btn-promotion:hover {' +
    '  background: linear-gradient(180deg,' +
    '    #d4b020 0%,' +
    '    #f0d550 12%,' +
    '    #fff0a0 26%,' +
    '    #f5d838 40%,' +
    '    #d4b020 52%,' +
    '    #b89218 64%,' +
    '    #d4b020 78%,' +
    '    #f0d550 90%,' +
    '    #d4b020 100%' +
    '  ) !important;' +
    '  border-color: rgba(255,215,0,0.7) !important;' +
    '  transform: translateY(-3px) !important;' +
    '  box-shadow:' +
    '    0 6px 20px rgba(0,0,0,0.4),' +
    '    0 0 20px rgba(255,215,0,0.15),' +
    '    0 0 8px rgba(255,215,0,0.1),' +
    '    inset 0 1px 0 rgba(255,255,255,0.15) !important;' +
    '  color: #1a0505 !important;' +
    '  text-shadow: 0 1px 0 rgba(255,255,255,0.35) !important;' +
    '}' +

    /* --- Active / pressed --- */
    '#row-loginmenu .btn.flex-fill:active,' +
    '#btn-login:active,' +
    '#btn-register:active,' +
    '#btn-promotion:active {' +
    '  transform: translateY(0) scale(0.97) !important;' +
    '  box-shadow: 0 1px 4px rgba(0,0,0,0.4), inset 0 3px 6px rgba(0,0,0,0.2) !important;' +
    '  background: linear-gradient(180deg,' +
    '    #a68510 0%,' +
    '    #c9a518 25%,' +
    '    #e8c840 50%,' +
    '    #c9a518 75%,' +
    '    #a68510 100%' +
    '  ) !important;' +
    '}' +

    /* --- Wrapper gap --- */
    '#row-loginmenu .d-flex.gap-1 {' +
    '  gap: 10px !important;' +
    '}' +

    '@media (max-width: 480px) {' +
    '  #row-loginmenu .btn.flex-fill {' +
    '    font-size: 0.85rem !important;' +
    '    padding: 11px 10px !important;' +
    '    letter-spacing: 1.5px !important;' +
    '  }' +
    '}';

  /* --- Inject CSS --- */
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
})();