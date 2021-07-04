
const btnSubMenu = document.querySelector('.userMenu .userIco'),
      subMenu = document.querySelector('.userMenu .subMenu');

btnSubMenu.addEventListener('click', () => {
    subMenu.classList.toggle('active');
});

document.documentElement.addEventListener('click', (event) => {
    if (!(btnSubMenu.contains(event.target) || subMenu.contains(event.target))) {
        subMenu.classList.remove('active');
    }
});

function styleZero(parent) {
    const par = document.querySelector(parent);
    par.firstElementChild.style.marginLeft = '0';
    par.firstElementChild.style.marginTop = '0';
    par.lastElementChild.style.marginRight = '0';
    par.lastElementChild.style.marginBottom = '0';
}

styleZero('main .lots .limit .products .sliderWindow .sliderTape');
styleZero('main .intelligence .limit .flexBox');
styleZero('main .additional .limit .content');




