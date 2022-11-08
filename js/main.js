// Show Menu
let navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });
}

// Hidden Menu

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

let navlink = document.querySelectorAll(".nav-link");

function linkAction() {
  let navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navlink.forEach((n) => n.addEventListener("click", linkAction));

// Skills

let skillsContent = document.getElementsByClassName("skills-content"),
  skillsheader = document.querySelectorAll(".skills-header");

function toggleSkills() {
  let itemClass = this.parentNode.className;
  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills-content skills-close";
  }
  if (itemClass === "skills-content skills-close") {
    this.parentNode.className = "skills-content skills-open";
  }
}

skillsheader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

// Services Model

let modalViews = document.querySelectorAll(".services-modal"),
  modalBtns = document.querySelectorAll(".services-button"),
  modalCloses = document.querySelectorAll(".services-modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtns, i) => {
  modalBtns.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalCloses) => {
  modalCloses.addEventListener("click", () => {
    modalViews.forEach((modalViews) => {
      modalViews.classList.remove("active-modal");
    });
  });
});

// Swiper

let swiper = new Swiper(".protfolio-container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Scroll Active Link

// const sections = document.querySelectorAll("section[id]")
// console.log(sections)

// function scrollActive() {
//   const scrollGG = window.pageYOffset

//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight
//     const sectionTop = current.offsetTop - 50;
//     sectionId = current.getAttribute("id")
//     if (scrollGG > sectionTop && scrollGG <= sectionTop + sectionHeight) {
//       document.querySelector(".nav-menu a[href*=' + sectionId + ']").classList.add("active-link")
//     } else {
//       console.log("good")
//     }
//   })
// }
// window.addEventListener("scroll", scrollActive)

// Change Header Color

function scrollHeader() {
  const nav = document.getElementById("head");
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// Show Scroll

function scrollTop() {
  const scrollTop = document.getElementById("scroll-up");
  if (this.scrollY >= 650) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

// Dark & Light Mode

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains("darkTheme") ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains("iconTheme") ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// Aos JS


// Animation 

// let home = document.querySelector(".about")
// let skilsss = document.querySelector(".skills")

// window.onscroll = function () {
//   home.classList.add("dis")
// }

// window.onscroll = function () {
//   skilsss.classList.add("dis2")
// }
