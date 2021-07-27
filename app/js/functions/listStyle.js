export const listStyle = () => {
  let ul = document.querySelectorAll("ul");
  if (ul) {
    ul.forEach(function (item) {
      let listClass = item.style.listStyleType;
      listClass ? item.classList.add(`list__type-${listClass}`) : "";
    });
  }
};
