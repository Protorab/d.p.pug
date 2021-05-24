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
  image.src = image.getAttribute("data_src");
};
const observer = new IntersectionObserver(handleImg, options);
export default observer;
