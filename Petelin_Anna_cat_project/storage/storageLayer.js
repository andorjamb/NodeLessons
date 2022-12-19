'use strict';

const path = require('path');

const { key, adapterFile, storageFile } = require('./storageConfig.json');

const { readStorage, writeStorage } = require('./readerWriter');

const storageFilePath = path.join(__dirname, storageFile);

const { adapter } = require(path.join(__dirname, adapterFile))

async function getAllCatsFromStorage() {
    return readStorage(storageFilePath);
}

async function getCatFromStorage(number) {
    return (await readStorage(storageFilePath)).find(item => item[key] == number) || null;
}

async function addCatToStorage(newCat) {
    const storageData = await readStorage(storageFilePath);
    storageData.push(adapter(newCat));
    return await writeStorage(storageFilePath, storageData)
}

async function updateCatStorage(updatedCat) {
    const storageData = await readStorage(storageFilePath);
    const oldCat = storageData.find(item => item[key] == updatedCat[key]);
    if (oldCat) {
        Object.assign(oldCat, adapter(updatedCat));
        return await writeStorage(storageFilePath, storageData);
    }
    return false;
}

async function removeCatFromStorage(number) {
    const storageData = await readStorage(storageFilePath);
    const i = storageData.findIndex(item => item[key] == number);
    if (i < 0) return false;
    storageData.splice(i, 1);
    return await writeStorage(storageFilePath, storageData);
}



module.exports = {
    getAllCatsFromStorage,
    getCatFromStorage,
    addCatToStorage,
    updateCatStorage,
    removeCatFromStorage
} 