const numberOfCategories = categories.querySelectorAll("ul").length;
console.log('Number of categories:', numberOfCategories);

const listItem = document.querySelectorAll('.item');


listItem.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});
