let api = require("express")();
let fs = require('fs');
let jsonData = require('./country.json');
let capitalPays = [];

var bodyParser = require('body-parser');
api.use(bodyParser.json()); // support json encoded bodies
api.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


//Pour utiliser EJS, on pourra donc Rendre une Vue avec Render
api.set('view engine', 'ejs');

//Gérer le rooting
api.get('/', (req, res) => {
    res.status(200).send("Simple Message");
});

api.get('/teachersName', (req, res) => {
    res.render('pages/index', {name : 'Thomas'});
});

api.get('/all', (req, res) => {
    res.status(200).json(jsonData);
});

/*
api.get('/names/all', (req, res) => {
    let nomPays = [];
   for(i = 0; i < jsonData.length; i++){
     nomPays.push(jsonData[0].name);
   }
   res.status(200).json(nomPays);
});
*/

api.get('/names/all', (req, res) => {
    const names = jsonData.map((pays) =>{

        return pays.name;
    });
    res.status(200).json(names);
});

/*
api.get('/capitals/all', (req, res) => {
    let capitalPays = [];
   for(i = 0; i < jsonData.length; i++){
    capitalPays.push(jsonData[i].capital);
   }
   res.status(200).json(capitalPays);
});
*/

api.get('/capitals/all', (req, res) => {
    const capitals = jsonData.map((pays) =>{

        return pays.capital;
    });
    res.status(200).json(capitals);
});

// api.get('/country/:name', (req, res) => {
//     let userInput = req.params.name;
//     const inputSensitive = userInput.charAt(0).toLocaleUpperCase() + userInput.slice(1).toLowerCase();
//     for(i = 0; i < jsonData.length; i++){
//         if(inputSensitive == jsonData[i].name)
//             res.status(200).json("Lalala " + inputSensitive);
//        }
//        res.status(400).send("T'es nul");
// });


api.get('/country/:name', (req, res, _next) => {
    let userInput = req.params.name;
    const inputSensitive = userInput.charAt(0).toLocaleUpperCase() + userInput.slice(1).toLowerCase();
    for(i = 0; i < jsonData.length; i++){
        if(inputSensitive == jsonData[i].name){
            let info = [];
            info = jsonData[i];
       res.status(200).json(info);
        }
       }
});


api.get('/regions/:regionName', (req, res) => {
    let userInput = req.params.regionName;
    const inputSensitive = userInput.charAt(0).toLocaleUpperCase() + userInput.slice(1).toLowerCase();
    capitalPays = [];
    for(i = 0; i < jsonData.length; i++){
        if(inputSensitive == jsonData[i].region){
            capitalPays.push(jsonData[i].name);
    }
       }

       res.status(200).json(capitalPays);
});

api.get('/subregion/:subRegion', (req, res) => {
    let userInput = req.params.subRegion;
    const inputSensitive = userInput.charAt(0).toLocaleUpperCase() + userInput.slice(1).toLowerCase();
    capitalPays = [];
    for(i = 0; i < jsonData.length; i++){
        if(inputSensitive == jsonData[i].subregion){
            capitalPays.push(jsonData[i].name);
    }
       }
       res.status(200).json(capitalPays);        
});


api.get('/currencies/:currency', (req, res) => {
    // let userInput = req.params.currency;
    // const inputSensitive = userInput.charAt(0).toLocaleUpperCase() + userInput.slice(1).toLowerCase();
    capitalPays = [];
    for(i = 0; i < jsonData.length; i++){
        if(req.params.currency == jsonData[i].currencies[0].code){
            capitalPays.push(jsonData[i].name);
    }
       }
       res.status(200).json(capitalPays);        
});

// api.put('/countries/:name', (req, res) => {
//     let l_name = req.params.name;
//     let jsdata = fs.readFileSync("country.json");
//     let data = JSON.parse(jsdata);

//     console.log(req.body);
//     for(i = 0; i < jsonData.length; i++){
//         if(jsonData[i].name == l_name){
//             data[l_name]["region"] = req.body.region;
//             data[l_name]["subregion"] = req.body.subregion;

//             fs.writeFileSync('country.json', (JSON.stringify(data)));
//             res.json(jsonData);
//         }
//     }

// });

api.put('/countries/:regionName', (req, res)=>{
let param = req.params.regionName;

let bodyres = req.body;
for(i = 0; i < jsonData.length; i++) {
    if(param == jsonData[i].name){
        jsonData[i].region = bodyres.region;
        jsonData[i].subregion = bodyres.subregion;
        fs.writeFileSync('country.json', JSON.stringify(jsonData), "utf-8");
        res.status(201).json(jsonData);
    }
}
});

api.delete('/countries/:countryName', (req,res)=>{
    let param = req.params.countryName;
    let data2 = jsonData;

    for (var i = 0; i < data2.length; i++) {
        var obj = jsonData[i];
    
        if (jsonData[i].name == param) {
            jsonData.splice(i, 1);
            res.status(200).json(jsonData);
        }
    }

});

api.put('/countriesD/:regionName', (req, res)=>{
    let param = req.params.regionName;
    let data2 = jsonData;
    let bodyres = req.body;

    // for(i = 0; i < data2.length; i++) {
    //     if(jsonData[i].name[0] == param[0]){
    //         for(j = 0; j < jsonData[i].name.length; j++){
    //             if(jsonData[i].name[j] != param[j]){
    //                 jsonData.splice(i,0, bodyres);
    //                 res.status(200).json(jsonData);
    //             } else
    //                 res.status(400).send("No!");
    //         }
    //     }
    // }

    for(i = 0; i < data2.length; i++){
        let a = jsonData[i].name;
        let b = req.body.name;
        console.log(b.localeCompare(a));
        if(b.localeCompare(a) == 1){
            jsonData.splice(i,0, bodyres);
            res.status(200).json(jsonData);
        } else if(b.localeCompare(a) == 0){
            res.status(200).send("Pays deja existant");
        } else if (b.localeCompare(a) < 0) {
            jsonData.splice(i - 1,0, bodyres);
            res.status(200).json(jsonData);
        }  else 
        res.send("No");
    }
    });

api.use((req,res) =>{
    res.status(400).send("Unknown request bruh");
});


api.listen(8080);