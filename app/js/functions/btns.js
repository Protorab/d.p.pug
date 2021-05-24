const btnsFunc = () => {
  const btns = document.querySelectorAll(".btn");
  if (btns.length > 0) {
    btns.forEach((btn) => {
      btn.addEventListener("mouseenter", (e) => {
        const _this = e.currentTarget;
        let targetCoords = e.currentTarget.getBoundingClientRect();
        const span = document.createElement("span");
        _this.appendChild(span);
        let yCoord = e.clientY - targetCoords.top;
        let xCoord = e.clientX - targetCoords.left;
        span.style.top = `${yCoord}px`;
        span.style.left = `${xCoord}px`;
        setTimeout(() => {
          _this.removeChild(span);
        }, 1500);
      });
      btn.addEventListener("click", (e) => {
        const _this = e.currentTarget;
        const span = document.createElement("span");
        let targetCoords = e.currentTarget.getBoundingClientRect();
        _this.appendChild(span);
        let yCoord = e.clientY - targetCoords.top;
        let xCoord = e.clientX - targetCoords.left;
        span.style.top = `${yCoord}px`;
        span.style.left = `${xCoord}px`;
        setTimeout(() => {
          _this.removeChild(span);
        }, 1500);
      });
    });
  }
};
export default btnsFunc;
