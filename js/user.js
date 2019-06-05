// Inicializate Lune modal
$(document).ready( () => {

	L.modal();

});

const navbar = $(".navbar"); // Stores the navar refference
var navbarOffset = navbar.offset().top; // Stores the navbar distance from top of the page
const user = $(".user"); // Profile image and user's name wrapper refference
const profile = $(".profile.large"); // Main profile image refference

var scroll = $(document).scrollTop(); // Get the scroll value

// Document scroll event
$(document).scroll(() => {
	// Get the scroll value
	scroll = $(document).scrollTop();

	// Try to turn navbar into fixed
	fixNavbar();
});

// Try to turn navbar into fixed
fixNavbar();

// Set the navbar position to fixed when it is scrolled up
function fixNavbar() {
	
	if(scroll >= navbarOffset) {
		// Verifies if navbar isn't already fixed
		if(!navbar.hasClass("fixed")) {
			if($(".gallery").height() < viewHeight + navbar.height()) // Prevent bug when the gallery is too small
				$(".header").css("marginBottom", "180px");
			navbar.addClass("fixed"); // If itsn't, turns it fixed
		}
	} else {
		// Verifies if navbar is already fixed
		if(navbar.hasClass("fixed")) {
			if($(".gallery").height() < viewHeight + navbar.height()) // Prevent bug when the gallery is too small
				$(".header").css("marginBottom", "0");
			navbar.removeClass("fixed");
			user.addClass("hide");
		}
	}

	// Show hide user's profile image and name
	if(scroll >= profile.offset().top + profile.height()) 
		user.removeClass("hide");
	else
		user.addClass("hide");
}