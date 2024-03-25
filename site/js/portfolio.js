const changeImage = document.querySelector("#img0");

changeImage.addEventListener("click", function () {
  changeImage.src = "https://placedog.net/300";
  changeImage.alt = "a dog";
});

const changeName = document.querySelector("#firstname");
changeName.innerText = "Pierre";
