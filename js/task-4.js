// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const counterValue = document.querySelector("#value");
let counterEl = counterValue.textContent;
counterEl = 0;
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

incrementBtn.addEventListener("click", () => {
  counterEl += 1;
  counterValue.textContent = counterEl;
});
decrementBtn.addEventListener("click", () => {
  counterEl -= 1;
  counterValue.textContent = counterEl;
});
