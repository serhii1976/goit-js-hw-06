const rangeInputEl = document.querySelector("#font-size-control");
const textFontSize = document.querySelector("#text");

rangeInputEl.addEventListener("input", (event) => {
  textFontSize.style.fontSize = `${event.currentTarget.value}px`;
});
