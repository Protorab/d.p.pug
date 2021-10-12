let unlock = true;
const timeout = 200;
const lockPadding = document.querySelectorAll(".lock-padding");
const body = document.querySelector("body");

export const modalOpen = (currentModal) => {
  if (currentModal && unlock) {
    const modalOpen = document.querySelector(".modal.__open");
    if (modalOpen) {
      modalClose(modalOpen, false);
    } else {
      bodyLock();
    }
    currentModal.classList.add("__open");
    currentModal.addEventListener("click", (e) => {
      const _this = e.currentTarget;
      if (!e.target.closest(".modal__content")) {
        modalClose(e.target.closest(".modal"));
      }
    });
  }
};

export const modalClose = (modalOpen, doUnlock = true) => {
  if (unlock) {
    modalOpen.classList.remove("__open");
    if (doUnlock) {
      bodyUnlock();
    }
  }
};

export const bodyLock = () => {
  const lockPaddingValue =
    window.innerWidth - document.querySelector("body").offsetWidth + "px";
  if (lockPadding.length > 0) {
    lockPadding.forEach((el) => {
      el.style.paddingRight = lockPaddingValue;
    });
  }

  body.style.paddingRight = lockPaddingValue;
  body.classList.add("__fixed");

  unlock = false;
  setTimeout(() => {
    unlock = true;
  }, timeout);
};
export const bodyUnlock = () => {
  setTimeout(() => {
    if (lockPadding.length > 0) {
      lockPadding.forEach((el) => {
        el.style.paddingRight = "0px";
      });
    }
    body.style.paddingRight = "0px";
    body.classList.remove("__fixed");
  }, timeout);
  unlock = false;
  setTimeout(() => {
    unlock = true;
  }, timeout);
};
