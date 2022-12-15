'use strict';

const http = require('http');

const{port, host} = require('./config.json');
const server = http.createServer((req, res)=>{
    const {pathname, search, serachParams} = new URL(`http://${req.headers.host}${req.url}`);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write(`<!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>Request Object</title>
    </head>
    <body>
    <h1>Request Info</h1>
    <h2>Headers</h2>
    <pre>${JSON.stringify(req.headers,null,4)}</pre>
    <h2>Host: ${request.headers.host}</h2>
    <h2>Agent:</h2>
    <h2>Accept Language: ${req.headers['accept-language']}</h2>
    <h2>Method:</h2>

    </body>
    </html>
    `);
    res.end();
});

server.listen(port, host, ()=>console.log(`Server ${host}:${port} is serving...`))