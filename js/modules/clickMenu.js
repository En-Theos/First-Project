export default function clickMenu(selButton, selMenu) {
    const btnSubMenu = document.querySelector(selButton),
        subMenu = document.querySelector(selMenu);

    btnSubMenu.addEventListener('click', () => {
        subMenu.classList.toggle('active');
    });

    document.documentElement.addEventListener('click', (event) => {
        if (!(btnSubMenu.contains(event.target) || subMenu.contains(event.target))) {
            subMenu.classList.remove('active');
        }
    });
}