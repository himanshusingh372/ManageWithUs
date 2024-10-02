// script.js
const toggle = document.getElementById('darkModeToggle');
const sunIcon = document.querySelector('.fa-sun');
const moonIcon = document.querySelector('.fa-moon');

toggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class on body
    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        sunIcon.style.display = 'none'; // Hide sun icon
        moonIcon.style.display = 'inline'; // Show moon icon
    } else {
        sunIcon.style.display = 'inline'; // Show sun icon
        moonIcon.style.display = 'none'; // Hide moon icon
    }
});

