// ==UserScript==
// @name         GH Shopware - Properly selectable path
// @namespace    https://www.ottscho-it-service.de/
// @version      1
// @description  Add btn to copy path for template extension
// @author       ThomasLesinski
// @include      https://github.com/*/compare/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

    const diffstat = document.querySelector('.diffstat.float-right');
    const pathLink = diffstat.nextElementSibling;

    const span = document.createElement('span');
    span.style.display = 'inline-block';
    span.style.width = '26px';
    span.style.height = '16px';

    pathLink.parentNode.appendChild(span);
})();
