const primaryNav = document.querySelector('.nav-cont');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === 'true') {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
})

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((el) => el.addEventListener('click', closeMenu));

function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
}