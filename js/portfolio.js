"use strict";

$(document).ready(function(){
	//handle the menu toggle click event
	$("#menu-toggle").on("click", function(event){

		//Toggle the "show" on the menu
		$("#menuNav").toggleClass("show");
	});
});