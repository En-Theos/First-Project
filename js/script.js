import clickMenu from './modules/clickMenu';
import styleZero from './modules/styleZero';

document.addEventListener('DOMContentLoaded', () => {
    clickMenu('.userMenu .userIco', '.userMenu .subMenu');
    styleZero('main .lots .limit .products .sliderWindow .sliderTape');
    styleZero('main .intelligence .limit .flexBox');
    styleZero('main .additional .limit .content');
});