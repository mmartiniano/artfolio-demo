var arts = [
	{src : "lizard.png", tags : ["Pinturas Digitais"]},
	{src : "brasa.png", tags : ["Pinturas Digitais", "Entidades"]},
	{src : "preso.jpg", tags : ["Pinturas Digitais"]},
	{src : "star boots.jpg", tags : ["Pinturas Digitais", "Adesivos"]},
	{src : "sonhos lúcidos.jpg", tags : ["Giz"]},
	{src : "lovers.png", tags : ["Pinturas Digitais", "Entidades"]},
	{src : "af-artessauro-img-9.jpg", tags : ["Giz", "Entidades"]},
	{src : "af-artessauro-img-2.jpg", tags : ["Pinturas Digitais"]},
	{src : "af-artessauro-img-5.jpg", tags : ["Pinturas Digitais", "Adesivos"]},
	{src : "af-artessauro-img-7.jpg", tags : ["Pinturas Digitais", "Adesivos"]}
];

arts.tagged = function(tag) {
	return this.filter(art => { return art.tags.includes(tag) });
};

arts.notTagged = function(tag) {
	return this.filter(art => { return !art.tags.includes(tag) });
};



$(document).ready( () => {
	for(let i = 0; i < arts.length; i++) {
		document.getElementsByClassName("gallery")[0].innerHTML += '<div class="gallery-item"><img class="img-modal-trigger" src="img/' + arts[i].src + '"></div>';
	}

	$(".section-button").click(function(){
		arts.tagged(this.innerHTML).forEach(art => {
			$("img[src = 'img/" + art.src + "']").parent().show();
		})

		arts.notTagged(this.innerHTML).forEach(art => {
			$("img[src = 'img/" + art.src + "']").parent().hide();
		})
	});

	$(".section-all").click(() => {
		$(".gallery-item").show();
	})

	L.modal(); // Inicializate Lune modal

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