const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// const ingredientsListEl = document.querySelector("#ingredients");
// const listEl = [];
// ingredients.forEach((ingredient) => {
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = ingredient;
//   listItemEl.classList.add("item");
//   listEl.push(listItemEl);
// });

// ingredientsListEl.append(...listEl);

// --------------- MAP

// const ingredientsListEl = document.querySelector("#ingredients");
// const listEl = ingredients.map((ingredient) => {
//   const listItemEl = document.createElement("li");
//   listItemEl.textContent = ingredient;
//   listItemEl.classList.add("item");
//   return listItemEl;
// });
// console.log(listEl);
// ingredientsListEl.append(...listEl);

// ---------------- MAP + FUNCTION

const ingredientsListEl = document.querySelector("#ingredients");

const makeItemLiEl = (ingredients) => {
  return ingredients.map((ingredient) => {
    const listItemEl = document.createElement("li");
    listItemEl.textContent = ingredient;
    listItemEl.classList.add("item");
    return listItemEl;
  });
};
ingredientsListEl.append(...makeItemLiEl(ingredients));
