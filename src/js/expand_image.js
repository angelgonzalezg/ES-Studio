document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".expandable-img");
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modal.classList.remove("hidden");
    });
  });
});

function closeImage() {
  document.getElementById("image-modal").classList.add("hidden");
}
