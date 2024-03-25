const changeAvatar = document.querySelector("#change_avatar");

changeAvatar.addEventListener("click", function () {
  // Vérification de l'attribut 'src' de l'image
  if (changeAvatar.src.match("./image/avatar-bis.png")) {
    // Changement de l'attribut 'src' de l'image
    changeAvatar.src = "./image/avatar.svg";
  } else {
    changeAvatar.src = "./image/avatar-bis.png";
  }
});

const boutonPopup = document.createElement("button");
boutonPopup.textContent = "Modify text and color";

const paragraphe = document.querySelector(".description p");

paragraphe.insertAdjacentElement("afterend", boutonPopup);

boutonPopup.addEventListener("click", function () {
  const prenom = prompt("Veuillez entrer votre prénom :");

  if (prenom) {
    const spanPrenom = document.getElementById("firstname");
    spanPrenom.textContent = prenom;
    spanPrenom.style.color = "white";
    const couleur = prompt(
      "Veuillez choisir une couleur (en anglais ou en code hexadécimal) :"
    );

    if (couleur) {
      const elementsRose = document.querySelectorAll(".pink-bg");
      elementsRose.forEach(function (element) {
        element.style.backgroundColor = couleur;
      });
      const textRose = document.querySelectorAll(".pink-text");
      textRose.forEach(function (element) {
        element.style.color = couleur;
      });
      const lien = document.querySelectorAll("a");
      lien.forEach(function (element) {
        element.style.color = couleur;
      });
    }
  }
});
