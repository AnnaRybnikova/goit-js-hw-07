const bodyEl = document.querySelector("body");
const colorSpanEl = document.querySelector(".color");
const changeBtnEl = document.querySelector(".change-color");

changeBtnEl.addEventListener("click", event => {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorSpanEl.textContent = randomColor;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}