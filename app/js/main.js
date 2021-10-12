// importing start
import attrClear from "./functions/attrClear";
import { modalClose } from "./functions/modalWindow";
import simplePhoneMusk from "./functions/simplePhoneMusk";
import modalWindowInit from "./functions/modalWindowInit";
import btnsFunc from "./functions/btns";
import observer from "./functions/lazyLoading";
import lazyBg from "./functions/lazyBg";
import setMarginTop from "./functions/setMarginTop";
import simpleAnimate from "./functions/simpleAnimate";
// import customSelectFunc from "./functions/customSelect";
// import tabsChange from "./functions/tabsChange";
// import collapsibleFunc from "./functions/collapsible";
// import ytPlayer from "./functions/youtubePlayer";
// import menuDropdown from "./functions/menuDropdown";
// import setBelarusPhoneMask from "./functions/setBelarusPhoneMask";
// importing end

document.addEventListener("DOMContentLoaded", () => {
  // variable start
  const images = document.querySelectorAll("img");
  const phoneLink = document.querySelectorAll("a[href^='tel']");
  const burgerMenu = document.querySelector(".menu__burger");
  const menu = document.querySelector(".menu-nav");
  const modalCloseIcons = document.querySelectorAll(".close__modal");
  const body = document.querySelector("body");
  const breadcrumb = document.querySelector(".breadcrumb");
  const lazyImages = document.querySelectorAll(
    "img[data-lazy-src],source[data-lazy-srcset] "
  );
  const preloaderProgress = document.querySelector(".preloader__progress");
  const animateItems = document.querySelectorAll(".animate");
  // variable end

  // functions call start
  // ytPlayer();
  // setBelarusPhoneMask();
  // menuDropdown();
  // customSelectFunc();
  // collapsibleFunc();
  // tabsChange();
  lazyBg();
  modalWindowInit();
  btnsFunc();
  simpleAnimate();
  simplePhoneMusk();
  // functions call end

  //functions start
  const setMainMarginTop = () => {
    let main = document.querySelector(".main");
    if (main) {
      !main.classList.contains("mt__nan")
        ? setMarginTop("#header", ".main")
        : "";
    }
  };
  setTimeout(() => {
    let body = document.querySelector("body");
    body.classList.add("__loading");
    body.classList.add("__fixed");
    for (let i = 0; i < 100; i++) {
      preloaderProgress.value++;
    }
    window.setTimeout(function () {
      body.classList.add("__load");
      body.classList.remove("__loading");
      body.classList.remove("__fixed");
    }, 700);
  }, 100);
  //functions end

  setMainMarginTop();

  //animate not scroll items
  if (animateItems.length > 0) {
    animateItems.forEach((item) => {
      if (!item.classList.contains("scroll")) {
        setInterval(() => {
          item.classList.add("__animated");
        }, 1000);
      }
    });
  }
  //preventDefault last lastBreadcrumb item click
  if (breadcrumb) {
    let lastBreadcrumb = breadcrumb.lastElementChild;

    if (lastBreadcrumb) {
      lastBreadcrumb.addEventListener("click", (e) => {
        e.preventDefault();
      });
    }
  }

  // init modal close btn
  if (modalCloseIcons.length > 0) {
    modalCloseIcons.forEach((icon) => {
      icon.addEventListener("click", (e) => {
        modalClose(icon.closest(".modal"));
        e.preventDefault();
      });
    });
  }

  // call close popup func on ESC keypress
  document.addEventListener("keydown", function (e) {
    if (e.which === 27) {
      const modalOpen = document.querySelector(".modal.__open");
      modalClose(modalOpen);
    }
  });

  // phone link clear white space
  if (phoneLink.length > 0) {
    phoneLink.forEach((link) => {
      attrClear(link, "href", 2);
    });
  }

  // images clear title and alt attribute
  if (images.length > 0) {
    images.forEach((img) => {
      attrClear(img, "title", 1);
      attrClear(img, "alt", 1);
    });
  }

  //init lazy loading images
  if (lazyImages.length > 0) {
    lazyImages.forEach((image) => {
      observer.observe(image);
    });
  }

  //  burgerMenu function
  if (burgerMenu) {
    burgerMenu.addEventListener("click", function (e) {
      this.classList.toggle("__clicked");
      body.classList.toggle("__fixed");
      menu.classList.toggle("__show");
      e.preventDefault;
    });
  }

  window.onscroll = function () {
    simpleAnimate();
  };
  window.onresize = function () {
    setTimeout(() => {
      setMainMarginTop();
    }, 1000);
  };
});
