const headEl = document.querySelector("head");
const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "./css/task-4.css";
headEl.append(cssLink);

const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", event => {
    event.preventDefault();
    const formElements = event.target.elements;

    if (!formElements.email.value || !formElements.password.value) {
        window.alert('All form fields must be filled in');
    }
    else {
        console.log({
            email: formElements.email.value,
            password: formElements.password.value,
        })
    }

    formElements.email.value = "";
    formElements.password.value = "";
})