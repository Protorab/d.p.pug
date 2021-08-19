const setHeight = (object, padObject) => {
  let topElement = document.querySelector(object);
  let bottomElement = document.querySelector(padObject);
  let vhSize;
  let wWidth = window.innerWidth;
  wWidth <= 1024 ? (vhSize = 50) : (vhSize = 100);
  if (topElement) {
    let getHeight = topElement.offsetHeight + "px";
    bottomElement.style.height = `calc(${vhSize}vh - ${getHeight})`;
  }
};
export default setHeight;
