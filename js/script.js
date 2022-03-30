import initDigitacao from "./module/efeito-digitacao.js";
import initMenuFixo from "./module/menu-fixo.js";
import initMenuMobile from "./module/menu-mobile.js";
import Slide from "./module/slide-projetos.js"

const slide = new Slide(".slide", ".slide-wrapper")

slide.init()
console.log(slide)



initDigitacao();
initMenuFixo();
initMenuMobile();

