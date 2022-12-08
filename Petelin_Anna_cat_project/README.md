# Cat Project API Guide

## Public API

### dataStorageLayer.js

* function getAll()  -  returns array of all cats (or empty array)

* function getOne(cat.id)  - returns one cat object, by id (or: CAT_NOT_FOUND)

* function insert(newCat) - adds a new cat object to the array (return CAT_INSERTED or error code: CAT_NOT_INSERTED)

* function update(updatedCat)  - modifies a cat object in the array (returns CAT_UPDATED or error code: CAT_NOT_UPDATED)

* function remove(cat.id)  - removes a cat object from the array (returns CAT_REMOVED or error codes: CAT_NOT_FOUND or CAT_NOT_REMOVED)

## Private API