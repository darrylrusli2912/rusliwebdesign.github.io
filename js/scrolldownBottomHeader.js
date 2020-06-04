"use strict";


//when the user scrolls down reduce the padding-top.

window.onscroll = function(){scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop>10 || document.documentElement.scrollTop>10) {
		document.getElementById("bottom-header").style.paddingTop="5px";
	}
	else{
		document.getElementById("bottom-header").style.paddingTop="15px";
	}
}