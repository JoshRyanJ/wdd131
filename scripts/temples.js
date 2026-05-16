const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('nav ul li a');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        hamburger.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && !e.target.closest('.hamburger')) {
        navMenu.classList.remove('show');
        hamburger.classList.remove('active');
    }
});

const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModSpan = document.getElementById('lastmod');
const lastModified = new Date(document.lastModified);
const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
lastModSpan.textContent = lastModified.toLocaleDateString('en-US', options);
