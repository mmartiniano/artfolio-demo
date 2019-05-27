// Inicializate Lune modal
$(document).ready( () => {
	L.modal();
});

const navbar = $(".navbar"); // Stores the navar refference

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
		}
	} else {
		// Verifies if navbar is already fixed
		if(navbar.hasClass("fixed")) {
			navbar.removeClass("fixed shadow");
		}
	}
});


// Switch between log in and sign up
$(".switch").click( event => {
	var target = L.target(event);

	$(".switch-option").each( function() {
		if(target[0] !== this) {
			$(this).fadeOut(200, () => {
				target.removeClass("hide");
				target.fadeIn(200);
			});
		}
	});
});