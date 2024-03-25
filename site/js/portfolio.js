
// changer l'avatar avec un clique

  const image = document.querySelector(".avatar")
    image.addEventListener ("click",() => {
    image.setAttribute("src","image/avatar.svg");        
       })


 // Change le nom + la couleur

const button = document.querySelector(".modifyText");
const text = document.getElementById("firstname");
const pink = document.querySelector(".pink-bg")
 
button.addEventListener("click", () => {
    const name = prompt("Quel est votre nom ?");
    if (name !== null) { 
        text.textContent = name ; 
        text.style.color = "white";
    }
});

//change le rose

/*button.addEventListener("click", () => {
    const color = prompt ("Enter une couleur:");
    if (color !== null) {
        pink.style.backgroundcolor = "color" ;
    }
}); */
