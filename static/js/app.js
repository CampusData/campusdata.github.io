$(function() {
	$('.parallax').parallax();
	$('.button-collapse').sideNav();

	if ($('.table-of-contents').length) {
		$('.table-of-contents').pushpin({
			top: $('.table-of-contents').offset().top - 50,
			bottom: $('#bottom').offset().top - $(window).height()/2
		});
	}
});
