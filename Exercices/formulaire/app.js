var validation = document.getElementById("submit");
var prenom = document.getElementById("prenom");
var prenom_m = document.getElementById("prenom_manquant")
var prenom_v = /^[a-zA-ZéèîïÉÈÏÎ][a-zéèêëîïç]+([-'\s][a-zA-ZéèîïÉÈÏÎ][a-zéèêëîïç]+)?/;

validation.addEventListener("click", f_valid);

function f_valid(e){
    if(prenom.validity.valueMissing){
        e.preventDefault();
        prenom_m.textContent = "Prénom manquant";
        prenom_m.style.color = "red";
    } else if(prenom_v.test(prenom.value) == false){
        event.preventDefault();
        prenom_m.textContent = "Format incorrect";
        prenom_m.style.color = "red";
    } else {
        
    }
}


