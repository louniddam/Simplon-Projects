//OUTLET --------------------------------------------------------------
let newName = document.querySelectorAll(".prenoms");
let listeNom = document.getElementById("listeNoms");
let inputNom = document.getElementById("nameInput");
let addBtn = document.getElementById("addBtn");

let listeFinale = document.getElementById("finalList");
let inputSujet = document.getElementById("subjectInput");
let assignBtn = document.getElementById("assignBtn");
let clear = document.getElementById("refreshBtn");
//------------------------------------------------------------------

//On modifie le style de la liste pour enlever les points
listeNom.classList = "styleList";
listeFinale.classList = "styleList";

//FONCTIONS-----------------------------------------------------------

//ADD NAME FIRST LIST
function addName(nom){
let position = "beforeend";
    let text = `<li class="prenoms nonBarre">
    <p class ="" id="">${nom}</p>
                </li>`;

listeNom.insertAdjacentHTML(position,text);
}

//CREATE EMPTY ARRAY

function createArray(){
    let newName = document.querySelectorAll(".prenoms");
    let tabVide =  [];
    newName.forEach((element) => {
        if(!element.classList.contains("prenoms nonBarre")){
            tabVide.push(element);
        }
    });
    console.log(tabVide);
        return tabVide;
    }
    
//ADD NAME-VEILLE ALEX
// function add() {
// var saisie2 = document.getElementById("subjectInput").value;
// let noClassArray = checkClass();

// let name =
// noClassArray[Math.floor(Math.random() * noClassArray.length)];
    
// name.classList.add("aRayer");
      
// var text = <p>${name} - ${saisie2}</p>;
// var myDiv = document.getElementById("nomVeille");
// myDiv.insertAdjacentHTML("beforeend", text);
// document.getElementById("input2").value = "";
// }
    

//ADD NAME-VEILLE LOU
function addFinal(){

let newName = document.querySelectorAll(".prenoms")
let noClassArray = createArray();
console.log(noClassArray);

//Generer nombre aleatoire pour prendre un prenom.
let rand = Math.random();
let totalName = noClassArray.length;
let randIndex = Math.floor(rand*totalName);
let randName = noClassArray[randIndex];
    
    
//Récupérer le nom aléatoire
let name = randName.textContent;
    
    
//Récupérer la sujet de la veille
let veille = inputSujet.value;
    
    
    
//Créer les options de insertAdjacentHTML text & position
let text = `<li>
<p class ="">${name} - ${veille}</p>
</li>`;
let position = "beforeend";
       
//Pour injecter du texte dans la liste
listeFinale.insertAdjacentHTML(position,text);
    
    
    
//barrer le nom quand il est choisit
randName.classList.add("barre")
// randName.classList.remove("nonBarre")
};
//------------------------------------------------------------------


//EVENTLISTENERS -------------------------------------------------------

//Add-Btn
addBtn.addEventListener("click",function(event){
    let nom = inputNom.value;
    if(nom){
        addName(nom);
    }
    inputNom.value = "";
})

//Assign-Btn
assignBtn.addEventListener("click",function(event){
    let veille = inputSujet.value;
    if(veille){
        addFinal(veille);
    }
    inputSujet.value = "";
});

//Refresh-Btn
clear.addEventListener("click", function(event){
    let newName = document.querySelectorAll(".prenoms")
    let listeFinale = document.getElementById("finalList");
    
        //Changer la classe et lui donner l'aspect non-barre
        for(i = 0; i < newName.length; i++){
            newName[i].classList.remove("barre")
            newName[i].classList = "nonBarre"
        }
        //Pour supprimer la liste nom-veille
        while (listeFinale.firstChild) {
            listeFinale.removeChild(listeFinale.firstChild);
    }
    });
//------------------------------------------------------------------

/*
CORRECTION




*/