const { test, it, expect } = require('@jest/globals')
const sum = require('./sum')

test('Properly adds two numbers', ()=>{
    expect(sum(1,2)).toBe(3)
})