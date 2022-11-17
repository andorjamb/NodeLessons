'use strict';

const http = require('http');

const path = require('path');
const { hasFlavour } = require('./icecreamStorage/icecreamFreezer');
const { isIn } = require('./library/utilities');

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

const {
    read,
    send,
    sendJson,
    sendError,
    inIn
} = require(path.join(__dirname, 'library', 'utilities.js'));

const {
    getAllFlavours,
    hasFlavour,
    getIcecream
} = require(path.join(__dirname, 'icecreamStorage', 'icecreamFreezer.js'));

const resourceRoutes = ['/favicon', '/styles/', '/js/', '/images/'];
const homePath = path.join(__dirname, 'home.html');

const server = http.createServer(async (req,res)=>{
const {pathname} = new URL(`https://${req.headers.host}${req.url}`);
const route = decodeURIComponent(pathname);

try{
    if(route==='/'){
        const result=await read(homePath);
        send(res, result);
        //send(res,await read(homePath))
    }
    else if(isIn(route, ...resourceRoutes)){
        const result = await read(path.join(__dirname, route));
        send(res,result);
    }
    else if (route === '/all') {
        const flavours  =await getAllFlavours();
        sendJson(res, flavours);
        //sendJson(res, await getAllFlavours())
    }

    else if(isIn(route, '/icecreams/')){
        
    }
    const pathParts=route.split('/');
    if(pathParts.length>2){
        const icecreamFlavour = pathParts[2];
        if(await hasFlavour(icecreamFlavour)){

        }
    }

    else {
        sendError(res, 'Icecream not Found');
    }
}
catch(err){
    sendError(res,error)
}}
)

server.listen(port,host, ()=>console.log(``))