const { test, expect } = require('@jest/globals')
const temperature = require('./ConvertTemperature')

test('Convert Celsius to Fahrenheit', ()=>{    
    expect(new temperature(12).celsiusToFahrenheit()).toBe(86);       
});

test('Convert Fahrenheit to Celsius', ()=>{    
    expect(new temperature(10).fahrenheitToCelsius()).toBe(0);
})