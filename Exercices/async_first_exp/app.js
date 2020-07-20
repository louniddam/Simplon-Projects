// jshint esversion: 8
const fetch = require("node-fetch");
const fs = require('fs').promises;
const url = "https://restcountries.eu/rest/v2/name/";



const main = async l => {
    try{
        const buffer = await fs.readFile('my_ask.json');//.Lire le fichier et récupérer un buffer
        const jsonArray = buffer.toString('utf8'); //......convertir le buffer
        const arrayName = JSON.parse(jsonArray);//.........convertir le JSON en JS pour lire l'array
        const arrayFinal  = [];
    
        for(i = 0; i < arrayName.country.length; i++){
            const pays = arrayName.country[i];
            const url1 = url + pays;//.....................Donne l'url complète pour le fetch
    
    
            const response = await fetch(url1);//..........Récuperer le pays en question dans l'API
            console.log(response);
            const jsonApi = await response.json();//.......Convertir en JSON
            console.log(jsonApi);
            arrayFinal.push(jsonApi);
        }
        fs.writeFile('res.json', JSON.stringify(arrayFinal));
    } catch (error) {
        console.log(error);
           }


};

main();

// const getData = async url => {
//   try {
// const response = await fetch(url);
// const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getData(url);



// const fetch = require('node-fetch');   
// fetch('https://restcountries.eu/rest/v2/name/India') 
//   .then(response => response.json()) 
//   .then(data => { 
//     console.log(data) 
//   }) 
//   .catch(err => err)
