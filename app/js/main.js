// import inputmask
import inputmask from "inputmask";

// import attrClear function
import attrClear from "./functions/attrClear";

// import modalWindow functions
import { modalClose } from "./functions/modalWindow";

// import modalWindow init functions
import modalWindowInit from "./functions/modalWindowInit";

// import  btns functions
import btnsFunc from "./functions/btns";

// import lazyLoading functions
import observer from "./functions/lazyLoading";

// import customSelectFunc functions
// import customSelectFunc from "./functions/customSelect";

// import tabsChange functions
// import tabsChange from "./functions/tabsChange";

// import collapsibleFunc function
// import collapsibleFunc from "./functions/collapsible";

// import lazyBg function
import lazyBg from "./functions/lazyBg";

// import ytPlayer function
// import ytPlayer from "./functions/youtubePlayer";

// import menuDropdown function
// import menuDropdown from "./functions/menuDropdown";
// import showVisible
import showVisible from "./functions/showVisible";

document.addEventListener("DOMContentLoaded", () => {
  // variable start
  const phoneInput = document.querySelectorAll("input[type=tel]");
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
  const animateItems = document.querySelectorAll(".animate");

  // variable end

  // function call start
  // ytPlayer();
  lazyBg();
  modalWindowInit();
  btnsFunc();
  showVisible();
  window.onscroll = showVisible;
  // menuDropdown();
  // customSelectFunc();
  // collapsibleFunc();
  // tabsChange();
  // function call end

  //animate not scroll items
  if (animateItems.length > 0) {
    animateItems.forEach((item) => {
      if (!item.classList.contains("scroll")) {
        setInterval(() => {
          item.classList.add("__show");
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
      const modalOpen = document.querySelector(".modal.--open");
      modalClose(modalOpen);
    }
  });

  // set Belarus phone mask
  let phoneMaskBy = new inputmask({
    mask: "+375-99-999-99-99",
    clearIncomplete: true,
    greedy: false,
  });

  // inputmask for phone input
  if (phoneInput.length > 0) {
    phoneInput.forEach((phoneMask) => {
      phoneMaskBy.mask(phoneMask);
    });
  }

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
      this.classList.toggle("--clicked");
      body.classList.toggle("--fixed");
      menu.classList.toggle("--show");
      e.preventDefault;
    });
  }
});
