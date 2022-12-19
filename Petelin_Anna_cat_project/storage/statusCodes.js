'use strict';

const CODES = {
    PROGRAM_ERROR: 0,
    CAT_NOT_FOUND: 1,
    CAT_NOT_INSERTED: 2,
    CAT_NOT_UPDATED: 3,
    CAT_NOT_REMOVED: 4,
    ALREADY_IN_USE: 5,
    CAT_INSERTED: 6,
    CAT_UPDATED: 7,
    CAT_REMOVED: 8
}


const MESSAGES = {
    PROGRAM_ERROR: () => ({
        message: `Program error`,
        code: CODES.PROGRAM_ERROR,
        type: 'error'
    }),
    CAT_NOT_FOUND: (number) => ({
        message: `Cat number ${number}  not found`,
        code: CODES.CAT_NOT_FOUND,
        type: 'error'
    }),
    CAT_NOT_INSERTED: () => ({
        message: `Cat was not inserted`,
        code: CODES.CAT_NOT_INSERTED,
        type: 'error'
    }),
    CAT_NOT_UPDATED: (number) => ({
        message: `Cat number ${number} was not updated`,
        code: CODES.CAT_NOT_UPDATED,
        type: 'error'
    }),
    CAT_NOT_REMOVED: (number) => ({
        message: `Cat number ${number} was not removed`,
        code: CODES.CAT_NOT_REMOVED,
        type: 'error'
    }),
    ALREADY_IN_USE: (number) => ({
        message: `Cat number ${number} is already in use`,
        code: CODES.ALREADY_IN_USE,
        type: 'error'
    }),
    CAT_INSERTED: (number) => ({
        message: `Cat number ${number} successfully inserted`,
        code: CODES.CAT_INSERTED,
        type: 'info'
    }),
    CAT_UPDATED: (number) => ({
        message: `Cat number ${number} uccessfully updated`,
        code: CODES.CAT_UPDATED,
        type: 'info'
    }),
    CAT_REMOVED: (number) => ({
        message: `Cat number ${number} successfully removed`,
        code: CODES.CAT_REMOVED,
        type: 'info'
    }),
}

module.exports = { CODES, MESSAGES }

