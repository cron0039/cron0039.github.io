// this script file would have the JS that is shared between all pages
// javascript for hamburger button
// js for animation

$('.hamburger_container').on('click', function(){

		// .slideToggle(time) is the Jquery function that shows/hides elements with a slide animation 
		// time is speficied to determine the duration of animation
		$('.hidden_menu').slideToggle(300);
	});