// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//   подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
const inputEl = document.querySelector("#name-input");
const inputValueEl = inputEl.value;
const nameEl = document.querySelector("#name-output");

inputEl.addEventListener(`input`, (event) => {
  if (event.currentTarget.value !== "") {
    nameEl.textContent = event.currentTarget.value;
  } else if (event.currentTarget.value === "") {
    nameEl.textContent = `незнакомец`;
  }
});
