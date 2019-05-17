// Website loaded
// $(document).ready(function(){
// 	$('.parallax').parallax();
// });

// Scrol event
$(document).scroll(() => {
	// Get the scroll value
	var scroll = $(document).scrollTop();

	// Scrolls the parallax slower than the document's body
	$(".parallax").css({ "transform": "translateY(-" + scroll / 4 + "px)" });
});

// Add Lune modal