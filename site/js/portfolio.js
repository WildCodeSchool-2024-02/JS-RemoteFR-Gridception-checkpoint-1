const avatar = document.querySelector(".avatarimg");

avatar.addEventListener("click", function () {
  const currentSrc = avatar.getAttribute("src");

  const nextSrc =
    currentSrc === "image/avatar-bis.png"
      ? "image/avatar.svg"
      : "image/avatar-bis.png";
  avatar.setAttribute("src", nextSrc);
});

const paragraph = document.getElementById("changeBackgroundButton");

paragraph.addEventListener("click", function () {
  const newText = prompt("Entrez votre nom:");

  if (newText !== null) {
    const firstname = document.getElementById("firstname");
    firstname.textContent = newText;
    firstname.classList.add("white-text");
  }
});

const changeBackgroundButton = document.getElementById(
  "changeBackgroundButton"
);

const article = document.querySelector(".article");

changeBackgroundButton.addEventListener("click", function () {
  const newColor = prompt(
    "Entrez la nouvelle couleur d'arrière-plan (en format hexadécimal, par exemple, #750ff7):"
  );

  if (newColor !== null && newColor !== "") {
    article.style.backgroundColor = newColor;
  }
});
