export default function styleZero(parent) {
    const par = document.querySelector(parent);
    par.firstElementChild.style.marginLeft = '0';
    par.firstElementChild.style.marginTop = '0';
    par.lastElementChild.style.marginRight = '0';
    par.lastElementChild.style.marginBottom = '0';
}