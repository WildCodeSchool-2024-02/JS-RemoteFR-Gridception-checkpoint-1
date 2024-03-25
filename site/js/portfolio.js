const changeImage = document.querySelector("#img0");

changeImage.addEventListener("click", function () {
  changeImage.src = "https://placedog.net/300";
  changeImage.alt = "a dog";
});

/*const changeName = document.querySelector("#firstname");*/
const pushButton = document.querySelector("button");
pushButton.addEventListener("click", () => {
  const newName = prompt("Votre nom ?");
  if (newName !== null) {
    const changeName = document.querySelector("#firstname");
    changeName.textContent = newName;
    changeName.classList.add("");
  }
  const newColor = prompt("quelle couleur");
  if (newColor !== null) {
    const changeColor = document.querySelector(".description pink-bg");
    changeColor.style.backgroundColor = newColor;
    changeColor.classList.add("");
  }
});

/*essaie step 2*/

/*const pushButton = document.querySelector("button");
pushButton.addEventListener("click", () => {
  const newColor = prompt("Quelle couleur");
  if (newColor !== nul) {
    const changeColor = document.querySelector(".description pink-bg");
    changeColor.box.style.backgroundColor = newColor;
  }
});*/
