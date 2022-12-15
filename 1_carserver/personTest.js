'use strict';

const person = require('./person.json');

console.log(person);
console.log(person.firstname);
console.log(`${person.lastname}, ${person.firstname}`);

console.log(Object.entries(person));
console.log(Object.values(person));
console.log(Object.keys(person));

for (const [key, value] of Object.entries(person)){
    console.log(`${key}, ${value}`);
}