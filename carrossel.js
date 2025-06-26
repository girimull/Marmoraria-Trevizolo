// Primeiro Carrossel
let slideIndex1 = 0;
const slide1 = document.getElementById('carouselSlide');
const totalSlides1 = document.querySelectorAll('.carousel-item').length;

function updateSlide1() {
  slide1.style.transform = 'translateX(' + (-slideIndex1 * 100) + '%)';
}

function nextSlide1() {
  slideIndex1 = (slideIndex1 + 1) % totalSlides1;
  updateSlide1();
}

function prevSlide1() {
  slideIndex1 = (slideIndex1 - 1 + totalSlides1) % totalSlides1;
  updateSlide1();
}

setInterval(nextSlide1, 7000);

