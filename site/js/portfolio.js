const imgAvatar = document.querySelector("#avatar");

imgAvatar.addEventListener('click', function () {
    imgAvatar.src = "image/avatar.svg";
});


const buttonModify = document.querySelector("#button_modify");
const firstName = document.querySelector("#firstname");
const backgroundSection = document.querySelector(".pink-bg");
const pinkText = document.querySelectorAll(".pink-text")

buttonModify.addEventListener('click', function () {
    const nameUser = prompt("What's your name ?");
    firstName.innerHTML = nameUser;

    firstName.style.color = "white";

    // const colorUser = prompt("What color for the background ?");
    // backgroundSection.style.backgroundColor = colorUser;

    const colorUser2 = prompt("What color for all pink ?");
    backgroundSection.style.backgroundColor = colorUser2;
    pinkText.style.color = colorUser2;

});