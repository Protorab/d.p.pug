const blink = (e, time) => {
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
  }, time);
};
export default blink;
