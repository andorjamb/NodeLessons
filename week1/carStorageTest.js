'use strict';

const {
    getAllCars,
    getAllModels,
    getCar }
 = require('./carStorage');

 console.log(`Àll available models: \n\t${getAllModels().join('\n\t')}`);
 console.log(getAllCars());
 console.log(getCar('model', 'Fast GT'));