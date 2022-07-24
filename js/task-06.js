const inputEl = document.querySelector("#validation-input");
const dataLengthEl = inputEl.getAttribute("data-length");

const onInputBlur = () => {
  inputEl.classList.add("valid");
  inputEl.classList.add("invalid");
  Number(dataLengthEl) === inputEl.value.length
    ? inputEl.classList.remove("invalid")
    : inputEl.classList.remove("valid");
  if (inputEl.value.length === 0) {
    inputEl.classList.remove("invalid");
  }
};
inputEl.addEventListener("blur", onInputBlur);
