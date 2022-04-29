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
import initExp from "./module/experiencia.js";
import initAccordion from "./module/accordion.js"
import initScrollSuave from "./module/scroll-suave.js"
import initAnimaScroll from "./module/anima-scroll.js"
import initMenuAtivo from "./module/menu-ativo.js"









initExp()
initDigitacao();
initMenuFixo();
initMenuMobile();
initAccordion();
initScrollSuave();
initAnimaScroll();
initMenuAtivo();


// Animação
new SimpleAnime()