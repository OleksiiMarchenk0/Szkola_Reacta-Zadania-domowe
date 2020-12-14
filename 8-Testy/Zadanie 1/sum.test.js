/**-----------TESTOWANIE APLIKACJI-ZADANIE 1--------------- */

const { expect } = require('@jest/globals');
const sum = require('./sum');

test('propery adds two numbers',()=>{
expect(sum(1,2)).toBe(3)
});