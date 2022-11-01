const form = document.getElementById("form");
const inputs = form.querySelectorAll(".input");
let submitted = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!submitted) processForm();
});

inputs.forEach((input) =>
  input.addEventListener("input", () => {
    if (!submitted)
      input.parentElement.classList.remove("empty", "error", "success");
  })
);

function processForm() {
  const formData = new FormData(form);
  for (const [key, value] of formData) {
    const input = form.querySelector(`[name=${key}]`);
    const block = input.parentElement;
    processInputClasses(key, value, block);
  }
  checkAllComplete() && closeForm();
}

function processInputClasses(key, value, block) {
  if (isEmpty(value)) {
    block.classList.add("empty");
  } else {
    const func =
      key === "email"
        ? isEmailValid
        : key === "password"
        ? isPasswordValid
        : Boolean;
    func(value) ? block.classList.add("success") : block.classList.add("error");
  }
}

function checkAllComplete() {
  return [...inputs].every((input) =>
    [...input.parentElement.classList].includes("success")
  );
}

function closeForm() {
  inputs.forEach((input) => input.setAttribute("disabled", ""));
  submitted = true;
}

function isEmpty(input) {
  return !input.trim();
}

function isEmailValid(input) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi;
  const clearInput = input.trim().toLowerCase();
  return !!clearInput.match(regex);
}

function isPasswordValid(input) {
  return input.trim().length >= 8;
}
