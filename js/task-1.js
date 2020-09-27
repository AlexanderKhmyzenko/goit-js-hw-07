// Напиши скрипт, который :
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет
// в консоль текст заголовка элемента(тега h2) и количество элементов в категории(всех вложенных в него элементов li).

const listItemsEl = document.querySelectorAll(".item");
console.log(`В списке ${listItemsEl.length} категории.`);

listItemsEl.forEach((itemEl) => {
  const nameCategory = itemEl.querySelector(`h2`);
  const amountElementsCategory = itemEl.querySelectorAll("li");
  console.log(`Категория: ${nameCategory.textContent}`);
  console.log(`Количество элементов: ${amountElementsCategory.length}`);
});
