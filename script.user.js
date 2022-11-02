// ==UserScript==
// @name        Homebrew search result pop-up
// @version     1.0
// @author      wtflm
// @namespace   wtflm
// @description Pops up the Homebrew website (brew.sh) search results when arriving via a direct link
// @include     /^https:\/\/formulae\.brew\.sh\/.*(\?|&)search=/
// @grant       none
// ==/UserScript==
const search = document.getElementById("search-bar");
const term = decodeURIComponent(location.search.match(/((?<=search=)[^&]+)/).pop());
setTimeout(() => {
	search.readonly = true;
	search.value = "";
	setTimeout(() => {
		search.value = term;
		search.readonly = false;
		search.focus();
		search.dispatchEvent(new Event("input"));
	});
});
