const numberOfCategories = document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${numberOfCategories}`);

const arrItem = [...document.querySelectorAll("li.item")];
const arrlist = [...document.querySelectorAll("li.item ul")];

arrItem.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
