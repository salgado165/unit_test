const { test, expect } = require('@jest/globals')
const celsiusToFarenheit = require('./celsiusToFarenheit')

test('Convertin Celsius to Farenheit', ()=>{
    expect(celsiusToFarenheit(30)).toBe(86);    
});