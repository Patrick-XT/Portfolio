export default function initAnimaScroll() {}

const sections = document.querySelectorAll(".js-scroll-animado")
const windowMetade = window.innerHeight * 0.6

function animaScroll(){
sections.forEach((section)=>{
  const sectionTop = section.getBoundingClientRect().top - windowMetade;
  if(sectionTop < 0 ){
    section.classList.add("ativo")
  } else{
    section.classList.remove("ativo")
  }
})
}
window.addEventListener("scroll", animaScroll)

animaScroll()