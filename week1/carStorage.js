'use strict';

const cars = require('./cars.json');

function getAllCars(){
    return cars;
}

function getAllModels(){
    let array = [];
    for (const car of cars){   
        if (!array.includes(cars.model)){
            array.push(car.model);
        }
    }
    return array;
}

for (const car of cars){
    if (car.model == "Fast GT"){
        console.log(car);
    }
}

function getCar(key, value) {
    const found=[];
    if (key && value){
for(const car of cars){
    if (car[key]===value){
        found.push(car);
    }
}
    }
    return found;
}


module.exports = { getAllCars, getAllModels, getCar}