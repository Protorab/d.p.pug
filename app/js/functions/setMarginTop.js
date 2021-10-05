const setMarginTop = (object, padObject) => {
  let topElement = document.querySelector(object);
  let bottomElement = document.querySelector(padObject);
  if (topElement) {
    let headerHeight = topElement.offsetHeight + "px";
    bottomElement.style.marginTop = headerHeight;
  }
};
export default setMarginTop;
