// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const controlsEl = document.querySelector("#controls");
const inputEl = document.querySelector("#controls > input");
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxesEl = document.querySelector("#boxes");

renderBtn.addEventListener("click", () => {
  const createBoxes = (amount) => {
    const w = 30;
    const h = 30;

    for (let i = 0; i < amount; i += 1) {
      const divEl = document.createElement("div");
      divEl.style.width = `${w + i * 10}px`;
      divEl.style.height = `${h + i * 10}px`;
      divEl.style.backgroundColor = randomColor();
      function randomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${b}, ${g})`;
      }

      boxesEl.appendChild(divEl);
    }
  };
  createBoxes(Number(inputEl.value));
});

destroyBtn.addEventListener("click", () => {
  const destroyBoxes = () => {
    while (boxesEl.firstChild) {
      boxesEl.firstChild.remove("div");
    }
  };
  destroyBoxes();
});
