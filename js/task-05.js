const inputTextEl = document.querySelector("#name-input");
const outputTextEl = document.querySelector("#name-output");
inputTextEl.addEventListener("input", (event) => {
  event.currentTarget.value !== ""
    ? (outputTextEl.textContent = event.currentTarget.value)
    : (outputTextEl.textContent = "Anonymous");
});

// const inputEl = (event) => {
//   event.currentTarget.value !== ""
//     ? (outputTextEl.textContent = event.currentTarget.value)
//     : (outputTextEl.textContent = "Anonymous");
// };
// inputTextEl.addEventListener("input", inputEl);
