// Inicializate Lune modal
$(document).ready( () => {

	L.modal();

});

const navbar = $(".navbar"); // Stores the navar refference
var navbarOffset = navbar.offset().top;
const user = $(".user");

var scroll = $(document).scrollTop();

// Document scroll event
$(document).scroll(() => {
	// Get the scroll value
	scroll = $(document).scrollTop();
	fixNavbar();
});

fixNavbar();

function fixNavbar() {
	// Set the navbar position to fixed when the first section is scrolled up
	if(scroll >= navbarOffset) {
		// Verifies if navbar isn't already fixed
		if(!navbar.hasClass("fixed")) {
			$(".header").css("marginBottom", "180px");
			navbar.addClass("fixed"); // If itsn't, turns it fixed
			user.removeClass("hide");
		}
	} else {
		// Verifies if navbar is already fixed
		if(navbar.hasClass("fixed")) {
			$(".header").css("marginBottom", "0");
			navbar.removeClass("fixed");
			user.addClass("hide");
		}
	}
}