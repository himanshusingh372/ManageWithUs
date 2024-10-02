// script.js
const sunIcon = document.querySelector('.fa-sun'); // Select sun icon
const moonIcon = document.querySelector('.fa-moon'); // Select moon icon
const toggle = document.getElementById('darkModeToggle'); // Get the toggle switch
const footerAbout = document.querySelector('.footer-about'); // Select footer about section
const footerCopyright = document.querySelector('.footer-copyright'); // Select footer copyright section
const navbar = document.querySelector('.navbar'); // Select the navbar

toggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class on body
    document.footer.classList.toggle('dark-mode'); // Toggle dark mode class on footer
    footerAbout.classList.toggle('dark-mode'); // Toggle dark mode class on footer about
    footerAbout.classList.toggle('dark-mode'); // Toggle dark mode class on footer about
    footerCopyright.classList.toggle('dark-mode'); // Toggle dark mode class on footer copyright
    navbar.classList.toggle('dark-mode'); // Toggle dark mode class on navbar

    const isDarkMode = document.body.classList.contains('dark-mode');

    // Toggle icons based on dark mode state
    if (isDarkMode) {
        sunIcon.style.display = 'none'; // Hide sun icon
        moonIcon.style.display = 'inline'; // Show moon icon
    } else {
        sunIcon.style.display = 'inline'; // Show sun icon
        moonIcon.style.display = 'none'; // Hide moon icon
    }
});

// Select all nav links in the offcanvas
const navLinks = document.querySelectorAll('.offcanvas .nav-link');

// Add click event to each nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Hide the offcanvas menu
        const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
        if (offcanvas) {
            offcanvas.hide(); // Hide offcanvas if it's open
        }
    });
});

