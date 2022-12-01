'use strict'

const fs = require('fs').promises;

async function readStorage(storageFile){
    try {
        const data = await fs.readFile(storageFile, 'utf8');
        return JSON.parse(data);
    }
    catch(err){
        console.log(err.message); //for debugging
        return [];
    }
}

async function writeStorage(storageFile, data){
    try {
        await fs.writeFile(storageFile, JSON.stringify(data, null,4), {
            encoding: 'utf8',
            flag: 'w'
        });
        return true;

    }
    catch(err) {
        console.log(err);
        return false;

    }
}

writeStorage('.test.json', {a:1,b:'text'}).then(console.log).catch(console.log);
//for testing:
//readStorage('./employee.json').then(console.log).catch();

module.exports={ readStorage, writeStorage }