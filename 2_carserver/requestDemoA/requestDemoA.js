'use strict';

const http = require('http');

const {port, host} = require('./config.json');

const server = http.createServer((req, res)=>{
    const urlData = new URL(`http//${host}:${port}${req.url}`);
    res.writeHead(200, {'Content-Type': 'application/json'});
    const {pathname} = urlData;
    console.log(pathname);
    res.end(JSON.stringify(urlData));
});

server.listen(port, host,
    ()=>console.log(`Server ${host}:${port} is running...`) );

