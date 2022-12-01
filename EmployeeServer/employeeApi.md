### Public API

#### dataStorageLayer.js
-   getAll()
    -   returns an array of all employees / []
-   getOne()
    -   returns an employee object / NOT_FOUND
-   insert(newEmployee)
    -   returns INSERT_OK / NOT_INSERTED

        - returns an array of status codes


### Private API


#### readerWriter.js

-   readStorage(storageFile)
    -returns an array of employees / []

-   writeStorage(storageFile,data)
    - returns true/false

#### storageLayer.js
-   getAllFromStorage()
    - returns an array of employees / []

-   getFromStorage(id)
    -   returns an employee object / null

-   addToStorage(newEmployee)
    -   returns true / false

-   updateStorage(updatedEmployee)
    -   returns true/false

- removeFromStorage(id)
    -   returns true / false


#### statusCodes.js



```js
const CODES={
    PROGRAM_ERROR:0,
    NOT_FOUND: 1,
    INSERT_OK: 2,
    ...
}
```
The format of a status / error message is:


```js
const MESSAGES={
    PROGRAM_ERROR:()=> ({
        message: 'Sorry! Error encountered',
        code: CODES.PROGRAM_ERROR,
        type: 'error'
    }),
    NOT_FOUND: id=>({
        message: `No employee found with id ${id}`,
        code: CODES.NOT_FOUND,
        type: 'error'
    }),
    INSERT_OK: id=>({
        message: `Employee was inserted`,
        code: CODES.INSERT_OK,
        type: 'info'
    })
  
    ...
}
```

Status types are `error` or `info`

