//functions for data handling
'use strict';

const { CODES, MESSAGES } = require('./statusCodes');

const {
    getAllCatsFromStorage,
    getCatFromStorage,
    addCatToStorage,
    updateCatStorage,
    removeCatFromStorage
} = require('./storageLayer');

module.exports = class Datastorage {
    get CODES() {
        return CODES;
    }

    getAllCats() {
        return getAllCatsFromStorage();
    }

    getOneCat(number) {
        return new Promise(async (resolve, reject) => {
            if (!number) {
                reject(MESSAGES.CAT_NOT_FOUND('(error: no number)'))
            }
            else {
                const result = await getCatFromStorage(number);
                if (result) {
                    resolve(result);
                }
                else {
                    reject(MESSAGES.CAT_NOT_FOUND(number))
                }
            }
        })

    }

    addCat(cat) {

    }

    updateCat(cat) { }

    removeCat(number) { }
}





