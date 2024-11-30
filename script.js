// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Contact form validation
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function (e) {
    let isValid = true;
    const errorMessages = [];

    // Validate Name
    if (nameInput.value.trim() === '') {
        isValid = false;
        errorMessages.push('Name is required.');
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        isValid = false;
        errorMessages.push('Please enter a valid email address.');
    }

    // Validate Message
    if (messageInput.value.trim() === '') {
        isValid = false;
        errorMessages.push('Message is required.');
    }

    if (!isValid) {
        e.preventDefault();
        alert(errorMessages.join('\n'));
    }
});

// Responsive menu for mobile
const menuToggle = document.querySelector('.menu-toggle');
const navbarMenu = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', function () {
    navbarMenu.classList.toggle('open');
});
