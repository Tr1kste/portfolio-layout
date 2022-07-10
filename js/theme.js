const themeBtn = document.querySelector('.btn-page-theme');
const h2Lines = document.querySelectorAll('.h2-title');
const portfolioBtn = document.querySelectorAll('.btn_portfolio');
const navLinks = document.querySelectorAll('.nav-link');


function changeIcon(e) {
    if (e.target.classList.contains('btn-page-theme')) {
        e.target.classList.remove('btn-page-theme')
        e.target.classList.add('btn-page-moon')
    }
    else if (e.target.classList.contains('btn-page-moon')) {
        e.target.classList.remove('btn-page-moon')
        e.target.classList.add('btn-page-theme')
    }
};

themeBtn.addEventListener('click', e => {
    changeIcon(e);

    if (e.target.classList.contains('btn-page-moon')) {
        document.documentElement.style.setProperty('--bg-dark', '#fff');
        document.documentElement.style.setProperty('--white', '#000');

        h2Lines.forEach(elem => {
            elem.classList.remove('lines')
            elem.classList.add('lines_black')
        })
        portfolioBtn.forEach(elem => {
            elem.classList.add('btn_portfolio_black')
        })

        if (window.matchMedia("(max-width: 768px)").matches) {
            navLinks.forEach(elem => {
                elem.classList.add('nav-link-mobile')
            })
        }
        if (window.matchMedia("(min-width: 769px)").matches) {
            navLinks.forEach(elem => {
                elem.classList.remove('nav-link-mobile')
            })
        }

    }
    else if (e.target.classList.contains('btn-page-theme')) {
        document.documentElement.style.setProperty('--bg-dark', '#000');
        document.documentElement.style.setProperty('--white', '#fff');

        h2Lines.forEach(elem => {
            elem.classList.remove('lines_black')
            elem.classList.add('lines')
        })
        portfolioBtn.forEach(elem => {
            elem.classList.remove('btn_portfolio_black')
        })

        if (window.matchMedia("(max-width: 768px)").matches) {
            navLinks.forEach(elem => {
                elem.classList.remove('nav-link-mobile')
            })
        }
        if (window.matchMedia("(min-width: 769px)").matches) {
            navLinks.forEach(elem => {
                elem.classList.add('nav-link-mobile')
            })
        }


    }
});