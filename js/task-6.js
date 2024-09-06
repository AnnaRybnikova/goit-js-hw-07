const headEl = document.querySelector("head");
const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "./css/task-6.css";
headEl.append(cssLink);

const inputEl = document.querySelector("input");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

createBtnEl.addEventListener("click", event => {
  destroyBoxes()
  let inputElValue = inputEl.value;
  if (inputElValue < 1 || inputElValue > 100) {
    return;
  }
  createBoxes(inputElValue);
  inputEl.value = "";
})

destroyBtnEl.addEventListener("click", () => destroyBoxes())

function createBoxes(amount) {
  let divSize = 30;
  let boxesArray = [];
  for (let i = 1; i <= amount; i++) {
    let divEl = document.createElement("div");
    if (i !== 1) {
      divSize += 10;
    }
    divEl.style.height = toPixels(divSize);
    divEl.style.width = toPixels(divSize);
    divEl.style.backgroundColor = getRandomHexColor();

    boxesArray.push(divEl);
  }

  boxesEl.append(...boxesArray);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const toPixels = (numb) => `${numb}px`;