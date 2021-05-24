import inputmask from "inputmask";
import loadingAttributePolyfill from "loading-attribute-polyfill";
//  class removable function
import classRemove from "./functions/classRemove";
// attrClear function
import attrClear from "./functions/attrClear";
// functions modalWindow
import {
  modalOpen,
  modalClose,
  bodyLock,
  bodyUnlock,
} from "./functions/modalWindow";
// functions btns
import btnsFunc from "./functions/btns";
// functions lazyLoading
import observer from "./functions/lazyLoading";
// functions lazyLoading
import customSelectFunc from "./functions/customSelect";
// functions tabsChange
import tabsChange from "./functions/tabsChange";
import collapsibleFunc from "./functions/collapsible";
// const WOW = require("wowjs");
// window.wow = new wow.WOW();
// window.wow.init();
// import module example (npm i -D jquery)

document.addEventListener("DOMContentLoaded", () => {
  // variable start
  const menuItem = document.querySelectorAll(".menu-link");
  const phoneInput = document.querySelectorAll("input[type=tel]");
  const images = document.querySelectorAll("img");

  const phoneLink = document.querySelectorAll("a[href^='tel']");
  const burgerMenu = document.querySelector(".burger__menu");
  const menu = document.querySelector(".menu-nav");
  const showModals = document.querySelectorAll(".show__modal");
  const modalCloseIcons = document.querySelectorAll(".close__modal");
  const body = document.querySelector("body");

  const breadcrumb = document.querySelector(".breadcrumb");
  // variable end
  btnsFunc();
  customSelectFunc();
  collapsibleFunc();
  tabsChange();
  if (breadcrumb) {
    let lastBreadcrumb = breadcrumb.lastElementChild;

    if (lastBreadcrumb) {
      lastBreadcrumb.addEventListener("click", (e) => {
        e.preventDefault();
      });
    }
  }

  if (showModals.length > 0) {
    showModals.forEach((showModal) => {
      showModal.addEventListener("click", (e) => {
        if (showModal.hasAttribute("href")) {
          const modalName = showModal.getAttribute("href").replace("#", "");
          const currentModal = document.getElementById(modalName);
          modalOpen(currentModal);
          e.preventDefault();
        } else if (showModal.hasAttribute("src")) {
          let currentSrc = showModal.getAttribute("src");
          let currentImage = document.createElement("img");
          const currentModal = document.getElementById("modal__photo");
          const currentModalContent =
            currentModal.querySelector(".modal__content");
          const checkImg = currentModalContent.querySelector("img");
          currentImage.setAttribute("src", currentSrc);

          if (checkImg) {
            checkImg.replaceWith(currentImage);
          } else {
            currentModalContent.appendChild(currentImage);
          }
          modalOpen(currentModal);
        } else if (showModal.hasAttribute("data-src")) {
          let currentSrc = showModal.getAttribute("data-src");
          let currentImage = document.createElement("img");
          const currentModal = document.getElementById("modal__photo");
          const currentModalContent =
            currentModal.querySelector(".modal__content");
          const checkImg = currentModalContent.querySelector("img");
          currentImage.setAttribute("src", currentSrc);

          if (checkImg) {
            checkImg.replaceWith(currentImage);
          } else {
            currentModalContent.appendChild(currentImage);
          }
          modalOpen(currentModal);
        }
      });
    });
  }

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
  let phoneMaskBy = new inputmask({
    mask: "+375-99-999-99-99",
    clearIncomplete: true,
    greedy: false,
  });
  if (menuItem.length > 0) {
    for (let i = 0; i < menuItem.length; i++) {
      const item = menuItem[i];
      item.parentNode.style.zIndex = 100 - i;
      let dorpMenu = item.parentNode.querySelector(".menu-dropdown");
      let arrow = document.createElement("span");
      arrow.classList.add("arrow");
      arrow.classList.add("arrow--menu");
      if (dorpMenu) {
        item.parentNode.appendChild(arrow);

        item.addEventListener("click", (e) => {
          e.preventDefault();
          if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            )
          ) {
            if (e.currentTarget.parentNode.classList.contains("--open")) {
              e.currentTarget.parentNode.classList.remove("--open");
            } else {
              e.currentTarget.parentNode.classList.add("--open");
            }
          }
        });
      }
    }
  }
  // phone link clear white space
  if (phoneLink.length > 0) {
    phoneLink.forEach((link) => {
      attrClear(link, "href", 2);
    });
  }

  if (images.length > 0) {
    images.forEach((img) => {
      attrClear(img, "title", 1);
      attrClear(img, "alt", 1);
      if (img.hasAttribute("data_src")) {
        observer.observe(img);
      }
    });
  }

  // inputmask for phone input
  if (phoneInput.length > 0) {
    phoneInput.forEach((phoneMask) => {
      phoneMaskBy.mask(phoneMask);
    });
  }

  //  burgerMenu function
  if (burgerMenu) {
    burgerMenu.addEventListener("click", function (e) {
      this.classList.toggle("--clicked");
      menu.classList.toggle("--show");
      e.preventDefault;
    });
  }

  // hide menu on scroll
  window.addEventListener("scroll", function () {
    classRemove(".burger__menu.--clicked", "--clicked");
    classRemove(".menu-nav.--show", "--show");
  });
});
