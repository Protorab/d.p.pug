const simplePhoneMusk = () => {
  let phoneInputs = document.querySelectorAll("input[type=tel]");
  const handleInput = (e) => {
    e.target.value = phoneMask(e.target.value);
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
      _this.value.length < 14 ? (_this.value = "") : "";
    });
  });
};
export default simplePhoneMusk;
