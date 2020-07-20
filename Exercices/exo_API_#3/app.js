let listePays = document.getElementsByClassName("paysContainer");
let search = document.getElementById("input");
let matchList = document.getElementById("receptionTab");
let country = [];

  //Search country.json and filter it
  const searchCountry = async searchText =>{
    const res = await fetch('/data/country.json');
    country = await res.json();
    
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
        const html = matches.map(match => `  
        <button class="filtredArray btn btn-light" data-bind = "value: ${match.name}" onclick="displayCard()" >
        ${match.name}
      </button>`).join('');
      matchList.innerHTML = html;
    } else
    matchList.innerHTML = "";

    //let filtredList = document.querySelectorAll('button');
};



//setTimeout(displayCard(), 5000);


  
