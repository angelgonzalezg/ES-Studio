document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const gallerySection = document.getElementById("project-gallery");

  if (!navbar || !gallerySection) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // mientras este en la seccion de galeria → navbar blanco
        navbar.classList.remove("bg-coconutmilk/10", "text-white", "border-black/10");
        navbar.classList.add("bg-white", "text-black", "border-black/20");
      } else {
        // Cuando ya no este en la seccion de galería → navbar transparente
        navbar.classList.remove("bg-white", "text-black", "border-black/20");
        navbar.classList.add("bg-coconutmilk/10", "text-white", "border-black/10");
      }
    },
    {
      threshold: 0.001,
      rootMargin: "-80px 0px 0px 0px" // ajusta si el navbar tapa contenido
    }
  );

  observer.observe(gallerySection);
});
