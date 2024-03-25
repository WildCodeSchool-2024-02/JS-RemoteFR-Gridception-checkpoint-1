const changeImage = document.getElementById("avatar");

changeImage.addEventListener("click", function () {
    changeImage.src = "image/avatar-bis.png";
});


const changeFirstName = document.getElementById("firstname");
const myButton = document.getElementById("myButton");
const changeBG = document.getElementsByClassName("pink-bg");

myButton.addEventListener("click", function () {
    changeFirstName.textContent = prompt("Enter your name: ");
    changeFirstName.style.color = "white";
    changeBG.style.backgroundColor = "#750ff7";
});

