"use strict";

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
	if(document.body.scrollTop>10 ||  document.documentElement.scrollTop>10){
		document.getElementById("top-header").style.padding = "5px";
	}
	else{
		document.getElementById("top-header").style.padding= "10px";
	}
}