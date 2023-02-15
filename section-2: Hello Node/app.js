// This creates a web server using PORT 3000,
// and prints in console Server is running, and prints Hello world if we visit localhost:3000


//gets http package and file string package
const http = require('http');
const fs = require('fs');
const PORT = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello world!');
// });

// open index.html page
const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            fs.readFile('./index.html', (error, data) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            });
        break;

        //opens hello.html page
        case '/hello':
            fs.readFile('./hello.html', (error, data) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            })
        break;

        // It response 404 Not found if user they other paths than /hello and /,
        default:
            res.statusCode = 404
            res.setHeader('Content-Type', 'text/html');
            res.end('Not found!');
        break;
    }
});


// start the server
server.listen(PORT, () => {
    console.log('Server is running');
})