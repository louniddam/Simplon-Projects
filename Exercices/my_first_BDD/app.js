
/* Mon code */

// let Mongoclient = require('mongodb').MongoClient;
// let url = "mongodb://127.0.0.1:27017/";
// let fs = require('fs');


// Mongoclient.connect(url,  { useUnifiedTopology: true}, (err,db)=>{
//     let dbo = db.db("mydb");
//     dbo.createCollection("country_names", ()=>{
//     });

//     let buffer = fs.readFileSync("country_names.json");
//     let pays = JSON.parse(buffer);
//     for(i = 0; i < pays.length; i++){
//         dbo.collection("country_names").insertOne({"name" : pays[i]}, (err, res) =>{
//         });
//     }
// });

/***********************************************************************************************/



const MongoClient = require('mongodb').MongoClient;
const fs = require('fs').promises;
const express = require('express');
const url = 'mongodb://localhost:27017';

const main = async l => {
    let jsonData = await fs.readFile('country_names.json');
    let dataParsed = await JSON.parse(jsonData);
    let client = await MongoClient.connect(url);
    let db = await client.db('local');

    for(i = 0; i < dataParsed.length; i++){
        db.collection('country_names').insertOne({"name" : dataParsed[i]});
        }
};

main();