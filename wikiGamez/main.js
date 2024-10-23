let index = 0;

function showSlide() {
  const items = document.querySelector('.carrusel-items');
  const totalItems = document.querySelectorAll('.item').length;
  const offset = -index * 300; // Ajustar según el ancho del item
  items.style.transform = `translateX(${offset}px)`;
}

function next() {
  const totalItems = document.querySelectorAll('.item').length;
  index = (index + 1) % totalItems; // Mover al siguiente
  showSlide();
}

function prev() {
  const totalItems = document.querySelectorAll('.item').length;
  index = (index - 1 + totalItems) % totalItems; // Mover al anterior
  showSlide();
}