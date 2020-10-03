// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", (event) => {
  textEl.style.fontSize = event.currentTarget.value + "px";
});
// inputEl.setAttribute("min", "0");
// inputEl.setAttribute("max", "5");
// inputEl.setAttribute("step", "1");
// inputEl.setAttribute("value", "10");

// inputEl.addEventListener("input", () => {
//   inputEl.value <= inputEl.max || inputEl.value >= inputEl.min;

//   if (Number(inputEl.value) === 0) {
//     textEl.classList.add("class_1");
//     textEl.classList.remove(
//       "class_2",
//       "class_3",
//       "class_4",
//       "class_5",
//       "class_6"
//     );
//   }
//   if (Number(inputEl.value) === 1) {
//     textEl.classList.add("class_2");
//     textEl.classList.remove(
//       "class_1",
//       "class_3",
//       "class_4",
//       "class_5",
//       "class_6"
//     );
//   }
//   if (Number(inputEl.value) === 2) {
//     textEl.classList.add("class_3");
//     textEl.classList.remove(
//       "class_1",
//       "class_2",
//       "class_4",
//       "class_5",
//       "class_6"
//     );
//   }
//   if (Number(inputEl.value) === 3) {
//     textEl.classList.add("class_4");
//     textEl.classList.remove(
//       "class_1",
//       "class_2",
//       "class_3",
//       "class_5",
//       "class_6"
//     );
//   }
//   if (Number(inputEl.value) === 4) {
//     textEl.classList.add("class_5");
//     textEl.classList.remove(
//       "class_1",
//       "class_2",
//       "class_3",
//       "class_4",
//       "class_6"
//     );
//   }
//   if (Number(inputEl.value) === 5) {
//     textEl.classList.add("class_6");
//     textEl.classList.remove(
//       "class_1",
//       "class_2",
//       "class_3",
//       "class_4",
//       "class_5"
//     );
//   }
// });
