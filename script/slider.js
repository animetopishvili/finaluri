document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slider-image");
  let currentSlide = 0;
  const slideInterval = 5000;

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    // Add active class to current slide
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    showSlide(currentSlide);
  }

  if (slides.length > 0) {
    setInterval(nextSlide, slideInterval);
  }
});
