/******* STEP 1 *******/

const imageChange = document.getElementById("avatar");

imageChange.addEventListener("click", function(){
    imageChange.src = "./image/avatar-bis.png"
})

/******* STEP 2 *******/

const button = document.getElementById("change-name");
const firstname = document.getElementById("firstname");

button.addEventListener("click", function(){
    const yourName = prompt("Enter your Name");
        firstname.textContent = yourName;
        firstname.style.color = "white";
});

/******* STEP 3 *******/   

const colorOfSection = document.querySelector(".description");

button.addEventListener("click", function (){
    const newColor = prompt ("Enter a new color (#750ff7)");
    if (newColor === "#750ff7"){
        colorOfSection.style.backgroundColor = newColor;
    }
});


/******* STEP 4 *******/ /*** REVOIR JE SUIS BLOQUE ***/

/*
const colorOfAllSite = document.querySelectorAll(".pink-text");
button.addEventListener.click("click", function (){
    if (newColor === "#750ff7"){
        colorOfAllSite.forEach(element => {
            colorOfAllSite.style.color = "#750ff7";
        });
    }
}); */


/******* STEP 5 *******/

const linksColor = document.getElementsByTagName("a");
for (let i = 0; i< linksColor.length; i++){
    linksColor[i].style.color = "#750ff7";
}


