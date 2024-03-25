const button = document.querySelector(".avatarButton");
const img = document.querySelector(".avatar");

let image1 = 1;

button.addEventListener("click", () => {
  if (image1 === 1) {
    img.src = "image/avatar.svg";
    image2 = 2;
  } else {
    img.src = "image/avatar-bis.png";
    image1 = 1;
  }
});

