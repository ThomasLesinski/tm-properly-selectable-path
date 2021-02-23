// ==UserScript==
// @name         GH Shopware - Properly selectable path
// @namespace    https://www.ottscho-it-service.de/
// @version      1
// @description  Add div to allow proper selection of path text
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
