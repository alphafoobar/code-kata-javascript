'use strict';

const systemUnderTest = require('../../src/kata06/anagrams');

test.skip('test', () => {
    expect.assertions(1);
    return expect(systemUnderTest('test')).resolves.toEqual(-1);
});
