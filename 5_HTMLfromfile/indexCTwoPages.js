'use strict';

const http = require('http');
const path = require('path');
const fs = require('fs');


const { port, host } = require('./config.json');
const homePath=path.join(__dirname,'home.html');
const pageAPath = path.join(__dirname, 'pageA.html');

const server = http.createServer(async (req,res)=>{
    const{pathname} = new URL(`http://${req.headers.host}$req.url}`);
    const route = decodeURIComponent(pathname);

    if(route==='/'){
        sendFile(res, homePath);}
        else if (route==='/pageA'){
            sendFile(res, pageAPath);
            

        }
        else if (route.startsWith('/styles')){
            sendFile(res, path.join(__dirname, route), 'text/css');

        }
        else {
            res.statusCode = 404;
            res.end('Error: page not found');
        }
   
})


server.listen(port,host, ()=>console.log('server is listening on port ${port}'));

async function sendFile(res, filePath, contentType='text/html') {
    try
    {
    const data = await fs.promises.readFile(filePath, 'utf8');
    res.writeHead(200,{
        'Content-Type': contentType,
        'Content-Length': Buffer.byteLength(data, 'utf8')

}); res.end(data)
}
catch(err){
    res.statusCode=404;
    res.end(err.message);
}}
