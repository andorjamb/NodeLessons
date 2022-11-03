'use strict';

const { getAllModels } = require('./carStorage');

console.log(getAllModels());

const typesArray = ['Fast GT', 'Errare', 'MbW'];
console.log(`<li>${typesArray.join('</li><li>')}</li>`);