$(document).ready(function) {
	// variables for speeds
	var speed = 500
	var autoswitch = true
	var autoswitch_speed = 4000

	// Add inital active class
	$('.slide').first().addClass('active')

	// Hide all slides
	$('.slide').hide()

	// Show first slide
	$('.slide').show()

	// Next Handler
	$('#next').on('click', nexSlide)

	// Prev Handler
	if(autoswitch == true) {
		setInterval(nexSlide, autoswitch_speed)
	}

	// Takes the active class off present slides and removes it, gives it to the next slide
	function nextSlide() {
		$('.active').removeClass('active').addClass('oldActive')
			if($('oldActive').is(':last-child')) {
				$('.slide').first().addClass('active')
			} else {
				$('.oldActive').next().addClass('active')

			}
			$('.oldActive').removeClass('oldActive')
			$('.slide').fadOut(speed)
			$('.active').fadeIn(speed)
	}

	// Switch to Prev slide
	function prevSlide() {
		$('.active').removeclass('.active').addClass('oldActive')
			if($('oldActive').is(':first-child')) {
				$('.slide').last().addClass('active')
			} else {
				$('.oldActive').prev().addClass('active')
			}
			$('.oldActive').removeClass('oldActive')
			$('.slide').fadeOut(speed)
			$('.active').fadeIn(speed)
	}
})