var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,response){
     console.log('(Client Requesting URL: ',req.url,'..)');

     let file;

     switch (req.url){
          case '/':
               file = 'index.html'
               break;
          case '/dojos':
               file = 'dojos.html'
               break;
          case '/ninjas':
               file = 'ninjas.html'
               break;
          default:
               file = '404.html'
               break;
     }



     if (req.url !== '404.html'){
          fs.readFile(`${file}`,'utf8',function(errors, contents){
               response.writeHead(200,{'content-type':'text/html'});
               response.write(contents);
               response.end();
          });
     }

     else {
          fs.readFile('404.html','utf8',function(errors,contents){
               response.writeHead(404,{'content-type':'text/html'});
               response.write(contents);
               response.end( );
          });
     };
})

server.listen(6789);

console.log('Running server in localhost 6789');



// alternate way to build this...
//
// const fs = require('fs'),
//     http = require('http'),
//     port = 5000;
//
// const server = http.createServer(function server(req, res){
//   // Figure out which file the HTTP request is looking for
//   let file;
//
//   switch (req.url) {
//     case "/":
//       file = 'index.html'
//       break;
//     case "/ninjas":
//       file = 'ninjas.html'
//       break;
//     case "/dojos/new":
//       file = 'dojos.html'
//       break;
//     default:
//       file = null;
//       break;
//   }
//   // Send file or error to browser
//   if (file !== null) {
//     // First argument uses string interpolation
//     fs.readFile(`static/${file}`, 'utf8', function(err, contents){
//       if (err) { console.log(err); }
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(contents);
//       res.end();
//     });
//   } else { // If file is null, not found
//     res.writeHead(404);
//     res.end("File not found!");
//   }
// });
//
// server.listen(port, function(){
//   console.log("Running on port: ", port);
// });
