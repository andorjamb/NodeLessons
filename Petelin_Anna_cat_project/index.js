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
        title: 'Get',
        header1: 'Get',
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

app.get('/newCatForm', (req, res) =>
    res.render('form', {
        title: 'Add Cat',
        header1: 'Add a new cat',
        action: '/newCatForm',
        number: { value: '', readonly: '' },
        catname: { value: '', readonly: '' },
        breed: { value: '', readonly: '' },
        weight: { value: '', readonly: '' },
        yearOfBirth: { value: '', readonly: '' }
    }));

app.post('/newCatForm', (req, res) => {
    if (!req.body) return res.statusCode(500);

    dataStorage.insert(req.body)
        .then(status => sendStatusPage(res, status))
        .catch(error => sendErrorPage(res, error))
});

app.get('/updateCat', (req, res) =>
    res.render('form', {
        title: 'Update Cat',
        header1: 'Update Cat Data',
        action: '/updateCat',
        number: { value: '', readonly: '' },
        catname: { value: '', readonly: 'readonly' },
        breed: { value: '', readonly: 'readonly' },
        weight: { value: '', readonly: 'readonly' },
        yearOfBirth: { value: '', readonly: 'readonly' }
    }));

app.post('/updateCat', (req, res) => {
    if (!req.body) return res.sendStatus(500);

    dataStorage.getOne(req.body.id)
        .then(employee =>
            res.render('form', {
                title: 'Update Person',
                header1: 'Update Person data',
                action: '/update',
                id: { value: employee.id, readonly: 'readonly' },
                firstname: { value: employee.firstname, readonly: '' },
                lastname: { value: employee.lastname, readonly: '' },
                department: { value: employee.department, readonly: '' },
                salary: { value: employee.salary, readonly: '' }
            })
        )
        .catch(error => sendErrorPage(res, error));
});

app.post('/update', (req, res) => {
    if (!req.body) return res.statusCode(500);

    dataStorage.update(req.body)
        .then(status => sendStatusPage(res, status))
        .catch(error => sendErrorPage(res, error))
});

app.get('/removePerson', (req, res) =>
    res.render('getPerson', {
        title: 'Remove',
        header1: 'remove',
        action: '/removePerson'
    })
);

app.post('/removePerson', (req, res) => {
    if (!req.body) return res.sendStatus(500);

    const personId = req.body.id;
    dataStorage.remove(personId)
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
