import i18Obj from './translate.js';

const langContain = document.querySelector('.language');
const langButtons = document.querySelectorAll('.btn_lang');
let language = 'en';

function changeClassActiveLang(e) {
    langButtons.forEach(btn => btn.classList.remove('btn_lang_active'));
    if (e.target.classList.contains('btn_lang')) {
        e.target.classList.add('btn_lang_active');
    }
};

langContain.addEventListener('click', e => {
    changeClassActiveLang(e);
    if (e.target.dataset.lang === 'en') {
        language = 'en';
        changeLang(language);
    }
    if (e.target.dataset.lang === 'ru') {
        language = 'ru';
        changeLang(language);
    }
});

function changeLang(language) {
    const items = document.querySelectorAll('[data-i18]');

    items.forEach((elem) => {
        const getData = Object.keys(i18Obj[language])
            .find(item => item === elem.dataset.i18);

        if (getData) {
            elem.textContent = i18Obj[language][elem.dataset.i18]
        }
        if (elem.placeholder) {
            elem.placeholder = ''
            elem.placeholder = i18Obj[language][elem.dataset.i18]
        }
    })
};