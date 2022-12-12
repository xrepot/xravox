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
let mySection = document.querySelector(".skills-content");
let mySpans = document.querySelectorAll(".skills-precentage");


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


// Change Header Color

const nav = document.getElementById("head");
function scrollHeader() {
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

function scrollTopWhats() {
  const scrollTop = document.getElementById("whats");
  if (this.scrollY >= 650) scrollTop.classList.add("show-whats");
  else scrollTop.classList.remove("show-whats");
}
window.addEventListener("scroll", scrollTopWhats);

// Dark & Light Mode

const themeButton = document.getElementById("theme-button");
setInterval(() => {
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("dark", "dark-theme");
    localStorage.removeItem("light");
  } else {
    localStorage.setItem("light", "");
    localStorage.removeItem("dark")
  }
}, 0);

if (localStorage.getItem("dark")) {
  document.body.classList.add("dark-theme");
  themeButton.classList.add("uil-sun");
}else  {
  document.body.classList.remove("dark-theme");
  themeButton.classList.remove("uil-sun");
}


themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeButton.classList.toggle("uil-sun");
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("dark", "dark-theme");
    localStorage.removeItem("light");
  } else {
    localStorage.setItem("light", "");
    localStorage.removeItem("dark")
  }
});
// Aos JS

// Light On Sections

let main = document.querySelectorAll("main section");
let slide = document.querySelector(".point-slide");
let slideA = document.querySelectorAll(".point-slide a");

function removeActive() {
  slideA.forEach((ele) => {
    ele.classList.remove("active-3");
  });
}
function removeActive() {
  slideA.forEach((ele) => {
    ele.classList.remove("active-3");
  });
}

window.addEventListener("scroll", () => {
  if (scrollY >= 0) {
    removeActive();
    slideA[0].classList.add("active-3");
  }
  if (scrollY >= main[1].offsetTop - 72) {
    removeActive();
    slideA[1].classList.add("active-3");
  }
  if (scrollY >= main[2].offsetTop - 72) {
    removeActive();
    slideA[2].classList.add("active-3");
  }
  if (window.scrollY >= main[3].offsetTop - 72) {
    removeActive();
    slideA[3].classList.add("active-3");
  }
  if (scrollY >= main[4].offsetTop - 72) {
    removeActive();
    slideA[4].classList.add("active-3");
  }
  if (scrollY >= main[5].offsetTop - 72) {
    removeActive();
    slideA[5].classList.add("active-3");
  }
});

// Animation Whats

let whats = document.querySelector(".whats");

setInterval(() => {
  whats.classList.toggle("wobble");
}, 1500);

// Tabs System
let tabs = document.querySelectorAll(".li-work");
let works = document.querySelectorAll(".bottom-work .work-one")
let shape = document.querySelectorAll(".allShape")

tabs.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    tabs.forEach((ele) => {
      ele.classList.remove("active-4");
    });
    e.currentTarget.classList.add("active-4");
    works.forEach((ele) => {
      ele.style.display = "none"
    })
    document.querySelectorAll(`${e.currentTarget.dataset.work} .work-one`).forEach((ele) => {
      ele.style.display = "flex"
    })
  });
});

document.querySelector(`[data-work=".web-work"]`).addEventListener("click", () => {
  shape.forEach((ele) => {
    ele.style.display = "none"
  })
})

document.querySelector(`[data-work=".all"]`).addEventListener("click", () => {
  shape.forEach((ele) => {
    ele.style.display = "block"
  })
})

document.querySelector(`[data-work=".design-work"]`).addEventListener("click", () => {
  document.querySelectorAll(".shape-work")[1].style.display = "none"
})
// Change Width Skills
let bars = document.querySelectorAll(".skills-precentage")

window.addEventListener("scroll", () => {
  bars.forEach((bar) => {
  if (scrollY >= main[2].offsetTop - 500) {
      bar.style.width = bar.dataset.width 
    } else {
      bar.style.width = 0
    }
  })
})

// 
let btnOpenImg = document.querySelectorAll(".eye-work")
let btnCloseImg = document.querySelector(".close-img")
let img = document.querySelector(".clicked-img")
let boxImg = document.querySelector(".click-img")
let workImg = document.querySelectorAll(".work-img")
let footer = document.querySelector(".footer")

btnOpenImg.forEach((ele) => {
  ele.addEventListener("click", () => {
    img.src = ele.parentElement.children[2].lastElementChild.src
    boxImg.classList.add("active-6")
    document.querySelector("main").classList.add("fb-15")
    nav.classList.add("fb-15")
  })
})

btnCloseImg.addEventListener("click", () => {
  btnCloseImg.parentElement.classList.remove("active-6")
  document.querySelector("main").classList.remove("fb-15")
  nav.classList.remove("fb-15")
})