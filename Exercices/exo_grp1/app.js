//Onclick sur le bouton Add, on crée une LI avec la valeur de texte de l'input et on l'ajoute à la UL

//Je crée toutes les variables globales dont j'aurais besoin pour acceder aux éléments
let newName = document.querySelectorAll(".prenoms")
let listeNom = document.getElementById("listeNoms");
let inputNom = document.getElementById("nameInput");
let addBtn = document.getElementById("addBtn");

let listeFinale = document.getElementById("finalList");
let inputSujet = document.getElementById("subjectInput");
let assignBtn = document.getElementById("assignBtn");
let clear = document.getElementById("refreshBtn");


//On modifie le style de la liste pour enlever les points
listeNom.classList = "styleList";
listeFinale.classList = "styleList";

//FONCTION AJOUTER LE NOM DANS LA LISTE -----------------------------

  

//On crée une variable qui contiendra le html qu'on veut placer dans la liste
function addName(nom){
let position = "beforeend";
    let text = `<li class="prenoms notUse">
    <p class ="" id="">${nom}</p>
                </li>`;

//Pour injecter du texte dans la liste
listeNom.insertAdjacentHTML(position,text);

}
//------------------------------------------------------------------


//BOUTON ADD -------------------------------------------------------

//Pour ajouter un element a la liste nom
//on ajoute un écouteur d'évenements sur le bouton Add
addBtn.addEventListener("click",function(event){
    let nom = inputNom.value;
    if(nom){
        addName(nom);
    }
    inputNom.value = "";
});
//------------------------------------------------------------------

//FONCTION POUR CREER UN TABLEAU VIDE ET COMPARER LES CLASSES ------

function createArray(){
let newName = document.querySelectorAll(".prenoms");
let tabVide =  [];
newName.forEach((element) => {
    if(!element.classList.contains("barre")){
        tabVide.push(element)
    }
});
    return tabVide;
}

//------------------------------------------------------------------

function add() {
    // récupère la saise
    var saisie2 = document.getElementById("subjectInput").value;
 
  
    var text = `<p>${name} - ${saisie2}</p>`;
    var myDiv = document.getElementById("nomVeille");
    // insere text
    myDiv.insertAdjacentHTML("beforeend", text);
    // clean l'input
    document.getElementById("input2").value = "";
  }

//FONCTION AJOUT NAME-VEILLE --------------------------------------

function addFinal(){

let noClassArray = checkClass();
let name =
noClassArray[Math.floor(Math.random() * noClassArray.length)];

name.classList.add("aRayer");

//Recupérer le nom



//Generer nombre aleatoire pour prendre un prenom.
// let rand = Math.random();
// let totalName = newName.length;
// let randIndex = Math.floor(rand*totalName);
// let randName = newName[randIndex];


//Récupérer le nom aléatoire
// let name = randName.textContent;


//Récupérer la sujet de la veille
let veille = inputSujet.value;



//Créer les options de insertAdjacentHTML text & position
// let text = `<li>
// <p class ="">${name} - ${veille}</p>
// </li>`;
// let position = "beforeend";
   
//Pour injecter du texte dans la liste
listeFinale.insertAdjacentHTML(position,text);



//barrer le nom quand il est choisit
randName.classList.add("barre")

};

//------------------------------------------------------------------

//BOUTON ASSIGN -----------------------------------------------------
assignBtn.addEventListener("click",function(event){
    let veille = inputSujet.value;
    if(veille){
        addFinal(veille);
    }
    inputSujet.value = "";
});
//------------------------------------------------------------------

//BOUTON REFRESH ---------------------------------------------------
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
