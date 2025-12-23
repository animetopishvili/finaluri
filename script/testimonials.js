document.addEventListener("DOMContentLoaded", function () {
  var slides = document.querySelectorAll(".testimonial-slide");
  var dots = document.querySelectorAll(".testimonial-dot");

  dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
      var slideIndex = this.getAttribute("data-slide");

      slides.forEach(function (slide) {
        slide.classList.remove("active");
      });

      dots.forEach(function (d) {
        d.classList.remove("active");
      });

      slides[slideIndex].classList.add("active");
      this.classList.add("active");
    });
  });
});

