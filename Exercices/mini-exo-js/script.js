document.addEventListener("DOMContentLoaded", (evt) => {
    // DO SOMETHING THERE ;)    
    //EXO-1
    let liste = document.querySelector("ul");
    let listItems = document.querySelectorAll('li');
for (let i = 0; i < listItems.length; i++) {
      listItems[i].classList = "btn btn-sm btn-outline-secondary"
}


    //EXO-2
    // liste.insertAdjacentHTML("beforeend","remerciements");
    var li = document.createElement("li");
    li.classList = "btn btn-sm btn-outline-secondary";
    li.appendChild(document.createTextNode("Remerciements"));
    liste.appendChild(li);

    
    //EXO-3
   let oldChild = document.getElementsByTagName('li')[2];
   if (oldChild.parentNode) {
    oldChild.parentNode.removeChild(oldChild);
  }

    //EXO-4
  let images = document.querySelectorAll("img");
  for (i = 0; i < images.length; i++) {
    images[i].setAttribute("title", "img" + (i+1));
}
})