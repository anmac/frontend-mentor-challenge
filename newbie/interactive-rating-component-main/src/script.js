const card = document.querySelector(".card");
const cardHeader = document.querySelector(".card__header");
const cardTitle = document.querySelector(".card__title");
const cardText = document.querySelector(".card__text");
const cardRating = document.querySelector(".card__rating-state");
const cardNumbers = document.querySelectorAll(".card__rating-number");
const cardSubmit = document.querySelector(".card__submit");

cardNumbers.forEach((n) => {
  n.classList.add("no-selected");
  n.addEventListener("click", setUserChoice);
});

cardSubmit.addEventListener("click", verifyUserChoice);

function setUserChoice(e) {
  if (!checkIsSelected(e.target)) {
    cardNumbers.forEach((n) => resetSelected(n));
    e.target.classList.replace("no-selected", "selected");
  }
}

function checkIsSelected(target) {
  return target.classList.contains("selected");
}

function resetSelected(item) {
  item.classList.replace("selected", "no-selected");
}

function verifyUserChoice() {
  if ([...cardNumbers].some((n) => checkIsSelected(n))) {
    setTimeout(() => updateContent(), 500);
  } else cardSubmit.classList.add("wrong");
  setTimeout(() => cardSubmit.classList.remove("wrong"), 500);
}

function updateContent() {
  showUserChoice();
  updateTitle();
  updateText();
  cardRating.remove();
  cardSubmit.remove();
  card.classList.add("submitted");
}

function showUserChoice() {
  const userChoice = [...cardNumbers].findIndex((n) => checkIsSelected(n)) + 1;
  const newContent = `You selected ${userChoice} out of 5`;
  const newTag = document.createElement("span");
  newTag.textContent = newContent;
  newTag.classList.add("card__span");
  cardHeader.appendChild(newTag);
  updateLogo();
}

function updateLogo() {
  const image = cardHeader.children[0];
  image.setAttribute("src", "./images/illustration-thank-you.svg");
  image.classList.add("submitted");
}

function updateTitle() {
  const newContent = `Thank you!`;
  cardTitle.textContent = newContent;
}

function updateText() {
  const newContent = `We appreciate you taking the time to give a rating.
  If you ever need more support, don’t hesitate to get in touch!`;
  cardText.textContent = newContent;
}
