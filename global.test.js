import {stringLength, reversestring, calculator, capitalize} from './string.js';

describe ('test of String functions', () => {
test('check the length of a string', () => {
    expect(stringLength('hello')).toBe(5);
    expect(stringLength('greeting')).toBe(8);
});

test('check if length of string  > 1 and < 11', () => {
    expect(stringLength('hello')).toBeTruthy();
    expect(stringLength('greeting for myself')).toBeFalsy();
});

test('string should be reverse', () => {
    expect (reversestring('hello')).toBe('olleh');
    expect (reversestring('greeting for myself')).toBe('flesym rof gniteerg');
});

test('First letter should be capital', () =>{
    expect (capitalize('oscar')).toBe('Oscar');
});

});

describe('test of calculator functions', () => {
    test ('adding two elements', () =>{
        expect (calculator.add(5, 5)).toBe(10);
        expect (calculator.add(29, 30)).toBe(59);
        expect (calculator.add(15, 25)).toBe(40);
        expect (calculator.add(27, 50)).toBe(77);
        expect (calculator.add(1055, 1855)).toBe(2910);
    });
    test ('subtracting two elements', () =>{
        expect (calculator.subtract(10, 5)).toBe(5);
        expect (calculator.subtract(20, 5)).toBe(15);
        expect (calculator.subtract(30, 15)).toBe(15);
        expect (calculator.subtract(40, 10)).toBe(30);
    });
    test ('multiplying two elements', () =>{
        expect (calculator.multiply(10, 5)).toBe(50);
        expect (calculator.multiply(11, 5)).toBe(55);
        expect (calculator.multiply(3, 15)).toBe(45);
        expect (calculator.multiply(40, 10)).toBe(400);
    });
    test ('dividing two elements', () =>{
        expect (calculator.divide(10, 5)).toBe(2);
        expect (calculator.divide(11, 5)).toBe(2.2);
        expect (calculator.divide(3, 15)).toBe(0.2);
        expect (calculator.divide(40, 10)).toBe(4);
    });
});