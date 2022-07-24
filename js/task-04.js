let counterValue = 0;
const counter = document.querySelector("#counter");
const buttonDecrement = counter.firstElementChild;
const buttonIncrement = counter.lastElementChild;
const spanValue = counter.querySelector("#value");

buttonDecrement.addEventListener("click", () => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
});

buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
});
