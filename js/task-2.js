// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const listEl = document.querySelector("#ingredients");

const addItemEl = (foods) => {
  return foods.map((food) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = food;
    listEl.appendChild(itemEl);
    return listEl;
  });
};
addItemEl(ingredients);
console.log(listEl);
