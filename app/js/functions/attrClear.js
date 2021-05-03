const attrClear = (item, attr, switcher, subStr, newSubStr) => {
  let str = item.getAttribute(attr);

  if (str) {
    switch (switcher) {
      case 1:
        item.setAttribute(attr, str.replace(/<\/?[^>]+(>|$)/g, ""));
        break;
      case 2:
        item.setAttribute(attr, str.replace(/\s+/g, ""));
        break;
      case 3:
        // remove sub strung from string
        item.setAttribute(attr, str.replace(subStr, ""));
        break;
      case 4:
        // remove sub strung from string
        item.setAttribute(attr, str.replace(subStr, newSubStr));
        break;
      default:
        break;
    }
  }
};
export default attrClear;
