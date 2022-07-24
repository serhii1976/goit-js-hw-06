const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const makeGalleryImages = (images) => {
  return images
    .map((image) => {
      const itemEl = `<li class="gallery__item"><img class="gallery__img" src="${image.url}" alt="${image.alt}"/></li>`;
      return itemEl;
    })
    .join("");
};
// console.log(makeGalleryImages(images));
const galleryListEl = document.querySelector(".gallery");
galleryListEl.insertAdjacentHTML("afterbegin", makeGalleryImages(images));

// const makeGalleryImages = (images) => {
//   return images.map((image) => {
//     const listItemEl = document.createElement("li");
//     const imageEl = document.createElement("img");
//     imageEl.src = image.url;
//     imageEl.alt = image.alt;
//     listItemEl.appendChild(imageEl);
//     console.log(listItemEl);
//     return listItemEl;
//   });
// };
// const elements = makeGalleryImages(images);
// const galleryListEl = document.querySelector(".gallery");
// galleryListEl.append(...elements);
