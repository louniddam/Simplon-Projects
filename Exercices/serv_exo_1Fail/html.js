let ejs = require('ejs');
var templateString = null;
var fs = require('fs');
var templateString = fs.readFileSync('/Users/niddam/Desktop/simplon/Exercices/serv_exo_1' + '/index.ejs', 'utf-8');
var titre1 = ejs.render(templateString, {filename: 'html.ejs', exampleRenderEjs: 'Student Name'});


const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    res.end(ejs.render(templateString));
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});