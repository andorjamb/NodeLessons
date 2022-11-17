'use strict';

const path = require('path');
const {read} = require('../library/utilities');
//note: paths should be parametrised, not hard-coded

const jsonPath = path.join(__dirname, 'icrecreams.json'); //gets data

const getAllFlavours = async () =>{
    try {
        const data = await read(jsonPath);
        const icecreams = await JSON.parse(data.fileData);
        return Object.keys(icecreams);
    }
    catch(err){
        return [];
    }
}

const hasFlavour = async flavour =>{
try{
    const data = await read(jsonPath);
    const icecreams = await JSON.parse(data.fileData);
    return Object.keys(icecreams).includes(flavour);
}
catch(err){
    return false;
}
}

const getIcecream = async flavour =>{
    try {
    const data = await read(jsonPath);
    const icecreams = await JSON.parse(data.fileData);
    return icecreams[flavour] || null;

    }
    catch(err){
        return null;
}
}

module.exports = { getAllFlavours, hasFlavour, getIcecream}