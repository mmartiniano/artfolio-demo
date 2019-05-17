const navbar = $(".navbar"); // Stores the navar refference
var navbarTop = navbar.offset().top;  // Get the navbar top offset

const profile = $(".profile"); // Stores the profile refference

// Window resize event
$(window).resize( () => {
	navbarTop = navbar.offset().top; // Update navbar top offset
}); 


// Document scroll event
$(document).scroll(() => {

	// Get the scroll value
	var scroll = $(document).scrollTop();

	// Verifies if the scroll is still on parallax height
	if(scroll < $(".parallax").height())
		// Scrolls the parallax slower than the document's body
		$(".parallax").css({ "transform": "translateY(-" + scroll / 4 + "px)" });

	// Set the navbar position to fixed when it gets the top page
	if(scroll >= navbarTop) {
		// Verifies if navbar is already fixed
		if(!navbar.hasClass("fixed")) {
			navbar.addClass("fixed shadow"); // If itsn't, turns it fixed

			profile.addClass("small");
		}
	} else {
		navbar.removeClass("fixed shadow");
		profile.removeClass("small");
		profile.addClass("large");
	}
});

// Add Lune modal