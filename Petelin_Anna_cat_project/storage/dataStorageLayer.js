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
        return new Promise(async (resolve, reject) => {
            if (cat) {
                if (!cat.number) {
                    reject(MESSAGES.CAT_NOT_INSERTED());
                }
                else if (await getCatFromStorage(cat.number)) {
                    reject(MESSAGES.ALREADY_IN_USE(cat.number))
                }
                else if (await addCatToStorage(cat)) {
                    resolve(MESSAGES.CAT_INSERTED(cat.number))
                }
                else {
                    reject(MESSAGES.CAT_NOT_INSERTED());
                }
            }
            else {
                reject(MESSAGES.CAT_NOT_INSERTED());
            }
        });

    }

    updateCat(cat) {
        return new Promise(async (resolve, reject) => {
            if (cat) {
                if (await updateCatStorage(cat)) {
                    resolve(MESSAGES.CAT_UPDATED(cat.number));
                }
                else {
                    reject(MESSAGES.CAT_NOT_UPDATED());
                }
            }
            else {
                reject(MESSAGES.CAT_NOT_UPDATED());
            }
        });
    }

    removeCat(number) {
        return new Promise(async (resolve, reject) => {
            if (!number) {
                reject(MESSAGES.CAT_NOT_FOUND('---empty---'));
            }
            else if (await removeCatFromStorage(number)) {
                resolve(MESSAGES.CAT_REMOVED(number));
            }
            else {
                reject(MESSAGES.CAT_NOT_REMOVED(number));
            }
        });
    }
}





