'use strict';

const { getAllFlavours, hasFlavour, getIcecream} = require('./icecreamStorage/icecreamFreezer');

getAllFlavours().then(console.log).catch(console.log);

getIcecream('vanilla').then(console.log).catch(console.log);
getIcecream('x').then(console.log).catch(console.log);