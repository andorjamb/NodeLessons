'use strict';

(function(){
document.addEventListener('DOMContentLoaded', init);

async function init(){
    try {
        const data = await fetch('http://localhost:3001/cars', {mode:'cors'});
        const cars = await data.json();

        const resultTable=document.getElementById('resultTable');

        for (const car of cars){
            const tr=document.createElement('tr');
            tr.appendChild(createCell(car.model));
            tr-appendChild(createCell(car.licence));
            resultTable.appendChild(tr);
        }

    }
    catch(err){

    }
}
function createCell(text){
    const td = document.createElement('td');
    td.textContent = text;
    return td;
}

})();