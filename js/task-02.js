const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const ingredientPotatoes = document.createElement("li");
ingredientPotatoes.classList.add("item");
ingredientPotatoes.textContent = "Potatoes";

const ingredientMushrooms = document.createElement("li");
ingredientMushrooms.classList.add("item");
ingredientMushrooms.textContent = "Mushrooms";

const ingredientGarlic = document.createElement("li");
ingredientGarlic.classList.add("item");
ingredientGarlic.textContent = "Garlic";

const ingredientTomatos = document.createElement("li");
ingredientTomatos.classList.add("item");
ingredientTomatos.textContent = "Tomatos";

const ingredientHerbs = document.createElement("li");
ingredientHerbs.classList.add("item");
ingredientHerbs.textContent = "Herbs";

const ingredientCondiments = document.createElement("li");
ingredientCondiments.classList.add("item");
ingredientCondiments.textContent = "Condiments";

list.prepend(
  ingredientPotatoes,
  ingredientMushrooms,
  ingredientGarlic,
  ingredientTomatos,
  ingredientHerbs,
  ingredientCondiments
);

console.log(ingredientPotatoes);
console.log(ingredientMushrooms);
console.log(ingredientGarlic);
console.log(ingredientTomatos);
console.log(ingredientHerbs);
console.log(ingredientCondiments);
