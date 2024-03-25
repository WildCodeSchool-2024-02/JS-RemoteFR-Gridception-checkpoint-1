const imgAvatar = document.querySelector("#avatar");

imgAvatar.addEventListener('click', function () {
    imgAvatar.src = "image/avatar.svg";
});


const buttonModify = document.querySelector("#button_modify");
const firstName = document.querySelector("#firstname");
const backgroundSection = document.querySelector(".pink-bg");

buttonModify.addEventListener('click', function () {
    const nameUser = prompt("What's your name ?");
    firstName.innerHTML = nameUser;

    firstName.style.color = "white";

    const colorUser = prompt("What color for the background ?");
    backgroundSection.style.backgroundColor = colorUser;

});