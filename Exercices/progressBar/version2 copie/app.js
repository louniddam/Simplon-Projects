// function progress(){
   
    // var prg = document.getElementById('progressing');
    // var percent = document.getElementById('percentCount');
//     var counter = 5;
//     var progress = 25;
//     var id = setInterval(frame, 25);

//     function frame(){
//         if (progress == 500 && counter == 100){
//             clearInterval(id);
//         } else {
//             counter += 1;
//             progress += 5;
//             prg.style.width = progress + 'px';
//             percent.innerHTML = counter + '%';
//             prg.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
//             percent.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
//         }
//     }
// }


// function frame(){
//       for(var progress = 25; progress <= 500; progress+=5){
//         prg.style.width = progress + 'px';
//         prg.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
//     }
    
//     for(var counter = 5; counter <= 100; counter+=1){
//         percent.innerHTML = counter + '%';
//         percent.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
//     }
// }

// function clear(){
//     var id = setInterval(frame, 25);
//     var progress = 500;
//     var counter = 100;
//     if (progress == 500 && counter == 100){
//         clearInterval(id);
// } 
// }


function progress(){
    //Initialisation des variables.
    var prg = document.getElementById('progressing');
    var percent = document.getElementById('percentCount');
    var counter = 5;
    var progress = 25;
    var id = setInterval(frame, 25);

    function frame(){
        while(progress <= 500 && counter <= 100){
            if (progress == 500 && counter == 100){
                clearInterval(id);
                break;
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
}

progress();