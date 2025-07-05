document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('a[href]'); // Todos los enlaces
  const navbar = document.querySelector("nav");
  const navbarHeight = navbar?.offsetHeight || 0;

  navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      // Ir al top del home y/o recargar pagina
      if (href === "/") {
        event.preventDefault();

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        return;
      }

      // scroll a secciones internas
      if (href.startsWith("#")) { 
        event.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const elementTop = targetElement.getBoundingClientRect().top + window.scrollY;
          const scrollTo = elementTop - navbarHeight;

          window.scrollTo({
            top: scrollTo,
            behavior: "smooth"
          });
        }
      }
    });
  });
});
