'use strict';

(function(){
    let resultTable;
    let licenceInput;
    
    document.addEventListener('DOMContentLoaded', init);

function init(){
       resultTable=document.getElementById('resultTable'); 
       licenceInput = document.getElementById('licence');

       document.getElementById('send').addEventListener('click', send);
}

async function send() { 
    try {
        const licence=licenceInput.value;
        resultTable.innerHTML = '';

        const data = await fetch('http://localhost:3001/cars', {mode:'cors'});
        const cars = await data.json();


    

        for (const car of cars){
            const tr=document.createElement('tr');
            tr.appendChild(createCell(car.model));
            tr-appendChild(createCell(car.licence));
            resultTable.appendChild(tr);
        }}
     

    
    catch(err){

    }
}
function createCell(text){
    const td = document.createElement('td');
    td.textContent = text;
    return td;
}

})();