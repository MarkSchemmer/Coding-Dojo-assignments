const http = require('http');
// fs module allows us to read and write content for responses!!
const fs = require('fs');

// creating a server using http module:
let server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    const url = request.url 
    if(url === '/') {
        fs.readFile('html/index.html', 'utf8', function (errors, contents){
            console.log(errors)
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } else if(url === '/ninjas'){
        fs.readFile('html/ninjas.html', 'utf8', function (errors, contents){
            console.log(errors)
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    } else if(url === '/dojos/new'){
        fs.readFile('html/new.html', 'utf8', function (errors, contents){
            console.log(errors)
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");