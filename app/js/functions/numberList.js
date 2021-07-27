export const numberList = () => {
  let numberList = document.querySelectorAll("ol");
  if (numberList) {
    numberList.forEach((list) => {
      let startNumber = list.start;
      console.log(startNumber);
      let starter = 0;
      startNumber ? (starter = startNumber) : (starter = 0);
      let listItems = list.querySelectorAll("li");

      for (let i = 0; i < listItems.length; i++) {
        const listItem = listItems[i];
        listItem.insertAdjacentHTML(
          "afterbegin",
          `<span class="item-number">${startNumber++}</span>`
        );
      }
    });
  }
};
