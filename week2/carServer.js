'use strict';

const http = require('http');

const storage = require('../week1/carStorage');

const port=3000;
const host = 'localhost';
const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.end(createHtmlPage(storage.getAllCars()));
});

server.listen(port, host, 
    ()=>console.log(`Server is running...`));

function createHtmlPage(cars){
    let htmlString=`<!DOCTYPE HTML>
    <HTML><head>
    <meta charset="utf-8">
    <title>Car Data</title>
    <style>
    h1{color: green;}
    </style>
    </head>
    <body>
    <h1>Cars</h2>`;
    for (const car of cars){
        htmlString += `<h2>${car.model}: ${car.licence}`

    }
    htmlString+=`</tbody>
    </table>`  
}
htmlString+=`</body>
    </html>`
return htmlString;