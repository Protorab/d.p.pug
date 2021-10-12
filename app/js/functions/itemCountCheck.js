const itemCountCheck = () => {
  let moreBtn = document.querySelector("#get-more");
  let items = moreBtn.parentNode.querySelectorAll(".item-count");
  let mobCount = moreBtn.dataset.mobCount;
  let desktopCount = moreBtn.dataset.desktopCount;
  let defText = moreBtn.dataset.defText;
  let altText = moreBtn.dataset.altText;
  var itemsCounter = window.innerWidth <= 800 ? mobCount : desktopCount;
  const hideRecipeStep = () => {
    for (let i = 0; i < items.length; i++) {
      const element = items[i];
      element.classList.add("__hide");
      element.style.display = "none";
    }
    for (let j = 0; j < itemsCounter; j++) {
      const recipeStep = items[j];
      recipeStep.style.display = "flex";
    }
  };

  const showRecipeStep = () => {
    for (let i = 0; i < items.length; i++) {
      const element = items[i];
      element.style.display = "flex";
      element.classList.contains("scroll")
        ? (element.classList.remove("scroll"),
          element.classList.add("__animated"))
        : "";
    }
  };

  if (items && items.length > itemsCounter) {
    hideRecipeStep();

    if (moreBtn) {
      moreBtn.style.display = "flex";
      !moreBtn.classList.contains("animate")
        ? moreBtn.classList.add("animate")
        : "";
      !moreBtn.classList.contains("scroll")
        ? moreBtn.classList.add("scroll")
        : "";
    }
  } else {
    if (moreBtn) {
      moreBtn.style.display = "none";
      moreBtn.classList.contains("animate")
        ? moreBtn.classList.remove("animate")
        : "";
      moreBtn.classList.contains("scroll")
        ? moreBtn.classList.remove("scroll")
        : "";
    }
  }

  if (moreBtn) {
    moreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let _this = e.currentTarget;
      _this.classList.contains("__clicked")
        ? (_this.classList.remove("__clicked"),
          (_this.textContent = defText),
          hideRecipeStep())
        : (_this.classList.add("__clicked"),
          (_this.textContent = altText),
          showRecipeStep());
    });
  }
};
export default itemCountCheck;
