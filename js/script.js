new Swiper ('.swiper',{
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	/*centeredSlides: true,*/
	spaceBetween: 20,
	slidesPerView: 'auto',
	watchOverflow: true,
	initialSlide: 0,
	/*loop: true,*/
	autoplay: {
		delay: 5000,
		stopOnLastSlide: false,
		disableOnIteration: false,
	},
   effect: 'fade',
   fadeEffect: {
      crossFade: true,
   },
});

document.querySelector('.header__burger').onclick = function() {
	document.querySelector('.header__menu').classList.toggle('header__menu-active')
	document.querySelector('.header__burger').classList.toggle('active')
	$('body').toggleClass('lock')
}
