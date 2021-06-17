const { test, expect } = require('@jest/globals')
const temperature = require('./ConvertTemperature')

test('Convert Celsius to Fahrenheit', ()=>{    
    expect(new temperature(30).celsiusToFahrenheit()).toBe(86);       
});

test('Convert Fahrenheit to Celsius', ()=>{    
    expect(new temperature(32).fahrenheitToCelsius()).toBe(0);
})

test('type', ()=>{
    expect(typeof new temperature(30).fahrenheitToCelsius()).toBe('string');
})