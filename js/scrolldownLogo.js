"use strict";

// when the user scrolls down reduce the width of the logo

window.onscroll = function(){scrollLogoFunction()}

function scrollLogoFunction() {
	if(document.body.scrollTop>40 || document.documentElement.scrollTop> 10){
		document.getElementById("logo").style.width="40px";
		document.getElementById("menuDesktopNav").style.paddingTop="10px";
		document.getElementById("menu-bar").style.paddingTop="0";
	}
	else{
		document.getElementById("logo").style.width="80px";
		document.getElementById("menuDesktopNav").style.paddingTop ="25px";
		document.getElementById("menu-bar").style.paddingTop="15px";	
	}
	}
