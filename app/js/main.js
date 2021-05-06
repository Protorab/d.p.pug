import inputmask from "inputmask";
import loadingAttributePolyfill from "loading-attribute-polyfill";
//  class removable function
import classRemove from "./functions/classRemove";
// attrClear function
import attrClear from "./functions/attrClear";

import {
  modalOpen,
  modalClose,
  bodyLock,
  bodyUnlock,
} from "./functions/modalWinfow";
// const WOW = require("wowjs");
// window.wow = new wow.WOW();
// window.wow.init();
// import module example (npm i -D jquery)

document.addEventListener("DOMContentLoaded", () => {
  // variable start
  const menuItem = document.querySelectorAll(".menu-link");
  const phoneInput = document.querySelectorAll("input[type=tel]");
  const images = document.querySelectorAll("img");
  const tabs = document.querySelectorAll(".tab");
  const tabsContent = document.querySelectorAll(".tab__content");
  const phoneLink = document.querySelectorAll("a[href^='tel']");
  const burgerMenu = document.querySelector(".burger__menu");
  const menu = document.querySelector(".menu-nav");
  const showModals = document.querySelectorAll(".show__modal");
  const modalCloseIcons = document.querySelectorAll(".close__modal");
  const body = document.querySelector("body");
  const accordionItemTitles = document.querySelectorAll(".accordion-item");
  const customSelect = document.querySelectorAll(".custom-select-wrapper");
  const btns = document.querySelectorAll(".btn");

  // variable end
  if (btns.length > 0) {
    btns.forEach((btn) => {
      btn.addEventListener("mouseover", (e) => {
        const _this = e.currentTarget;
        const span = document.createElement("span");
        // _this.appendChild(span);
        // span.style.bottom = `-50%`;
        // span.style.left = `-50%`;
        // console.log(e);
        // setTimeout(() => {
        //   _this.removeChild(span);
        // }, 300);
      });
    });
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
          const currentModalContent = currentModal.querySelector(
            ".modal__content"
          );
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

  for (let i = 0; i < accordionItemTitles.length; i++) {
    accordionItemTitles[i].addEventListener("click", function (event) {
      event.preventDefault();
      event.target.classList.toggle("active");
      let accordionItemContent = event.target.nextElementSibling;

      if (!accordionItemContent.classList.contains("active")) {
        accordionItemContent.classList.add("active");
        accordionItemContent.style.height = "auto";
        let height = accordionItemContent.clientHeight + "px";
        accordionItemContent.style.height = "0px";

        setTimeout(function () {
          accordionItemContent.style.height = height;
        }, 0);
      } else {
        accordionItemContent.style.height = "0px";

        accordionItemContent.addEventListener(
          "transitionend",
          function () {
            accordionItemContent.classList.remove("active");
          },
          {
            once: true,
          }
        );
      }
    });
  }

  // custom Select
  if (customSelect.length > 0) {
    customSelect.forEach((customSelect) => {
      customSelect.addEventListener("click", function () {
        this.querySelector(".custom-select").classList.toggle("open");
      });
      for (const customOption of document.querySelectorAll(".custom-option")) {
        customOption.addEventListener("click", function () {
          if (!this.classList.contains("selected")) {
            let customInput = this.parentNode.parentNode.querySelector(
              ".custom-select-input"
            );
            let inputOption = customInput.querySelector("option");
            this.parentNode
              .querySelector(".custom-option.selected")
              .classList.remove("selected");
            this.classList.add("selected");
            this.closest(".custom-select").querySelector(
              ".custom-select__trigger span"
            ).textContent = this.textContent;
            this.dataset.value !== "def"
              ? (inputOption.setAttribute("value", this.textContent),
                inputOption.setAttribute("selected", true),
                (inputOption.innerHTML = this.textContent))
              : (inputOption.setAttribute("value", ""),
                inputOption.removeAttribute("selected"),
                (inputOption.innerHTML = ""));
          }
        });
      }
      window.addEventListener("click", function (e) {
        const select = document.querySelectorAll(".custom-select");
        select.forEach((item) => {
          if (!item.contains(e.target)) {
            item.classList.remove("open");
          }
        });
      });
    });
  }

  // lazy loading
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const handleImg = (myImg, observer) => {
    myImg.forEach((myImgSingleImg) => {
      // console.log(myImgSingleImg.intersectionRatio);
      if (myImgSingleImg.intersectionRatio > 0) {
        loadingImage(myImgSingleImg.target);
      }
    });
  };

  const loadingImage = (image) => {
    image.src = image.getAttribute("data_src");
  };
  const observer = new IntersectionObserver(handleImg, options);
  images.forEach((img) => {
    if (img.hasAttribute("data_src")) {
      observer.observe(img);
    }
  });

  // tabs
  if (tabs.length > 0) {
    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i];
      tab.setAttribute("data-index", i);

      tab.addEventListener("click", (e) => {
        e.preventDefault();
        e.currentTarget.parentNode
          .querySelector(".tab.--active")
          .classList.remove("--active");
        e.currentTarget.classList.add("--active");
        for (let j = 0; j < tabsContent.length; j++) {
          const tabContent = tabsContent[j];
          tabContent.setAttribute("data-index", j);
          tabContent.classList.remove("--active");
        }
        let currentTab = document.querySelector(
          `.tab__content[data-index='${i}']`
        );
        currentTab.classList.add("--active");
        // popularSlider.forEach((slider) => {
        //   slider.update();
        // });
      });
    }
  }
});
