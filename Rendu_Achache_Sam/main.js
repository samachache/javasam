

//Modification et animation du titre de la page
const titre = document.querySelector("#titre");
setInterval(() => {
    titre.classList.add("jello");
    titre.addEventListener('animationend',()=>{
        titre.classList.remove("jello");
    })
}, 5000);
titre.style.color = "blue";

// Mise en place des mouvement de la photo et reaction des boutons
const danielle = document.querySelector(".danielle");
let i = 0;
const bouton = document.getElementById("bouton");
bouton.addEventListener("click", ()=>{
    setInterval(() => {
        danielle.style.transform = `translateX(${i}px)`;
        i++
        if (i>=window.innerWidth) {
            i = -200;
    
        }
    });
 

const stop = document.getElementById("annuler");
annuler.addEventListener("click", ()=>{
    setInterval(() => {
        danielle.style.transform = `translateX(${i}px)`;
        i++
        if (i>=window.innerWidth) {
            i = -200;
    
        }
    });
    document.body.style.backgroundColor = `rgb(
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)} ,
        ${Math.floor(Math.random() * 255)}
    )`;
});
});


// reaction au mouseover sur l'image
const image = document.getElementById("danielle");
danielle.addEventListener("mouseover", ()=>{
    alert ("HOW'BOUT THAT")
});

// musique se joue lorsque l'on reussi à toucher l'image 
const chanson = document.getElementById("danielle");
danielle.addEventListener("mouseover", () => {
    var  musique= document.getElementById("musique");
    musique.play()
})
