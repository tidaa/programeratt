document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('[data-navbar]');
    const navCloseBtn = document.querySelector('[data-nav-close-btn]');
    const navLinks = document.querySelectorAll('.navbar-link');

    document.querySelector('.logo').addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default anchor click behavior
        navbar.classList.toggle('open');
    });

    navCloseBtn.addEventListener('click', () => {
        navbar.classList.remove('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('open');
        });
    });
});