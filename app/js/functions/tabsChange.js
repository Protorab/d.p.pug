const tabsChange = () => {
  const tabs = document.querySelectorAll(".tab");
  const tabsContent = document.querySelectorAll(".tab__content");
  // tabs
  if (tabs.length > 0) {
    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i];
      tab.setAttribute("data-index", i);

      tab.addEventListener("click", (e) => {
        const _this = e.currentTarget;
        let currentSection = _this.closest(".section");
        e.preventDefault();
        _this.parentNode
          .querySelector(".tab.--active")
          .classList.remove("--active");
        _this.classList.add("--active");
        for (let j = 0; j < tabsContent.length; j++) {
          const tabContent = tabsContent[j];
          tabContent.setAttribute("data-index", j);
        }
        const activeTab = currentSection.querySelector(
          ".tab__content.--active"
        );
        const currentTab = document.querySelector(
          `.tab__content[data-index='${i}']`
        );
        activeTab.classList.remove("--active");
        activeTab.style.maxHeight = null;
        currentTab.classList.add("--active");
        currentTab.style.maxHeight = currentTab.scrollHeight + "px";
      });
    }
  }
};
export default tabsChange;
