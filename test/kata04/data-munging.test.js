'use strict';

const {weather, football} = require('../../src/kata04/data-munging');

test.skip('weather test', () => {
    expect.assertions(1);
    return expect(weather('filename')).resolves.toEqual(-1);
});

test.skip('football test', () => {
    expect.assertions(1);
    return expect(football('filename')).resolves.toEqual(-1);
});
