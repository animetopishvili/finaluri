const burger = document.querySelector(".burger");
const mobileMenu = document.getElementById("mobileMenu");

function toggleMenu() {
  burger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  document.body.style.overflow = mobileMenu.classList.contains("active")
    ? "hidden"
    : "";
}

function closeMenu() {
  burger.classList.remove("active");
  mobileMenu.classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("click", (e) => {
  if (
    !burger.contains(e.target) &&
    !mobileMenu.contains(e.target) &&
    mobileMenu.classList.contains("active")
  ) {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});
