// Create web server
// 1. Create http module
// 2. Create server
// 3. Listen to port
// 4. Create routes
// 5. Create response
// 6. Create a response for each route
// 7. Send response
// 8. Create a response for each request
// 9. Get the request url and method
// 10. Get the request headers
// 11. Get the request body
// 12. Get the request query

const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const method = req.method;
    const urlPath = url.parse(req.url, true);
    const path = urlPath.pathname;
    const query = urlPath.query;
    const headers = req.headers;
    const body = [];

    req.on('data', (chunk) => {
        body.push(chunk);
    });

    req.on('end', () => {
        const bodyBuffer = Buffer.concat(body).toString();
        console.log(bodyBuffer);
        console.log(method, path, query, headers);
        res.end('Hello from the server');
    });
});

server.listen(3000);