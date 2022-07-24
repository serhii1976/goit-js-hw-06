function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");
const bodyEl = document.querySelector("body");

const onButtonClick = () => {
  textEl.textContent = ` ${getRandomHexColor()}`;
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
};
buttonEl.addEventListener("click", onButtonClick);
