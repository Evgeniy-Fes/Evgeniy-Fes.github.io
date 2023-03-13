// import './module/cat';

document.addEventListener('click', function (e) {
    e.preventDefault();
    const el = e.target;
    const className = 'tab-link';
    const parrentClassName = 'tab-parrent';
    const tabClassName = 'tab';
    const classNameArr = el.className.replace(/\s{2,}/g, ' ').trim().split(' ');

    if (el && classNameArr.indexOf(className) !== -1) {
        const id = el.attributes.href.value.split('')[1];
        const parrent = el.closest(`.${parrentClassName}`);

        parrent.querySelector(`.${className}.active`).classList.remove('active');
        parrent.querySelector(`.${tabClassName}.active`).classList.remove('active');

        el.classList.add('active');
        parrent.querySelector(`[data-tab='${id}']`).classList.add('active');
    }
});

function toggleMenu() {
    const menu = document.querySelector('.header-menu');
    const burger = document.querySelector('.burger');
    const bg = document.querySelector('.mob-bg');

    menu.classList.toggle('opened');
    burger.classList.toggle('opened');
    bg.classList.toggle('opened');
}

document.querySelector('.burger').addEventListener('click', toggleMenu);
document.querySelector('.mob-bg').addEventListener('click', toggleMenu);
