const changeImage = document.getElementById("avatar");

changeImage.addEventListener("click", function () {
    changeImage.src = "image/avatar-bis.png";
});


const changeFirstName = document.getElementById("firstname");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function () {
    changeFirstName.innerText(prompt("Enter your name: "));
});

// myButton.addEventListener("click", function () {
//     let NouveauNom = prompt("Enter your name: ");
//     console.log(NouveauNom);
//     changeFirstName.innerText(NouveauNom);
// });