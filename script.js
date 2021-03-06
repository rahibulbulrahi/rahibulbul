// Navbar Sticky
// $(document).ready(function () {
//   $(window).scroll(function () {
//     if (this.scrollY > 20) {
//       $(".navbar").addClass("sticky");
//     } else {
//       $(".navbar").removeClass("sticky");
//     }
//   });
// });

// Button on off
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
  body.classList.add("disabled");
};
cancelBtn.onclick = () => {
  body.classList.remove("disabled");
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};
window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

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
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $("a").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");

    var target = this.hash,
      menu = target;
    $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 2,
        },
        500,
        "swing",
        function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        }
      );
  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $(".navbar .menu-list li a").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $(".navbar .menu-list li a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
