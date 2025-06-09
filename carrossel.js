
  let slideIndex2 = 0;
  const slide2 = document.getElementById('carousel2Slide');
  const totalSlides2 = document.querySelectorAll('.carousel2-item').length;

  function updateSlide2() {
    slide2.style.transform = 'translateX(' + (-slideIndex2 * 100) + '%)';
  }

  function nextSlide2() {
    slideIndex2 = (slideIndex2 + 1) % totalSlides2;
    updateSlide2();
  }

  function prevSlide2() {
    slideIndex2 = (slideIndex2 - 1 + totalSlides2) % totalSlides2;
    updateSlide2();
  }

  setInterval(nextSlide2, 7000); // autoplay
  

/*segundo carrossel*/
      
 function toggleMenu() {
    document.querySelector('.menu-left').classList.toggle('show');
    document.querySelector('.menu-right').classList.toggle('show');
}
    
let slideIndex = 0;
    const slide = document.getElementById('carouselSlide');
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    
function updateSlide() {
    slide.style.transform = 'translateX(' + (-slideIndex * 100) + '%)';
}
    
function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    updateSlide();
}
               
function prevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}
    

        // Passa para o próximo slide a cada 7 segundos
setInterval(nextSlide, 7000);
      