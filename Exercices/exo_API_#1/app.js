//first commit

let listePays = document.getElementsByClassName("paysContainer");

let myObj = {
    init:function(){
        this.load_country();
    },
    load_country:function(){
        let xhr = new XMLHttpRequest();
        xhr.open('GET','https://restcountries.eu/rest/v2/all',true);
        xhr.onload = function(){
            let countries = JSON.parse(xhr.responseText); 
            countries.forEach(value =>{
                let button = document.createElement('button');
                button.innerHTML = value.name;
                button.className = "btn btn-outline-secondary";
                listePays[0].appendChild(button);
            });
        };
        xhr.send();
    }
};

myObj.init();

