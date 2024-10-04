// script.js
const sunIcon = document.querySelector('.fa-sun'); // Select sun icon
const moonIcon = document.querySelector('.fa-moon'); // Select moon icon
const toggle = document.getElementById('darkModeToggle'); // Get the toggle switch
const footerAbout = document.querySelector('.footer-about'); // Select footer about section
const footerCopyright = document.querySelector('.footer-copyright'); // Select footer copyright section
const navbar = document.querySelector('.navbar'); // Select the navbar

// Check local storage for dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode'); // Add dark mode class to body
    navbar.classList.add('dark-mode'); // Add dark mode class to navbar
    footerAbout.classList.add('dark-mode'); // Add dark mode class to footer about
    footerCopyright.classList.add('dark-mode'); // Add dark mode class to footer copyright
    toggle.checked = true; // Set toggle switch to checked
}

toggle.addEventListener('change', function () {
    const isChecked = toggle.checked; // Check if toggle is checked
    document.body.classList.toggle('dark-mode', isChecked); // Toggle dark mode class on body
    navbar.classList.toggle('dark-mode', isChecked); // Toggle dark mode class on navbar
    footerAbout.classList.toggle('dark-mode', isChecked); // Toggle dark mode class on footer about
    footerCopyright.classList.toggle('dark-mode', isChecked); // Toggle dark mode class on footer copyright

    // Save the current state to local storage
    localStorage.setItem('darkMode', isChecked ? 'enabled' : 'disabled');
});

// Select all nav links in the offcanvas
const navLinks = document.querySelectorAll('.offcanvas .nav-link');

// Add click event to each nav link
navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        // Hide the offcanvas menu
        const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasNavbar'));
        if (offcanvas) {
            offcanvas.hide(); // Hide offcanvas if it's open
        }

        // Wait for the offcanvas to close before scrolling
        setTimeout(() => {
            const targetId = this.getAttribute('href'); // Get the target section's ID from the href attribute
            const targetSection = document.querySelector(targetId); // Find the target section
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the target section
            }
        }, 300); // Adjust the duration to match the offcanvas transition time
    });
});
