// Get the button
const backToTopButton = document.getElementById('backToTop');

// Keep track of scroll position
let lastScrollPosition =
	window.pageYOffset || document.documentElement.scrollTop;

// When the user scrolls
window.addEventListener(
	'scroll',
	() => {
		// Current scroll position
		let currentScrollPosition =
			window.pageYOffset || document.documentElement.scrollTop;

		// Determine scroll direction and position
		if (currentScrollPosition < lastScrollPosition) {
			// Scrolling UP
			if (currentScrollPosition > 100) {
				// Only show after scrolling down 100px
				backToTopButton.classList.add('show');
			} else {
				backToTopButton.classList.remove('show');
			}
		} else {
			// Scrolling DOWN
			backToTopButton.classList.remove('show');
		}

		// Update last scroll position
		lastScrollPosition = currentScrollPosition;
	},
	{ passive: true }
); // Performance optimization for scroll listener

// When the user clicks the button
backToTopButton.addEventListener('click', (e) => {
	e.preventDefault();

	// Smooth scroll to top
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

// Hide button on page load
document.addEventListener('DOMContentLoaded', () => {
	backToTopButton.classList.remove('show');

	// Add smooth scrolling to all links
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			const targetId = this.getAttribute('href');
			const targetElement = document.querySelector(targetId);

			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});

				// Update URL without jumping
				history.pushState(null, null, targetId);
			}
		});
	});
});
