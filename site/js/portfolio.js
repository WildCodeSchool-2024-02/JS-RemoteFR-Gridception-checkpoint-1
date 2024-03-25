document.querySelector("#avatar").addEventListener("click", function () {
  avatar.src = "image/avatar.svg";
});

const createButton = document.createElement("button");
createButton.classList.add = "name-changer";
document.querySelector(".description").append(createButton);
createButton.innerText = "Modify Name and Color";
createButton.addEventListener("click", function () {
  let userName = prompt("enter your name :");
  let colorChoice = prompt("Enter a color :");
  const firstName = document.querySelector("#firstname");
  firstName.innerText = userName;
  firstName.style.color = "white";
  //document.querySelecto(".pink-bg").style.backgroundColor = "#750ff7"; -- Je le laisse quand meme car c'est la step 3
  const pinkBackground = document.querySelectorAll(".pink-bg");
  const pinkText = document.querySelectorAll(".pink-text");
  pinkBackground.forEach((element) => {
    element.style.backgroundColor = colorChoice;
  });
  pinkText.forEach((element) => {
    element.style.color = colorChoice;
  });
});
