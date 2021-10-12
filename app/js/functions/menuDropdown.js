const menuDropdown = () => {
  let menuItems = document.querySelectorAll(".menu__link");
  if (menuItems.length > 0) {
    for (let i = 0; i < menuItems.length; i++) {
      const item = menuItems[i];
      item.parentNode.style.zIndex = 100 - i;
      let dorpMenu = item.parentNode.querySelector(".menu__dropdown");
      let arrow = document.createElement("span");
      arrow.classList.add("arrow");
      arrow.classList.add("arrow-menu");
      if (dorpMenu) {
        item.parentNode.appendChild(arrow);

        item.addEventListener("click", (e) => {
          e.preventDefault();
          if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            )
          ) {
            if (e.currentTarget.parentNode.classList.contains("__open")) {
              e.currentTarget.parentNode.classList.remove("__open");
            } else {
              e.currentTarget.parentNode.classList.add("__open");
            }
          }
        });
      }
    }
  }
};
export default menuDropdown;
