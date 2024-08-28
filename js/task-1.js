const headEl = document.querySelector("head");
const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "./css/task-1.css";
headEl.append(cssLink);

const categoriesItemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItemsEl.length}`);

categoriesItemsEl.forEach(item => {
    const itemHeaderEl = item.querySelector("h2");
    console.log(`Category: ${itemHeaderEl.textContent}`);

    const itemElementsEl = item.querySelectorAll("li");
    console.log(`Elements: ${itemElementsEl.length}`);
});