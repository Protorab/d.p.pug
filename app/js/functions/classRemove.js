const classRemove = (element, removeClass) => {
  const elementClass = document.querySelector("" + element + "");
  if (elementClass) {
    elementClass.classList.remove(removeClass);
  }
};
export default classRemove;
