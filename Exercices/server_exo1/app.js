const http = require('http');
const { parse } = require('querystring');
let ejs = require('ejs');
var templateString = null;
var fs = require('fs');
let objet = "lou";
const server = http.createServer((req, res) => {
var templateString = fs.readFileSync('/Users/niddam/Desktop/simplon/Exercices/serv_exo_1' + '/index.ejs', 'utf-8');

    if (req.method === 'POST') {
        collectRequestData(req, result => {
            console.log(result);
            res.end(`Parsed data belonging to ${result.fname}`);
        });
    } 
    else {
        res.end(ejs.render(templateString, {objet : objet}));
    }
});
server.listen(3000);

function collectRequestData(request, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    if(request.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null);
    }
}