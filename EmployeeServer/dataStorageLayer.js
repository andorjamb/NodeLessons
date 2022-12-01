'use strict'

const {CODES, MESSAGES} = require('./statusCodes');

const { removeFromStorage,
    updateStorage,
    addToStorage,
    getFromStorage,
    getAllFromStorage} = require('./storageLayer');

//Datastorage class

module.exports = class Datastorage{ 
    get CODES(){
        return CODES;
    }

    getAll(){
        return getAllFromStorage();
    } //end getALl

    getOne(id){
        return new Promise(async(resolve, reject)=>{
             if (!id){
                reject(MESSAGES.NOT_FOUND ('---empty---'));
             }
             else {
                const result = await getFromStorage(id);
                if (result){
                    resolve(result);
                }
                else {
                    reject(MESSAGES.NOT_FOUND(id))
                }
             }
        });
    } //end of get

insert (employee){
    return new Promise(async (resolve, reject)=>{
    if (employee){
        if(!employee.id){
            reject(MESSAGES.NOT_INSERTED());
        }
        else if (await getFromStorage(employee.id)){
            reject(MESSAGES.ALREADY_IN_USE(employee.id))
        }
        else if(await addToStorage(employee)){
            resolve(MESSAGES.INSERT_OK(id));
        }
        else{
            reject(MESSAGES.NOT_INSERTED())M
        }
    }
    else {
        reject(MESSAGES.NOT_INSERTED());
    }
    });
} //end of insert

remove(id){
    return new Promise(async(resolve, reject)=>{
        if(!id){
            reject(MESSAGES.NOT_FOUND('---empty---'));
        }
        else if(await removeFromStorage(id)){
            resolve(MESSAGES.REMOVE_OK(id))
        }
        else {
            reject(MESSAGES.NOT_REMOVED(id));
        }
    })
}
       
    }
