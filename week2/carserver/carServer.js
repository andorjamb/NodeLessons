'use strict';

const http = require('http');

const {port, host} = require('./config.json');

const storage = require('./carStorage');

const server = http.createServer((req, res)=>{
    const {
        pathname,
        searchParams
    } = new URL(`http://${req.headers.host}${req.url}`);
let resultHtml ='' ;
    if (pathname==='/cars'){
resultHtml = createCarsHtml(storage.getAllCars());
    }
    else {
res.end(resultHtml); //to change later
    }
});

server.listen(port, host,()=>console.log(`server running...`));

function createCarHtml(carArray){
    return `<pre>${carArray}</pre>`;
}