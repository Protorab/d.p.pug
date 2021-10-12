import inputmask from "inputmask";
const setBelarusPhoneMask = () => {
  // set Belarus phone mask
  let phoneInputs = document.querySelectorAll("input[type=tel]");

  let phoneMaskBy = new inputmask({
    mask: "+375-99-999-99-99",
    clearIncomplete: true,
    greedy: false,
  });

  // inputmask for phone input
  if (phoneInputs.length > 0) {
    phoneInputs.forEach((input) => {
      phoneMaskBy.mask(input);
    });
  }
};
export default setBelarusPhoneMask;
