// Navbar scroll effect
window.addEventListener("scroll", function() {
  document.getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});