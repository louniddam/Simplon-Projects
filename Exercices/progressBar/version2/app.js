function progress(){
    //Initialisation des variables.
    var prg = document.getElementById('progressing');
    var percent = document.getElementById('percentCount');
    var counter = 5;
    var progress = 25;
    var id = setInterval(frame, 25);

    function frame(){
        if (progress == 500 && counter == 100){
            clearInterval(id);
        } else {
            counter += 1;
            progress += 5;
            prg.style.width = progress + 'px';
            percent.innerHTML = counter + '%';
            prg.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
            percent.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
        }
    }
}

//Appel de la fonction qui se mettra en route dès le chargement de la page.
progress();


