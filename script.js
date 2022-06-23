// Navbar Sticky
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
});

$(".navbar .menu li a").click(function () {
  $("html").css("scrollBehavior", "smooth");
});

// Navbar Scroll slide-up
// $(".scroll-up-btn").click(function () {
//   $("html").animate({ scrollTop: 0 });
//   // removing smooth scroll on slide-up button click
//   $("html").css("scrollBehavior", "auto");
// });
// $(".navbar .menu li a").click(function () {
//   // applying again smooth scroll on menu items click
//   $("html").css("scrollBehavior", "smooth");
// });

// Active Class on Navbar
$(document).ready(function () {
  $(".navbar .menu li a").click(function () {
    $(".navbar .menu li a").removeClass("active");
    $(this).addClass("active");
  });
});

// Typing text animation
var typed = new Typed(".info-typing", {
  strings: [
    "Web Developer...",
    "Designer..",
    "Discord Server Developer..",
    "Discord Bot Developer...",
    "Blogger..",
  ],
  typeSpeed: 100,
  loop: true,
  backSpeed: 120,
});

// About typing text animation
var typed = new Typed(".about-typing", {
  strings: [
    "Web Developer",
    "Designer",
    "Discord Server Developer",
    "Discord Bot Developer",
    "Blogger",
    "An Introvert",
    "and a person who likes to learn new things",
  ],
  typeSpeed: 100,
  loop: true,
  backSpeed: 60,
});

// Skills bar animation
const skillsSection = document.querySelector(".skills-bar");
const progressbar = document.querySelectorAll(".progress-bar");

window.addEventListener("scroll", () => {
  const skillsBar = skillsSection.getBoundingClientRect().top;
  const skillsBarPosition = window.innerHeight - skillsBar;
  if (skillsBarPosition < 900) {
    progressbar.forEach((bar) => {
      bar.style.width = bar.dataset.percentage;
    });
  }
});

// Active on scroll
