// ==UserScript==
// @name         select-to-copy
// @namespace    https://github.com/wChenonly/select-to-copy
// @version      0.0.1
// @author       wChenonly
// @description  Select to copy and use in the browser.
// @license      MIT
// @include      *://**/*
// @grant        unsafeWindow
// ==/UserScript==

(function () {
  'use strict';

  let text;
  document.onclick = function() {
    if (unsafeWindow.getSelection) {
      text = unsafeWindow.getSelection();
    } else if (document.selection) {
      text = document.selection.createRange();
    }
    const v = text == null ? void 0 : text.toString();
    if (v) {
      navigator.clipboard.writeText(v);
    }
  };

})();
