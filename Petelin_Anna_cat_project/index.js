'use strict';

const express = require('express');
const path = require('path');

const [host, port] = require('./serverConfig.json');
const App = express();

App.get('/', (res,req)=>{
    res.sendFile(path.join(__dirname, 'menu.html'))
})


App.listen(port, host,()=>{
    console.log(`server is listening on port ${port} on ${host} `)
});