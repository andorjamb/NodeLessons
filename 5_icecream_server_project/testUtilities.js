'use strict';

const {read} = require('./library/utilities');

read('./icecreamStorage/icecreams.json')
.then(result=>console.log(result))
.catch(err=>console.log(err));

/* 

const filePath='./testUtilties.js';

read(filePath).then(console.log).catch(console.log); */
