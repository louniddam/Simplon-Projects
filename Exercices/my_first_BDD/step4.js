const MongoClient = require('mongodb').MongoClient;
const fs = require('fs').promises;
const URL = 'mongodb://localhost:27017';
const URL_API = 'https://restcountries.eu/rest/v2/name/';
const fetch = require('node-fetch');

const main = async l => {
    let client = await MongoClient.connect(URL, { useUnifiedTopology: true });
    let db = client.db('local');
    let country = await db.collection('country_full_data').find({}).toArray();
    
    let dbo = client.db('myDb');
    //console.log(country);
    
    try{
        for(i = 0; i < country.length; i++){
            if(country[i].region == "Europe"){
            await dbo.collection('Europe').insert(country[i]);
            } else if(country[i].region == "Asia"){
            await dbo.collection('Asia').insert(country[i]);
            } else if(country[i].region == "Africa"){
            await dbo.collection('Africa').insert(country[i]);
            } else if(country[i].region == "Oceania"){
            await dbo.collection('Oceania').insert(country[i]);
            } else if(country[i].region == "Polar"){
            await dbo.collection('Polar').insert(country[i]);
            } else if (country[i].region == "Americas"){
            await dbo.collection('Americas').insert(country[i]);
            }
        }
    } catch(e){
        console.log(e);
    } finally {
        client.close();
    }

};

main();

/*



*/