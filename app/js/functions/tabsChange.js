const tabsChange = () => {
  const tabs = document.querySelectorAll(".tab");
  const tabsContent = document.querySelectorAll(".tab__content");
  // tabs
  if (tabs.length > 0) {
    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i];
      tab.setAttribute("data-tab-index", i);

      tab.addEventListener("click", (e) => {
        e.preventDefault();
        const _this = e.currentTarget;
        let currentSection = _this.closest(".section");
        _this.parentNode
          .querySelector(".tab.__active")
          .classList.remove("__active");
        _this.classList.add("__active");
        for (let j = 0; j < tabsContent.length; j++) {
          const tabContent = tabsContent[j];
          tabContent.setAttribute("data-tab-content-index", j);
        }
        const activeTab = currentSection.querySelector(
          ".tab__content.__active"
        );
        const currentTab = document.querySelector(
          `.tab__content[data-tab-content-index='${i}']`
        );
        activeTab.classList.remove("__active");
        activeTab.style.maxHeight = null;
        currentTab.classList.add("__active");
        currentTab.style.maxHeight = currentTab.scrollHeight + "px";
      });
    }
  }
};
export default tabsChange;
