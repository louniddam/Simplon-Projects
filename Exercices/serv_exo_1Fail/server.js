//define two constants, the host and port that our server will be bound to
var http = require("http");
const host = 'localhost';
const port = 8000;


//Let’s add a special function, which in Node.js we call a request listener.
const requestListener = function (req, res) {
    res.writeHead(200); //sets the HTTP status code of the response
    res.end("My first server!");//writes the HTTP response back to the client who requested it.
};


const server = http.createServer(requestListener);// we create a new server object via the http module’s createServer() function, This server accepts HTTP requests and passes them on to our requestListener() functio
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});




// var http = require("http");
// http.createServer(function(request, response){
//     response.writeHead(200,{
//         'Content-Type' : 'text/plain'
//     });
//     response.write("Hello world");
//     response.end();
//     console.log("Node Js is running on port 1337.");
// }).listen(1337);