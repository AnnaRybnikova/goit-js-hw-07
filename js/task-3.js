const headEl = document.querySelector("head");
const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "./css/task-3.css";
headEl.append(cssLink);

const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", event => {
    const inputValue = event.currentTarget.value.trim();

    outputEl.textContent = inputValue ? inputValue : "Anonymous";
})