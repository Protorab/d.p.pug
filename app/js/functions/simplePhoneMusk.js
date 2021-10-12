const simplePhoneMusk = () => {
  let phoneInputs = document.querySelectorAll("input[type=tel]");
  const handleInput = (e) => {
    e.target.value = phoneMask(e.target.value);
    // e.target.value = /^(\+\d{3}\s)?\(?\d{2}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
  };
  const phoneMask = (phone) => {
    return phone
      .replace(/\D/g, "")
      .replace(/^(\d)/, "($1")
      .replace(/^(\(\d{2})(\d)/, "$1) $2")
      .replace(/(\d{3})(\d{1,5})/, "$1-$2")
      .replace(/(-\d{2})(\d{1,5})/, "$1-$2")
      .replace(/(-\d{2})(\d{1,5})/, "$1");
  };
  phoneInputs.forEach((input) => {
    input.addEventListener("input", handleInput, false);

    input.addEventListener("blur", (e) => {
      let _this = e.currentTarget;
      let checkVal = _this.value.replace(/\D/g, "");
      checkVal.length < 9 ? (_this.value = "") : "";
    });
  });
};
export default simplePhoneMusk;
