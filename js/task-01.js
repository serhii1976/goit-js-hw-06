const categoriesItemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItemsEl.length}`);
console.log("");

categoriesItemsEl.forEach((categoriesItemEl) => {
  console.log(`Category: ${categoriesItemEl.firstElementChild.textContent}`);
  console.log(`Elements: ${categoriesItemEl.lastElementChild.children.length}`);
});
