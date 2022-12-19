# Cat Project API Guide

## Cat Data storage format


## Petelin_Anna_cats.json

Cat number is a unique identifier.

```json
[
    {
        "id":1,
        "firstname":"Leila",
        "lastname":"Hökki",
        "department":"ict",
        "salary":4000
    },
    {
        "id":2,
        "firstname":"Matt",
        "lastname":"River",
        "department":"ict",
        "salary":4000
    }
]
```

## Public API - methods from Datastorage Class

### dataStorageLayer.js

* function getAll()  -  returns array of all cats (or empty array)

* function getOne(cat.id)  - returns one cat object, by id (or: CAT_NOT_FOUND)

* function insert(newCat) - adds a new cat object to the array (return CAT_INSERTED or error code: CAT_NOT_INSERTED)

* function update(updatedCat)  - modifies a cat object in the array (returns CAT_UPDATED or error code: CAT_NOT_UPDATED)

* function remove(cat.id)  - removes a cat object from the array (returns CAT_REMOVED or error codes: CAT_NOT_FOUND or CAT_NOT_REMOVED)

*   getters for status codes
     returns an array of status codes

## Private API


#### readerWriter.js

* readStorage(storageFile)
    returns an array of cats or [empty array]

*   writeStorage(storageFile, data)
     returns true/false

#### storageLayer.js
-   getAllCatsFromStorage()
    -   returns an array of all cats / []

-   getCatFromStorage(number)
    -   returns a single cat object / null

-   addCatToStorage(newCat)
    -   returns true / false

-   updateCat(updatedCat)
    -   returns true / false

-   removeCatFromStorage(number)
    -   returns true / false

#### statusCodes.js

status types are `error` or `info`


```js
const CODES={
    PROGRAM_ERROR:0,
    CAT_NOT_FOUND:1,
    CAT_NOT_INSERTED:2,
    ...
}
```

Status/error message format:

```js
const MESSAGES = {
    PROGRAM_ERROR: () => ({
        message: `Program error`,
        code: CODES.PROGRAM_ERROR,
        type: 'error'
    }),
    CAT_NOT_FOUND: () => ({
        message: `Cat number ${number}  not found`,
        code: CODES.CAT_NOT_FOUND,
        type: 'error'
    }),
    CAT_NOT_INSERTED: () => ({
        message: `Cat was not inserted`,
        code: CODES.CAT_NOT_INSERTED,
        type: 'error'
    }),
}
```
