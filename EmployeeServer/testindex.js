'use strict';

const Datastorage = require('./storage/dataStorageLayer');

const storage = new Datastorage();


//testing
storage.getAll().then(console.log).catch(console.log);
storage.getOne(2)-then(console.log).catch(console.log);

(async ()=>{
    try{
        const result = await storage.getOne();
        console.log(result);
    }
    catch(error){
        console.log(err);
        if(err.code===storage.CODES.NOT_FOUND){
            console.log('resource missing');
        }
    }
}) 

try {
    const status = await storage.update({
        "id": 100,
        "firstname": "Leila",
        "lastname": "Hölkki",
        "department": "ict",
        "salary": 4000
    
    })
}