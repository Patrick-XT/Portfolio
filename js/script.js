import SlideNav from './module/slide-projetos.js';

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');


// 
// 
// 
// 
// 
import initDigitacao from "./module/efeito-digitacao.js";
import initMenuFixo from "./module/menu-fixo.js";
import initMenuMobile from "./module/menu-mobile.js";

initDigitacao();
initMenuFixo();
initMenuMobile();
