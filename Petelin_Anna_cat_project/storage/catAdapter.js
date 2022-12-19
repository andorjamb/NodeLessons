'use strict';

function adapter(cat) {
    return {
        number: +cat.number,
        name: cat.name,
        breed: cat.breed,
        weightKg: +cat.weightKg,
        yearOfBirth: +cat.yearOfBirth

    }
}

module.exports = { adapter }