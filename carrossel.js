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

 /* Botão hamburguer só no mobile */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

/* Esconde menus no mobile */
@media (max-width: 900px) {
  .menu-left ul,
  .menu-right ul {
    display: none;
    flex-direction: column;
    background: white;
    padding: 10px;
    margin: 0;
  }

  /* Mostra quando o JS adiciona .active */
  .menu-left.active ul,
  .menu-right.active ul {
    display: flex;
  }

  /* Mostra o botão no mobile */
  .menu-toggle {
    display: block;
  }
}
