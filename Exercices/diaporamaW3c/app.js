
//On initialise slideIndex à 1 pour que showSlides commence à la première photo
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
//Dans le html on a ajouté un event Listener sur les flèches. Si la fleche previous est cliquée on retire 1 sinon c'est next on ajoute 1
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls

//Ici quand on click sur un DOT on récupère l'index passé en paramètre pour être sur la bonne photo
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} //Pour pouvoir continuer à défiler
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) { //on compare "i" à slides.length pour lui appliquer un style
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// var image = document.createElement("img")
// image.src = "akat.png"
// var last = document.getElementByClassName("four").lastElementChild

var button = document.querySelector('p');

var opt = function(){
  var divCible = document.getElementsByClassName("four")
  var image = document.createElement('img')
  image.src = "akat.png"
  divCible.appendChild(image);

}

button.addEventListener('click', opt)