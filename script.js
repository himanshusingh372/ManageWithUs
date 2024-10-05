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
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline-block';
}

toggle.addEventListener('change', function () {
    const isChecked = toggle.checked; // Check if toggle is checked
    document.body.classList.toggle('dark-mode', isChecked); // Toggle dark mode class on body
    navbar.classList.toggle('dark-mode', isChecked); // Toggle dark mode class on navbar
    footerAbout.classList.toggle('dark-mode', isChecked); // Toggle dark mode class on footer about
    footerCopyright.classList.toggle('dark-mode', isChecked); // Toggle dark mode class on footer copyright

    // Toggle between sun and moon icons
    if (isChecked) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
    } else {
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
    }

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

// Select the offcanvas element
const offcanvasElement = document.getElementById('offcanvasNavbar');

// Create a Bootstrap offcanvas instance
const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);

// Add event listener for clicks outside the offcanvas
document.addEventListener('click', function (event) {
    // Check if the clicked element is not inside the offcanvas or the toggle button
    if (!offcanvasElement.contains(event.target) && !event.target.matches('.navbar-toggler')) {
        if (offcanvasInstance && offcanvasElement.classList.contains('show')) {
            offcanvasInstance.hide(); // Hide the offcanvas menu
        }
    }
});