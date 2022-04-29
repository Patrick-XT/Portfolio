export default function initMenuAtivo() {
  const sectionsInView = document.querySelectorAll(".js-scroll-animado");

function menuAtivoScroll() {
  sectionsInView.forEach((section) => {
    const alturaSection = section.clientHeight;
    const alturaTop = section.getBoundingClientRect().top;
    const menuAlt = document.querySelector(".navbar-default").clientHeight;
    const href = section.getAttribute("id");
    const itemMenu = document.querySelector('a[href="#' + href + '"]');
    

    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      if ((alturaTop * 0.9)  - menuAlt < scrollTop && alturaTop + (alturaSection * 0.4) - menuAlt > scrollTop) {
        itemMenu.classList.add("active");
      } else{
        itemMenu.classList.remove("active");

      }
    });
  });
}

menuAtivoScroll();
}


