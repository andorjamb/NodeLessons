'use strict';

const express = require('express');
const path = require('path');

const [host, port] = require('./serverConfig.json');
const app = express();

app.set('view engine', 'ejs');


app.get('/', (res,req)=>{
    res.sendFile(path.join(__dirname, 'menu.html', (error)=>{
        if(err) {console.log(error)}
        else {console.log('page sent')}

    }))
})

app.get('/allCats', (res,req)=> {
    
})


app.listen(port, host,()=>{
    console.log(`server is listening on port ${port} on ${host} `)
});