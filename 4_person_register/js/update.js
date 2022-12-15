'use strict';

(function(){
let resultSet;
let resultSection;
let keyInput;
let searchValueInput;
let messageArea;

const showResultSection = ()=> resultSection.removeAttribute('class', 'hidden');
const hideResultSection = ()=> resultSection.setAttribute('class', 'hidden');
const showMessage =()=>messageArea.removeAttribute('class', 'hidden');
const hideMessage = ()=>messageArea.setAttribute('class', 'hidden');

document.addEventListener('DOMContentLoaded', init);

function init(){
    resultSet = document.getElementById('resultSet');
    resultSection = document.getElementById('resultSection');
    keyInput= document.getElementById('keyInput');
 searchValueInput = document.getElementById('searchValueInput');
 messageArea = document.getElementById('messageArea');

 document.getElementById('submit').addEventListener('click', submit);
 keyInput.addEventListener('focus', clear);
    
}

function clear(){
    keyInput.value='',
    searchValueInput.value='';
    hideMessage();
    hideResultSection();
}

async function submit(){
    const key = keyInput.value;
    const searchValue=searchValueInput.value;

    try {
        const uri = key?`/persons/${key}?${searchValue}`:'/persons';
        const result = await fetch(uri);
        const personData = await result.json();
        updatePage(personData);

    }
    catch(err){

    }
}

function showError(message){
    messageArea.innerHTML = `<p>${message}</p>`;
    hideResultSection();
    showMessage();
}

function updatePage(searchResult){
    if (searchResult.message){
        showError(searchResult.message);
    }
    else if (searchResult.length===0){
        showError('No person found');
    }
    else {
        let htmlString='';
        for(const person of searchResult){
            htmlString+=`<tr>
            <td>${person.firstname}</td>
            <td>${person.lastname}</td>
            <td>${person.age}</td>
            </tr>`
        }
        resultSet.innerHTML = htmlString;
        showResultSection();
        hideMessage();
    }
}



})();