const portfolioBtns = document.querySelectorAll('.btn_portfolio');
const portfolioImages = document.querySelectorAll('.portf-img');
const portfolioBtn = document.querySelector('.portf-buttons');

function changeClassActive(e) {
    portfolioBtns.forEach(btn => btn.classList.remove('btn_portfolio_active'))
    if (e.target.classList.contains('btn_portfolio')) {
        e.target.classList.add('btn_portfolio_active')
    }
};

portfolioBtn.addEventListener('click', e => {
    changeClassActive(e)
    if (e.target.dataset.season === 'winter') {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
    } else if (e.target.dataset.season === 'spring') {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
    } else if (e.target.dataset.season === 'summer') {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
    } else if (e.target.dataset.season === 'autumn') {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
    }
})

function preloadImages() {
    const seasons = ['winter', 'spring', 'summer', 'autumn'];
    seasons.forEach(season => {
        for (let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${season}/${i}.jpg`;
        }
    })
};

preloadImages();