import { modalOpen, modalClose, bodyLock, bodyUnlock } from "./modalWindow";
const showModalInit = () => {
  const showModals = document.querySelectorAll(".show-modal");
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
};
export default showModalInit;
