// Inicializate Lune modal
$(document).ready( () => {
	L.modal();
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