document.getElementsByTagName("nav")[0].style.backgroundColor = "";
document.getElementsByTagName("nav")[0].style.transition = "all ease-in 0.5s";
document.getElementsByTagName("nav")[0].style.position = "absolute";
const banner = (document.getElementsByTagName(
  "article"
)[0].style.minHeight = `${window.innerHeight}px`);
window.addEventListener("resize", () => {
  const banner = (document.getElementsByTagName(
    "article"
  )[0].style.minHeight = `${window.innerHeight}px`);
});
function scrollToElement(pageElement) {
  var positionX = 0,
    positionY = 0;

  while (pageElement != null) {
    positionX += pageElement.offsetLeft;
    positionY += pageElement.offsetTop;
    pageElement = pageElement.offsetParent;
    window.scrollTo({ top: positionY, left: positionX, behavior: "smooth" });
  }
}

const navLinks = document.querySelectorAll("nav li a").forEach((link) => {
  const links = ["Home", "About", "Skills", "Projects", "Contacts"];
  link.addEventListener("click", () => {
    for (a_link of links) {
      if (a_link === link.innerHTML) {
        document.querySelector(`.${a_link}`).scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    }
  });
});
const mobileLinks = document
  .querySelectorAll(".mobile-nav li a")
  .forEach((link) => {
    const links = ["Home", "About", "Skills", "Projects", "Contacts"];
    link.addEventListener("click", () => {
      for (a_link of links) {
        if (a_link === link.innerHTML) {
          document.querySelector(`.${a_link}`).scrollIntoView({
            block: "nearest",
            behavior: "smooth",
          });
        }
      }
    });
  });

$(document).ready(function () {
  var im_i = 0;
  var im_array = ["A Developer", "A Programmer"];

  setInterval(function () {
    im_i++;
    if (im_i > im_array.length - 1) {
      im_i = 0;
    }

    $(".heading_pro").animate({ opacity: "toggle" }, 200, function () {
      $(".heading_pro")
        .html('<h2 class="heading_pro">' + im_array[im_i] + "</h2>")
        .fadeIn(2000);
    });
  }, 3000);
});
const navLinkEls = document.querySelectorAll("#nav__link");
const mobileLinkEls = document.querySelectorAll("#nav__link2");

const articlesEls = document.querySelectorAll("article");

let currentSection = "Home";
window.addEventListener("scroll", () => {
  articlesEls.forEach((articleEl) => {
    if (window.scrollY >= articleEl.offsetTop - 200) {
      currentSection = articleEl.className;
    }
    if (window.scrollY > 700) {
      document.getElementsByTagName("nav")[0].style.backgroundColor = "#131313";
      document.getElementsByTagName("nav")[0].style.transition =
        "all ease-in 0.5s";
      document.getElementsByTagName("nav")[0].style.width = "";
      document.getElementsByTagName("nav")[0].style.position = "relative";
    } else {
      document.getElementsByTagName("nav")[0].style.backgroundColor = "";
      document.getElementsByTagName("nav")[0].style.transition =
        "all ease-in 0.5s";
      document.getElementsByTagName("nav")[0].style.position = "absolute";
    }
  });

  if (window.outerWidth < 890) {
    mobileLinkEls.forEach((links) => {
      if (links.href.includes(currentSection)) {
        document.querySelector(".active")?.classList.remove("active");
        links.classList.add("active");
      }
      if (links.href.includes("Home")) {
        document.querySelector(".active")?.classList.remove("active");
      }
    });
  } else {
    navLinkEls.forEach((links) => {
      if (links.href.includes(currentSection)) {
        document.querySelector(".active")?.classList.remove("active");
        links.classList.add("active");
      }
      if (links.href.includes("Home")) {
        document.querySelector(".active")?.classList.remove("active");
      }
    });
  }
});

const navBar = document.getElementById("navBtn");
const mobileNav = document.querySelector(".mobile-nav");
navBar.addEventListener("click", function () {
  mobileNav.classList.toggle("active");
});

var scrollTop = document.getElementById("scrollTop");

window.onscroll = function () {
  scrollfunction();
};
function scrollfunction() {
  if (document.documentElement.scrollTop > 2500) {
    scrollTop.style.display = "block";
    scrollTop.style.transition = "all ease-in 1.5s";
  } else {
    scrollTop.style.display = "none";
  }
}

scrollTop.addEventListener("click", function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
