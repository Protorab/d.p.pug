const stickyHeader = () => {
  let header = document.querySelector("#header");
  let topScroll;
  header
    ? (window.innerWidth <= 800 ? (topScroll = 10) : (topScroll = 0),
      window.pageYOffset > topScroll
        ? (header.classList.add("__sticky"),
          scrollBtn.classList.add("__sticky"))
        : (header.classList.remove("__sticky"),
          scrollBtn.classList.remove("__sticky")))
    : "";
};
export default stickyHeader;
