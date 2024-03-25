const avatar = document.querySelector("section img");

avatar.addEventListener("click", () => {
  //   if (avatar.src === "http://127.0.0.1:5500/site/image/avatar.svg") {
  if (avatar.src.match("image/avatar.svg")) {
    avatar.src = "image/avatar-bis.png";
  } else {
    avatar.src = "image/avatar.svg";
  }
});

const name = document.getElementById("firstname");

const description = document.getElementsByClassName("description");

// description[0].innerHTML += "<button>Modify Text And Color</button>";

const button = document.createElement("button");
button.textContent = "Modify Text And Color";
button.style.borderRadius = "10px";
button.style.padding = "0.5rem 1rem";
button.style.border = "1px solid white";
button.style.color = "white";
button.style.backgroundColor = "#ffc0cb";
button.style.marginBottom = "3rem";
description[0].appendChild(button);

button.addEventListener("click", () => {
  const newName = prompt("Enter your name");
  const newColor = prompt("Enter a color in hex");
  const bgColor = document.getElementsByClassName("pink-bg");
  const titleColor = document.querySelectorAll(".pink-text");

  name.textContent = newName;
  name.style.color = "white";
  //   description[0].style.backgroundColor = newColor;

  for (let i = 0; i < bgColor.length; i++) {
    bgColor[i].style.backgroundColor = newColor;
  }

  titleColor.forEach((element) => (element.style.color = newColor));
});
