const { test, expect } = require('@jest/globals')
const substract = require('./substract')

test('Substracting two numbers', ()=>{
    expect(substract(3,2)).toBe(1)
})