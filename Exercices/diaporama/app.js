class Carousel {

  /**
   * The Param tag provides the name, type, and description of a function parameter. 
   * @param {HTMLElement} element 
   * @param {Object} options
   * @param {Object} options.slidesToScroll Nombre d'éléments à faire défiler
   * @param {Object} options.slidesVisible Nombre d'éléments visibles dans un slide
   */
  constructor(element, options = {}){
    this.element = element //On crée une variable lui meme
    this.options = Object.assign({}, { //On crée la propriete options et on le fusionne avec un objet qui contient les options par défaut, l'objet vide accueil les différentes propriétés fusionnées
      slidesToScroll : 1,
      slidesVisible : 1
    }, options)

    //Ici on crée les div 

    let root = this.createDivWithClass('carousel');
    let container = this.createDivWithClass('carousel__container');
    root.appendChild(container) //On ajoute container à root
    this.element.appendChild(root)
  }

  //Créer une méthode
/**
 * @param {string} className
 * @returns {HTMLElement}
 */
createDivWithClass(className){
  let div = document.createElement('div')
  div.setAttribute('class', className)
  return div
  }

}


//rendre le chargement du JS asynchrone, obligé de l'entourer de cette fonction pour qu'il charge en même temps que le reste de la page
document.addEventListener('DONContentLoaded', function(){

  new Carousel(document.querySelector('#carousel1'),{
    slidesToScroll : 3,
    slidesVisible : 3
  })

})
