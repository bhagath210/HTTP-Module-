var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
    if(request.url == "/home"){
        fs.readFile("./Assignment2/Assignment2.html", function(error, data){
            if(error){
                response.writeHead(404);
                response.write('Error found');
            }
            else{
                response.writeHead(200,{'content-type':'text/html'});
                response.write(data);
            }
            response.end();
        });
    } else if(request.url.indexOf("bootstrap") > 0){
        fs.readFile("./Assignment2/bootstrap.min.css", function(error, data){
            if(error){
                response.writeHead(404);
                response.write('Error found');
            }
            else{
                response.writeHead(200,{'content-type':'text/stylesheet'});
                response.write(data);
            }
            response.end();
        });
    } 
    else if(request.url =="/Assignment2.css"){
        fs.readFile("./Assignment2/Assignment2.css", function(error, data){
            if(error){
                response.writeHead(404);
                response.write('Error found');
            }
            else{
                response.writeHead(200);
                response.write(data);
            }
            response.end();
        });
    }
    else if(request.url =="/Skoda.png"){
        fs.readFile("./Assignment2/Skoda.png", function(error, data){
            if(error){
                response.writeHead(404);
                response.write('Error found');
            }
            else{
                response.writeHead(200);
                response.write(data);
            }
            response.end();
        });
    }
     else{
        
        response.writeHead(200,{'content-type':'text/html'});
        response.write('<h1>Bhagath Kumar</h1>');
        response.end();
    }
});
server.listen(3555);
console.log("http://localhost:3555/home");