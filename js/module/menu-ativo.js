export default function initMenuAtivo() {
  const sectionsInView = document.querySelectorAll(".js-scroll-animado");

function menuAtivoScroll() {
  sectionsInView.forEach((section) => {
    const alturaSection = section.clientHeight;
    const alturaTop = section.getBoundingClientRect().top;
    const menuAlt = document.querySelector(".navbar-default").clientHeight
    const href = section.getAttribute("id");
    const itemMenu = document.querySelector('a[href="#' + href + '"]');
    

    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      if (alturaTop - menuAlt < scrollTop && alturaTop + alturaSection - menuAlt > scrollTop) {
        itemMenu.classList.add("active");
      } else{
        itemMenu.classList.remove("active");

      }
    });
  });
}

menuAtivoScroll();
}


