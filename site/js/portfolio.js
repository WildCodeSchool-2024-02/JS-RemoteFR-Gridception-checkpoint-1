// change image src

const image = document.getElementById("avatar");
image.addEventListener("click", function () {
  image.src = "image/avatar-bis.png";
});

// prompt for name

const createButton = document.createElement("button");
createButton.textContent = "Enter your Name";

document.querySelector(".description").append(createButton);

createButton.addEventListener("click", function () {
  const name = prompt("Enter your name");
  const firstName = document.querySelector("#firstname");
  firstName.textContent = name;
  firstName.style.color = "white";
  const colorChange = prompt("Choose a color");
  const backGround = document.querySelector(".pink-bg");
  backGround.style.backgroundColor = colorChange;
});
