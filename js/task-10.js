function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputEl: document.querySelector("input"),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  container: document.querySelector("#boxes"),
};

function onInputChange(event) {
  let amount = event.currentTarget.value;
  return amount;
}
// console.log(amount);

let boxesArr = [];
function createBoxes(amount) {
  console.log(amount);
  for (let i = 0; i < amount; i += 1) {
    const divSize = 30;
    let growingSize = divSize + i * 10;
    const boxItem = `<div style="width:${growingSize}px;
      height:${growingSize}px; background-color:${getRandomHexColor()}" ></div>`;
    boxesArr.push(boxItem);
  }
  boxesArr.join("");

  console.log(boxesArr);
  return boxesArr;
}
refs.container.insertAdjacentHTML("afterbegin", createBoxes());
console.log(boxesArr);

const destroyBoxes = () => {
  refs.container.innerHTML = "";
};
console.log(refs.inputEl.addEventListener("input", onInputChange));
// refs.inputEl.addEventListener("input", onInputChange);
refs.buttonCreate.addEventListener("click", createBoxes);
refs.buttonDestroy.addEventListener("click", destroyBoxes);

// for (let i = 0; i < amount; i += 1) {
//   const divSize = 30;
//   let growingSize = divSize + i * 10;
//   const boxItem = `<div style="width:${growingSize}px;
//     height:${growingSize}px; background-color:${setRGB()}" ></div>`;
//   boxesArr.push(boxItem);
// }
