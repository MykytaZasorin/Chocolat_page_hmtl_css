let currentSlide = 0;
const slides = document.querySelectorAll('.choco-love-list-cell');
const dots = document.querySelectorAll('.dot');

function goToSlide(index) {
  const slideWidth = slides[0].offsetWidth + 20; // ширина карточки + gap
  const slider = document.querySelector('.choco-love-list');
  
  slider.scrollTo({ left: slideWidth * index, behavior: 'smooth' });

  dots.forEach((d, i) => d.classList.toggle('active', i === index));
  currentSlide = index;
}

setInterval(() => {
  let next = (currentSlide + 1) % slides.length;
  goToSlide(next);
}, 5000);
