// ==UserScript==
// @name        Homebrew search result pop-up
// @version     2.0
// @author      wtflm
// @namespace   wtflm
// @description Pops up the Homebrew website (brew.sh) search results when arriving via a direct link
// @include     /^https:\/\/formulae\.brew\.sh\/.*(\?|&)search=/
// @grant       none
// ==/UserScript==
const container = document.getElementById("search-container");
const observer = new MutationObserver(() => {
	search = document.querySelector(".DocSearch");
	search.dispatchEvent(new Event("click"));
	observer.disconnect();
});
observer.observe(container, {childList:true});
