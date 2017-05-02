$(document).ready(function() {
	$('.materialboxed').materialbox();
	$('.modal').modal();
	$(".button-collapse").sideNav();

	var viewHeight = $(window).height();
	var meContainer = $('.me-container .avatar').css('height', viewHeight);

	$("#link2").click(function() {
		$('.work-image').prepend('<img src="assets/bm.png" />')
	});

});
