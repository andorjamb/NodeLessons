 'use strict'
 
 function adapt(item){
    return {
        id: +item.id,
        firstname: item.firstname,
        lastname: item.lastname,
        department: item.deparment,
        salary: +item.salary  //or: Number(item.salary)
    }
 }



module.exports = {adapt}