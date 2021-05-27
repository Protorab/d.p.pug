import blink from "./blink";
const btnsFunc = () => {
  const btns = document.querySelectorAll(".btn");
  if (btns.length > 0) {
    btns.forEach((btn) => {
      btn.addEventListener("mouseenter", (e) => {
        blink(e, "1500");
      });
      btn.addEventListener("click", (e) => {
        blink(e, "1500");
      });
    });
  }
};

export default btnsFunc;
