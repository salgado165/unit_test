const { test, expect } = require('@jest/globals')
const temperature = require('./celsiusToFarenheit')

let convert = new temperature(30);

test('Convertin Celsius to Farenheit', ()=>{    
    expect(convert.celsiusToFarenheit()).toBe(86);       
});


let conversion = new temperature(32);
test('Convert Farenheit to Celsius', ()=>{    
    expect(conversion.farenheitToCelsius()).toBe(0);
})