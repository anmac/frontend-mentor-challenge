const form = document.querySelector(".form");
const input = document.querySelector(".input");
let submitted = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!submitted) processForm(input.value);
});

input.addEventListener("input", () => {
  form.classList.remove("error");
});

function processForm(input) {
  if (validateEmail(input)) {
    form.classList.add("success");

    const input = form.querySelector(".input");
    input.setAttribute("disabled", "");

    const button = form.querySelector(".button");
    button.setAttribute("disabled", "");

    const icon = form.querySelector(".button__icon");
    icon.setAttribute("src", "./images/icon-success.svg");

    submitted = true;
  } else {
    form.classList.add("error");
  }
}

function validateEmail(input) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;
  const clearInput = input.trim().toLowerCase();
  return clearInput.match(regex);
}
