const avatarChange = document.getElementById("img-avatar");

avatarChange.addEventListener("click", function (ev) {
  console.log(avatarChange.src);
  if (avatarChange.src.includes("avatar.svg")) {
    avatarChange.src = "./image/avatar-bis.png";
  } else {
    avatarChange.src = "./image/avatar.svg";
  }
});
