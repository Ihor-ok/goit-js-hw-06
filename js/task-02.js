const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


const ingredientsTitle = document.querySelector("#ingredients")

ingredients.forEach(element => {
    const elementList = document.createElement("li");
    elementList.textContent = element;
    elementList.classList.add('item');
    ingredientsTitle.append(elementList);
});


console.log(ingredientsTitle);

