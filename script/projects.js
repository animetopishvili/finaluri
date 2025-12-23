document.addEventListener("DOMContentLoaded", function () {
  var filterButtons = document.querySelectorAll(".filter-btn");
  var projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      filterButtons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      this.classList.add("active");

      var filterValue = this.getAttribute("data-filter");

      projectCards.forEach(function (card) {
        var category = card.getAttribute("data-category");

        if (filterValue === "all" || category === filterValue) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
});
