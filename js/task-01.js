const numberOfCategories = document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${numberOfCategories}`);

const firstTitle = document.querySelector(".item:first-child h2").textContent;
console.log(`Category: ${firstTitle}`);
const numberFirstTitle = document.querySelectorAll(
  ".item:first-child li"
).length;
console.log(`Elements: ${numberFirstTitle}`);

const averageTitle = document.querySelector(
  ".item:nth-child(2) h2"
).textContent;
console.log(`Category: ${averageTitle}`);
const numberAverageTitle = document.querySelectorAll(
  ".item:nth-child(2) li"
).length;
console.log(`Elements: ${numberAverageTitle}`);

const lastTitle = document.querySelector(".item:last-child h2").textContent;
console.log(`Category: ${lastTitle}`);
const numberLastTitle = document.querySelectorAll(".item:last-child li").length;
console.log(`Elements: ${numberLastTitle}`);
