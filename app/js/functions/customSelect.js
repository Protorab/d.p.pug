const customSelectFunc = () => {
  const customSelect = document.querySelectorAll(".custom-select-wrapper");
  if (customSelect.length > 0) {
    customSelect.forEach((customSelect) => {
      customSelect.addEventListener("click", function () {
        this.querySelector(".custom-select").classList.toggle("open");
      });
      for (const customOption of document.querySelectorAll(".custom-option")) {
        customOption.addEventListener("click", function () {
          if (!this.classList.contains("selected")) {
            let customInput = this.parentNode.parentNode.querySelector(
              ".custom-select-input"
            );
            let inputOption = customInput.querySelector("option");
            this.parentNode
              .querySelector(".custom-option.selected")
              .classList.remove("selected");
            this.classList.add("selected");
            this.closest(".custom-select").querySelector(
              ".custom-select__trigger span"
            ).textContent = this.textContent;
            this.dataset.value !== "def"
              ? (inputOption.setAttribute("value", this.textContent),
                inputOption.setAttribute("selected", true),
                (inputOption.innerHTML = this.textContent))
              : (inputOption.setAttribute("value", ""),
                inputOption.removeAttribute("selected"),
                (inputOption.innerHTML = ""));
          }
        });
      }
      window.addEventListener("click", function (e) {
        const select = document.querySelectorAll(".custom-select");
        select.forEach((item) => {
          if (!item.contains(e.target)) {
            item.classList.remove("open");
          }
        });
      });
    });
  }
};
export default customSelectFunc;
