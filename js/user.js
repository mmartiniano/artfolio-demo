// Inicializate Lune modal
$(document).ready( () => {

	L.modal();

});

const navbar = $(".navbar"); // Stores the navar refference

// Document scroll event
$(document).scroll(() => {

	// Get the scroll value
	var scroll = $(document).scrollTop();

	// Set the navbar position to fixed when the first section is scrolled up
	if(scroll >= viewHeight + navbar.height()) {
		// Verifies if navbar isn't already fixed
		if(!navbar.hasClass("fixed")) {
			navbar.addClass("fixed shadow"); // If itsn't, turns it fixed
		}
	} else {
		// Verifies if navbar is already fixed
		if(navbar.hasClass("fixed")) {
			navbar.removeClass("fixed shadow");
		}
	}
});