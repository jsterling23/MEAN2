// Assignment: Cars and Cats
// We are going to make another node server in this assignment, but we are going to complicate it. Create a folder called cars_and_cats, this will be your root folder for this project.  Within this folder, create:
//
// A file called app.js.  This is where you will build your node server.
// A folder called views.  This is where you will keep your HTML files.
// A folder called images for images.
// A folder called stylesheets for CSS.
// Your server must be capable of handling the following URL requests:
//
// Have localhost:7077/cars go to a simple HTML page that shows some cool pictures of different cars.  These car pictures should be stored in your images folder on your server.  DON'T just link to pictures of cars stored somewhere else!!
// Have localhost:7077/cats show a simple HTML page with some cool pictures of cats.  Again, make sure these pictures are stored on your server.
// Have localhost:7077/cars/new show a simple form where the user can add a new car information. For the /cars/new HTML page, no need to store this information in the database nor is there a need to validate the entries. Simply have the form there.
//  The point of this exercise is to build your node server so it serves all of the content of your website.
//
// Helpful hints
// Serving CSS stylesheets
// Here is an example of how to handle a browser request for a stylesheet:
//
//   else if(request.url === '/stylesheets/style.css'){
//     fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
//      response.writeHead(200, {'Content-type': 'text/css'});
//      response.write(contents);
//      response.end();
//     })
//   }
// Serving images
//   else if(request.url === '/images/pizza.jpg'){
//     // notice we won't include the utf8 encoding
//     fs.readFile('./images/pizza.jpg', function(errors, contents){
//         response.writeHead(200, {'Content-type': 'image/jpg'});
//         response.write(contents);
//         response.end();
//     })
//   }


// start app.js here
//
// const http = require('http');
// const fs = require('fs');
//
// const server = http.createServer( function(req, res){
//      console.log('(Requesting URL:..', req.url, '..)');
//
//      let file;
//
//      switch (req.url) {
//           case '/':
//                file = 'index.html'
//                break;
//           case '/cars':
//                file = 'cars.html'
//                break;
//           case '/cats':
//                file = 'cats.html'
//                break;
//           default:
//                file = '404.html'
//      }
//
//      if(req.url !== '404.html'){
//           fs.readFile(`views/${file}`, 'utf8',function(errors,contents){
//                res.writeHead(200,{'content-type':'text/html'});
//                res.write(contents);
//                res.end();
//           })
//      }
//      else {
//           fs.readFile(`${file}`,'utf8',function(errors,contents){
//                res.writeHead(404,{'content-type':'text/html'});
//                res.write(contents);
//                res.end( );
//           });
//      };
//
// });
//
// server.listen(5000)
//
// console.log('Server running...')
//
//
//
//





// I copied the platforms solution here because the way I was doing it, I got stuck and this solution provided insight on how to use functions in a practical sense. Also, this is the first time I have used switch statements. It didn't become clear until now how they can be really useful :)


const http = require('http'),
        fs = require('fs');

const server = http.createServer(function(request, response) {


  const splitURL = request.url.split('/'),
      fileType   = splitURL[1],
      file       = splitURL[2];
      console.log('split url',splitURL);
      console.log('split url 1', splitURL[1]);
      console.log('split url 2', splitURL[2]);
      console.log('filetype',fileType);
      console.log('file',file);

  switch (fileType) {
    case "styles":
      serveCSS(file, response);
      break;
    case "images":
      serveJPG(file, response);
      break;
    default:
      switch(fileType){
        case "cars":
          if (file === "new") {
            serveHTML("new.html", response);
          } else {
            serveHTML("cars.html", response);
          }
          break;
       case "cats":
          serveHTML("cats.html", response);
          break;
       case '':
          serveHTML('index.html', response);
          break;
        default:
          serve404(response);
      }
  }
});


function serveHTML(filename, response) {
  fs.readFile(`views/${filename}`, 'utf8', function(error, contents){
    if (error) { return serve404(response) }
    response.writeHead(200, {'Content-type' : 'text/html' });
    response.write(contents);
    response.end();
  });
}

function serveCSS(filename, response) {
  fs.readFile(`stylesheets/${filename}`, 'utf8', function(error, contents) {
    if (error) { return serve404(response) }
    response.writeHead(200, {'Content-type' : 'text/css' });
    response.write(contents);
    response.end();
  });
}

function serveJPG(filename, response) {
  fs.readFile(`images/${filename}`, function(error, contents) {
    if (error) { return serve404(response); }
    response.writeHead(200, {'Content-type' : 'image/jpg' });
    response.write(contents);
    response.end();
  });
}

function serve404(response){
  response.writeHead(404);
  response.end("File not found!");
}

server.listen(5000);
console.log("Running on 5000");
