const footer = document.querySelector(".card__footer");
const originalContent = footer.innerHTML;
let checked = false;

window.addEventListener("click", (e) => {
  if (
    e.target.matches("button.icon-box") ||
    e.target.matches("img.icon-share")
  ) {
    toggleShare();
    checked = !checked;
  } else {
    removeShare();
  }
});

function toggleShare() {
  const width = window.innerWidth;
  if (width < 1024) {
    if (checked) {
      footer.innerHTML = originalContent;
    } else {
      footer.innerHTML = fragmentMobile;
    }
  } else {
    if (checked) {
      footer.innerHTML = originalContent;
    } else {
      footer.innerHTML += fragmentDesktop;

      const button = document.querySelector(".icon-box");
      const icon = button.querySelector("img");
      button.setAttribute("checked", "");
      button.focus();
      icon.setAttribute("src", "./images/icon-share-toggle.svg");
    }
  }
}

function removeShare() {
  const button = document.querySelector(".icon-box");

  if (button.hasAttribute("checked")) {
    footer.innerHTML = originalContent;
    checked = !checked;
  }
}

const fragmentMobile = `
<div class="share" toggle>
  <div class="share-icons">
    <p>SHARE</p>
    <img
      src="./images/icon-facebook.svg"
      alt="Icon Facebook"
      class="icon-facebook"
    />
    <img
      src="./images/icon-twitter.svg"
      alt="Icon Twitter"
      class="icon-twitter"
    />
    <img
      src="./images/icon-pinterest.svg"
      alt="Icon Pinterest"
      class="icon-pinterest"
    />
  </div>
  <button class="icon-box" checked>
    <img
      src="./images/icon-share-toggle.svg"
      alt="Icon share"
      class="icon-share"
    />
  </button>
</div>
`;

const fragmentDesktop = `
<div class="share" toggle preview>
  <div class="share-icons">
    <p>SHARE</p>
    <img
      src="./images/icon-facebook.svg"
      alt="Icon Facebook"
      class="icon-facebook"
    />
    <img
      src="./images/icon-twitter.svg"
      alt="Icon Twitter"
      class="icon-twitter"
    />
    <img
      src="./images/icon-pinterest.svg"
      alt="Icon Pinterest"
      class="icon-pinterest"
    />
  </div>
  <div class="triangle"></div>
</div>
`;
