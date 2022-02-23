const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const arrIngredients = [];

for (let i = 0; i < ingredients.length; i++) {
  const ingredient = document.createElement("li");
  ingredient.classList.add("item");
  ingredient.textContent = ingredients[i];

  arrIngredients.push(ingredient);
  console.log(ingredient);
}
console.log(arrIngredients);
list.prepend(...arrIngredients);
