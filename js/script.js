// Inicializate Lune modal
$(document).ready( () => {
	L.modal();
	L.fadeout();
});

const navbar = $(".navbar"); // Stores the navar refference
//const profile = $(".profile"); // Stores the profile refference

// Document scroll event
$(document).scroll(() => {

	// Get the scroll value
	var scroll = $(document).scrollTop();

	// // Verifies if the scroll is still on parallax height
	// if(scroll < $(".parallax").height())
	// 	// Scrolls the parallax slower than the document's body
	// 	$(".parallax").css({ "transform": "translateY(-" + scroll / 4 + "px)" });

	// Set the navbar position to fixed when the first section is scrolled up
	if(scroll >= viewHeight + navbar.height()) {
		// Verifies if navbar isn't already fixed
		if(!navbar.hasClass("fixed")) {
			navbar.addClass("fixed shadow"); // If itsn't, turns it fixed

			//profile.remove("hide");
		}
	} else {
		// Verifies if navbar is already fixed
		if(navbar.hasClass("fixed")) {
			navbar.removeClass("fixed shadow");
			//profile.addClass("hide");
		}
	}
});

// Add Lune modal