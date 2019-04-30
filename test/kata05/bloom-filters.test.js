'use strict';

const {hashOne, hashTwo, hashThree} = require('../../src/kata05/bloom-filters');

test.skip('hash one', () => {
    expect.assertions(1);
    return expect(hashOne('test', 10)).resolves.toEqual(-1);
});

test.skip('hash two', () => {
    expect.assertions(1);
    return expect(hashTwo('test', 10)).resolves.toEqual(-1);
});

test.skip('hash three', () => {
    expect.assertions(1);
    return expect(hashThree('test', 10)).resolves.toEqual(-1);
});
