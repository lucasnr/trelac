let config = {
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
};

new Swiper(".swiper-container", config);
new Swiper(".banner .swiper-container", {
	...config,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
});
