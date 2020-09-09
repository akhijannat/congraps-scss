// Navbar Scroll Effict
const navbar = document.querySelector('#navbar');

window.onscroll = function() {
	var top = window.scrollY;

	if (top >= 100){
		navbar.classList.add('scroll');
	} else {
		navbar.classList.remove('scroll');
	}
}
//////////////////////////////////// End of Navbar Scroll