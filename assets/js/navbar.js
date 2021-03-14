const navbar = document.querySelector(".custom-navbar");
const toggler = document.querySelector("#navbar-toggler");

toggler.onclick = () => {
	document.body.classList.toggle("overflow-hidden");
	navbar.classList.toggle("active");
};

window.onresize = () => {
	if (window.innerWidth >= 768)
		document.body.classList.remove("overflow-hidden");
};
