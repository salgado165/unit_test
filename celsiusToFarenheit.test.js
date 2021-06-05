const { test, expect } = require('@jest/globals')
const temperature = require('./celsiusToFarenheit')

test('Convertin Celsius to Farenheit', ()=>{    
    expect(new temperature(30).celsiusToFarenheit()).toBe(86);       
});

test('Convert Farenheit to Celsius', ()=>{    
    expect(new temperature(32).farenheitToCelsius()).toBe(0);
})