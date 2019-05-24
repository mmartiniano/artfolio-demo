//Global variables
var viewHeight = $(window).height(); // Viewport height
var viewWidth = $(window).width(); // Viewport width

// Inicializate Lune
$(document).ready( () => {
	L.init();
});

// Resize event
$(window).resize( () => {
	// Changes the dimensions variables
	viewHeight = $(window).height();
	viewWidth = $(window).width();
});

class L {
	// Inits the general usage Lune components
	static init() {
		L.form();
	}

	// Manipulates forms components
	static form() {
		L.textarea(); // Inits textarea
	}

	// Textarea
	static textarea() {
		// Resize textarea on input event
		$("textarea").on("input", event => {
			console.log("input");
			const element = event.target;
			element.style = 'height: auto';
			element.style = 'height:' + element.scrollHeight + 'px';
	
		});
	}

	static fadeout() {
		var delay = 0; 	// Stores the delay to genereta cascate effect
		var signal = ""; // Changes the direction of the translate effect

		// Button on-click event
		$(".fadeout-trigger").click( trigger => {

			// If the direction is left, change the signal
			if($(trigger).attr("target").getAttribute("direction") == "left") signal = "-";

			// Applies the fadeout effect to each div
			$(".fadeout").each( function() {

				this.style.opacity = "0";
				setTimeout( () => { this.style.transform = "translateX(" + signal + "300px)"; }, delay);

				delay += 30;

			});	

			$(".fadeout").last().one("transitionend", () => { // Once the animation of the last element is done...
				$(".fadeout").css("display", "none"); // Sets display property to none of them all
			});

		});
	}

	// Returns the target - defined on mark html element attribute - of an event
	static target(e) {
		return $("#" + $(e).attr("target").getAttribute("mark"));
	}

	// Manipulates the modal funtions
	static modal() {
		// Adds event listener to modal triggers buttons
		$("button.modal-trigger").click(buttonEvent => {
			/* 
				Gets the button modal target(mark attribute)
			 	and stores the reference in m
			*/
			const m = L.target(buttonEvent); // Modal refference
			Modal.show(m); // Show modal

			// $(".modal.img").each( function() {
			// 	console.log(this);
			// });

			// Hide modal on click in overlayer component
			$(".overlayer").click( () => {
				Modal.hide(m); // Hide modal
			});
		});

		// Sets the style of the modals image
		$(".modal-img").each( function() {
			const img = new Image(this); // Creates a new Image object
			var proportion = img.width / img.height;

			// Adjust image view
			var adjust = function(element) {
				// Verifies the image orientation
				if(img.orientation == "portrait") { // Portrait

					// If the image height isn't less than 70% of the window height...
					if(! img.height < 0.7 * viewHeight)
						img.height = 0.7 * viewHeight; // Set the height to 70% of client height
					else
						img.height = img.height;

					img.width = img.height * proportion; // Adjust image dimension by using the original proportion 
					
			
				} else { // Landscape

					// If the image width isn't less than 70% of the window width...
					if(! img.width < 0.9 * viewWidth) 
						img.width = 0.9 * viewWidth; // Set the width to 90% of client width
					else
						img.width = img.width;

					img.height = img.width / proportion; // Adjust image dimension by using the original proportion
				}

				img.render() // Changes the image dimension
				$(element).parent()[0].style.marginLeft = (viewWidth - img.width) / 2 + "px"; // Center the modal horizontally
				$(element).parent()[0].style.marginTop = (viewHeight - img.height) / 2 + "px"; // Center the modal vertically
			}

			adjust(this);
			$(window).resize( () => { adjust(this) } );
		});
	}
}

class Image {
	// Represents an image

	constructor(img) {
		this._img = img; // Stores the image refference

		this._width = img.naturalWidth; // Gets the image original width
		this._height = img.naturalHeight; // Gets the image original height

		// Sets the image orientation
		this._orientation = this._width < this._height ? "portrait" : "landscape";
	}

	// Getters

	get img() {
		return this._img;
	}

	get width() {
		return this._width;
	}

	get height() {
		return this._height;
	}

	get orientation() {
		return this._orientation;
	}

	// Setters

	set width(width) {
		this._width = width;
	}

	set height(height) {
		this._height = height;
	}

	// Apllies the values of the attibutes to the image element
	render() {
		this._img.style = 'width: ' + this._width + 'px; height: ' + this._height + 'px';
	}

}

class Overlayer {
	// Implements the overlayer and its effects

	// Show overlayer
	static show() {
		$('body').append('<div class="overlayer"></div>'); // Writes an overlayer div
		const overlayer = $(".overlayer");	// Overlayer refference
		overlayer.css("display", "block"); // Sets display property to block
		setTimeout(() => { overlayer.addClass("active") }, 2); // Awaits 0.002s to show overlayer (transition)
	}

	// Hide overlayer
	static hide() {
		const overlayer = $(".overlayer"); // Overlayer refference
		overlayer.removeClass("active"); // Changes the overlayer opacity
		overlayer.one("transitionend", () => { // Once the animation is done...
			overlayer.css("display", "none"); // Sets display property to none 
			$(overlayer).remove(); // Removes the overlayer divs
		})
	}
}


class Modal {
	// Represents a modal component

	// Shows a given modal
	static show(modal) {
		modal.css("display", "block"); // Sets display property to block
		Overlayer.show(); // Show overlayer
		setTimeout(() => { modal.addClass("active") }, 2); // Awaits 0.002s to show modal (transition)
	}

	// Hides a given modal
	static hide(modal) {
		modal.removeClass("active"); // Hides modal
		Overlayer.hide(); // Hides overlayer
		modal.one("transitionend", () => { // Once the animation is done...
			modal.css("display", "none"); // Sets display property to none
		}); 
	}
}