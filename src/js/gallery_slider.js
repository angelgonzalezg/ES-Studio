document.addEventListener("DOMContentLoaded", () => {
  const imagenes = [
    "src/assets/housing/cabin1.png",
    "src/assets/housing/cabin2.png",
    "src/assets/housing/cabin3.png",
    "src/assets/housing/cabin4.png",
  ];
  let index = 0;
  const imgEl = document.getElementById("gallery-img");

  setInterval(() => {
    // Aplica clase fade-out
    imgEl.classList.add("fade-out");

    // Espera a que la opacidad llegue a 0 antes de cambiar la imagen
    setTimeout(() => {
      index = (index + 1) % imagenes.length;
      imgEl.src = imagenes[index];

      // Espera un momento para asegurar que la imagen cargue antes de hacer fade-in
      imgEl.onload = () => {
        imgEl.classList.remove("fade-out");
      };
    }, 600); // Tiempo igual al de la transición CSS
  }, 5000);

  // VISOR 360°
  new PhotoSphereViewer.Viewer({
    container: document.getElementById("visor360-1"),
    panorama: "src/assets/proyectos/imagen360_1.jpg",
    navbar: ["zoom", "fullscreen"],
  });
  new PhotoSphereViewer.Viewer({
    container: document.getElementById("visor360-2"),
    panorama: "src/assets/proyectos/imagen360_2.jpg",
    navbar: ["zoom", "fullscreen"],
  });
});
