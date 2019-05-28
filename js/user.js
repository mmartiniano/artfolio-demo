$(".gallery").html( () => {
	var html = "";
	for(var i = 1; i < 10; i++) {
		html += '<div class="gallery-item col">';
			html += '<img class="img-modal-trigger" src="img/af-artessauro-img-' + i + '.jpg">';
		html += '</div>';
	}
	return html;
});

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