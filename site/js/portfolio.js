const image = document.getElementById("avatar_pic");


image.onclick = function() {
  image.src = "./image/avatar-bis.png";
};


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


const links = document.getElementsByTagName('a');

for (let i = 0; i < links.length; i++) {

  links[i].style.color = '#750ff7';

}
