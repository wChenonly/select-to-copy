// ==UserScript==
// @name         select-to-copy
// @namespace    https://github.com/wChenonly/select-to-copy
// @version      0.0.2
// @author       wChenonly
// @description  Select to copy and use in the browser.
// @license      MIT
// @homepage     https://github.com/wChenonly/select-to-copy#readme
// @homepageURL  https://github.com/wChenonly/select-to-copy#readme
// @source       https://github.com/wChenonly/select-to-copy.git
// @supportURL   https://github.com/wChenonly/select-to-copy/issues
// @include      *://**/*
// @grant        unsafeWindow
// ==/UserScript==

(function () {
  'use strict';

  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  let text;
  document.onclick = function() {
    if (_unsafeWindow.getSelection) {
      text = _unsafeWindow.getSelection();
    } else if (document.getSelection) {
      text = document.getSelection();
    }
    const v = text == null ? void 0 : text.toString();
    if (v) {
      navigator.clipboard.writeText(v);
    }
  };

})();
