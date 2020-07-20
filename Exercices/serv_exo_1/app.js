//VARIABLES
const http = require('http');
const ejs = require('ejs');
const fs = require('fs');
const eleve = ["Lou"];
const veille = ["Algo"];

var htmlContent = fs.readFileSync('/Users/niddam/Desktop/simplon/Exercices/serv_exo_1' + '/index.ejs', 'utf8');

function afficheHtml(){
   const html = htmlContent;
    var object = ejs.render(html, {myobjet: 'objet'});
    

    return html;
}





//FUNCTIONS
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(object);
});
server.listen(3000);