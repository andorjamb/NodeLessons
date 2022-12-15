'use strict';

const path = require('path');

const { key, adapterFile, storageFile } = require('./storageConfig.json');

const { readStorage, writeStorage } = require('./readerWriter');

const storageFilePath = path.join(__dirname, storageFile);
