$(document).ready(function() {
	$(".button-collapse").sideNav();
	$('.modal').modal();

	var viewHeight = window.innerHeight ? window.innerHeight : $(window).height();
	var meContainer = $('.me-container .avatar').css('height', viewHeight);

	var d = new Date();
	var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	var n = weekday[d.getDay()];
	document.getElementById("day").innerHTML = n;

});
