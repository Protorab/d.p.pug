function isVisible(elem) {
  let coords = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;
  // верхний край элемента виден?
  let topVisible = coords.top > 0 && coords.top < windowHeight;
  // нижний край элемента виден?
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
  return topVisible || bottomVisible;
}
function simpleAnimate() {
  for (let element of document.querySelectorAll(".animate.scroll")) {
    if (isVisible(element)) {
      element.classList.add("__animated");
    }
  }
}
export default simpleAnimate;
