// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//   подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
const inputBtn = document.querySelector(".js-input-button");
const inputEl = document.querySelector("#name-input");
const inputValueEl = inputEl.value;
const nameEl = document.querySelector("#name-output");

inputBtn.addEventListener("click", () => {
  if (inputValueEl === !undefined) {
    nameEl.textContent = inputValueEl;
  }
});
