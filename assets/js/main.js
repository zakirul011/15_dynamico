

(function ($) {
	"use strict";

	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});


		/*=========================
	PRELOADER JS
	===========================*/
		$(window).on('load', function (event) {
			$('.preloader').delay(500).fadeOut(500);
		});



		/* ======= Full Screen Menu  ======= */
		$('.nav-bars, .tt-nav, .colse-btn').on('click', function () {
			$('.nav-bars, .colse-btn').toggleClass('navbar-on');
			$('.tt-nav').fadeToggle();
			$('.tt-nav').removeClass('nav-hide');
		});
		$('.nav-bars, .colse-btn').on('click', function () {
			$('.sidebar-menu-wrapper, .colse-btn').toggleClass('active');
		});

		// Mobile-menu
		$("#mobile_menu").metisMenu({
			toggle: true
		});

		/*=========================
		magnificPopup image JS
		===========================*/
		$('.video-btn').magnificPopup({
			type: 'iframe'
		});

		/*=========================
		chooise-active-slider
		===========================*/
		$('.chooise-active-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: true,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',

			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
			]
		});

		/*=========================
		feature-active-slider
		===========================*/
		$('.feature-active-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
			fade: true,
			cssEase: 'ease-in-out'
		});

		// timeline
		$('.timeline-item:nth-child(even)').addClass('timeline-reverse');
		const timelinecounter = document.querySelectorAll('.timeline-counter')
		timelinecounter.forEach((counter, index) => {
			counter.innerHTML = index + 1
		});

		// animation input
		const borderedInput = document.querySelectorAll('.bordered-input-box input, .bordered-input-box textarea')
		borderedInput.forEach(input => {
			if (input.value != '') {
				input.nextElementSibling.classList.add('active')
			}
			input.addEventListener('focus', () => {
				input.nextElementSibling.classList.add('active')
			})
			input.addEventListener('focusout', () => {
				if (input.value == '') {
					input.nextElementSibling.classList.remove('active')
				}
			})
		});


		// customTab
		customTab(document.querySelectorAll('.faq-tab-link-wrap'), document.querySelectorAll('.faq-tab-item'))

		function customTab(links, tabs) {
			links.forEach((link, index) => {
				link.addEventListener('click', () => {
					for (let i = 0; i < links.length; i++) {
						links[i].classList.remove('active')
					}
					for (let i = 0; i < tabs.length; i++) {
						tabs[i].classList.remove('active')
					}
					link.classList.add('active')
					tabs[index].classList.add('active')

				})
			});
		}


		// animated about feature box
		const animatedBox = document.querySelectorAll('.animated-box-wrap')
		animatedBox.forEach(box => {
			window.addEventListener('scroll', ()=>{
				if (box.getBoundingClientRect().top < window.innerHeight) {
					box.classList.add('animation-start')
				}else{
					box.classList.remove('animation-start')
				}
			})
		});

		// niceSelect
		$('select').niceSelect();

		/*=========================
		SCROLL-UP JS
		===========================*/
		$.scrollUp({
			scrollName: 'scrollUp', // Element ID
			topDistance: '300', // Distance from top before showing element (px)
			topSpeed: 300, // Speed back to top (ms)
			animation: 'fade', // Fade, slide, none
			animationInSpeed: 200, // Animation in speed (ms)
			animationOutSpeed: 200, // Animation out speed (ms)
			scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
			activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
		});

		/*=========================
		AOS JS
		===========================*/
		AOS.init({
			disable: "mobile", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
			offset: 120, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 1000, // values from 0 to 3000, with step 50ms
			easing: 'ease', // default easing for AOS animations
			once: false, // whether animation should happen only once - while scrolling down
		});




}(jQuery));