// lazy loading
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const handleImg = (myImg, observer) => {
  myImg.forEach((myImgSingleImg) => {
    // console.log(myImgSingleImg.intersectionRatio);
    if (myImgSingleImg.intersectionRatio > 0) {
      loadingImage(myImgSingleImg.target);
    }
  });
};

const loadingImage = (image) => {
  if (image.hasAttribute("data-lazy-src")) {
    image.src = image.getAttribute("data-lazy-src");
    image.removeAttribute("data-lazy-src");
    image.onload = function () {
      setTimeout(() => {
        image.classList.contains("lazy__image")
          ? image.classList.remove("lazy__image")
          : "";
      }, 500);
    };
  } else if (image.hasAttribute("data-lazy-srcset")) {
    console.assert(image);
    image.srcset = image.getAttribute("data-lazy-srcset");
    image.removeAttribute("data-lazy-srcset");
    image.onload = function () {
      setTimeout(() => {
        image.classList.contains("lazy__image")
          ? image.classList.remove("lazy__image")
          : "";
      }, 500);
    };
  }
};
const observer = new IntersectionObserver(handleImg, options);
export default observer;
