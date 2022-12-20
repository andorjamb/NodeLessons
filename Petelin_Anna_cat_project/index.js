'use strict';

const express = require('express');
const path = require('path');

const { port, host, storage } = require('./serverConfig.json');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pages'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//path to /storage/dataStorageLayer
const Datastorage = require(path.join(__dirname, storage.storageFolder, storage.dataLayer));

// new dataStorage class instance, imports data methods
const dataStorage = new Datastorage();


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'menu.html'))
})

app.get('/allCats', (req, res) => {
    dataStorage.getAllCats()
        .then(data => res.render('allCats', { result: data }))

})

app.get('/getCat', (req, res) => {
    res.render('getCat', {
        title: 'Get Cat',
        header1: 'GetCat',
        action: '/getCat'

    })
})

app.post('/getCat', (req, res) => {
    if (!req.body) return res.sendStatus(500);

    const catNumber = req.body.number;
    dataStorage.getOneCat(catNumber)
        .then(cat => res.render('catPage', { result: cat }))
        .catch(error => sendErrorPage(res, error));

});

app.get('/addCat', (req, res) =>
    res.render('form', {
        title: 'Add Cat',
        header1: 'Add a new cat',
        action: '/inputCat',
        number: { value: '', readonly: '' },
        name: { value: '', readonly: '' },
        breed: { value: '', readonly: '' },
        weightKg: { value: '', readonly: '' },
        yearOfBirth: { value: '', readonly: '' }
    }));

app.post('/inputCat', (req, res) => {
    if (!req.body) return res.statusCode(500);

    dataStorage.addCat(req.body)
        .then(status => sendStatusPage(res, status))
        .catch(error => sendErrorPage(res, error))
});

app.get('/updateCat', (req, res) =>
    res.render('form', {
        title: 'Update Cat',
        header1: 'Update Cat Data',
        action: '/update',
        number: { value: '', readonly: '' },
        name: { value: '', readonly: 'readonly' },
        breed: { value: '', readonly: 'readonly' },
        weightKg: { value: '', readonly: 'readonly' },
        yearOfBirth: { value: '', readonly: 'readonly' }
    }));

app.post('/update', (req, res) => {
    if (!req.body) return res.sendStatus(500);

    dataStorage.getOneCat(req.body.number)
        .then(cat =>
            res.render('form', {
                title: 'Update Cat',
                header1: 'Update Cat Data',
                action: '/updateCat',
                number: { value: cat.number, readonly: 'readonly' },
                name: { value: cat.name, readonly: '' },
                breed: { value: cat.breed, readonly: '' },
                weightKg: { value: cat.weightKg, readonly: '' },
                yearOfBirth: { value: cat.yearOfBirth, readonly: '' }
            })
        )
        .catch(error => sendErrorPage(res, error));
});

app.post('/updateCat', (req, res) => {
    if (!req.body) return res.statusCode(500);

    dataStorage.updateCat(req.body)
        .then(status => sendStatusPage(res, status))
        .catch(error => sendErrorPage(res, error))
});

app.get('/removeCat', (req, res) =>
    res.render('getCat', {
        title: 'Remove Cat',
        header1: 'Remove Cat',
        action: '/removeCat'
    })
);

app.post('/removeCat', (req, res) => {
    if (!req.body) return res.sendStatus(500);

    const catNumber = req.body.number;
    dataStorage.removeCat(catNumber)
        .then(status => sendStatusPage(res, status))
        .catch(error => sendErrorPage(res, error));

});




app.listen(port, host, () => {
    console.log(`cat server is listening on port ${port} on ${host} `)
});


function sendErrorPage(res, error, title = 'Error', header1 = 'Error') {
    sendStatusPage(res, error, title, header1);
}

function sendStatusPage(res, status, title = 'Status', header1 = 'Status') {
    return res.render('statusPage', { title, header1, status });
}
