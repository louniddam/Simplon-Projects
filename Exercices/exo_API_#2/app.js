//first commit
let listePays = document.getElementsByClassName("paysContainer");
let search = document.getElementById("input");
let matchList = document.getElementById("receptionTab");


  //Search country.json and filter it
  const searchCountry = async searchText =>{
    const res = await fetch('/data/country.json');
    const country = await res.json();
    
    //Get matches from the current input
    let matches = country.filter( country => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return country.name.match(regex);
    });
    if(searchText.length === 0){
        matches = [];
    }
     outputHTML(matches);
};

search.addEventListener('input', () => searchCountry(search.value));

//FUNCTION show result in HTML
const outputHTML = matches =>{
    if(matches.length>0){
        const html = matches.map(match => `  <div id="filtredArray">
        <p>${match.name}</p>
      </div>`).join('');
      matchList.innerHTML = html;
    } else
    matchList.innerHTML = "";
};

// const outputHTML = matches =>{
//     if(matches.lenght>0){
//         let div = document.createElement('div');
//         div.className = "filtredArray";
//         let p = document.createElement('p');
//         p.innerHTML = `${matches.name}`;
//         div.appendChild(p);
//         matchList.appendChild(div);
//     }
// };

// let myObj = {
//     init:function(){
//         this.load_country();
//     },
//     load_country:function(){
//         let xhr = new XMLHttpRequest();
//         xhr.open('GET','https://restcountries.eu/rest/v2/all',true);
//         xhr.onload = function(){
//             let countries = JSON.parse(xhr.responseText); 
//             countries.forEach(value =>{
//                 let button = document.createElement('button');
//                 button.innerHTML = value.name;
//                 button.className = "btn btn-outline-secondary";
//                 listePays[0].appendChild(button);
//             });
//         };
//         xhr.send();
//     }
// };

// myObj.init();

// (document).ready(function(){
//         document.getElementById('form-control').onchange= (e)=> {
//             let newPays= parseInt(e.target.value);
//             let newHTML= [];
//             for(let i=0; i<newPays; i++) {
//                 console.log("yo");
//                 //newHTML.push(`<p>${}</p>`);
//             }
//             document.getElementById('filtredArray').innerHTML= newHTML.join('\n');
//         };
//    });

// window.addEventListener("DOMContentLoaded", (event) => {
//     document.getElementById('form-control').onchange= (e)=> {
//         let newPays= parseInt(e.target.value);
//         let newHTML= [];
//         for(let i=0; i<newPays; i++) {
//             console.log("yo");
//             //newHTML.push(`<p>${}</p>`);
//         }
//         document.getElementById('filtredArray').innerHTML= newHTML.join('\n');
//     };
//   });
  
    // document.getElementById('form-control').onchange= (e)=> {
    //     let newPays= parseInt(e.target.value);
    //     let newHTML= [];
    //     for(let i=0; i<newPays; i++) {
    //         console.log("yo");
    //         //newHTML.push(`<p>${}</p>`);
    //     }
    //     document.getElementById('filtredArray').innerHTML= newHTML.join('\n');
    // };


  
