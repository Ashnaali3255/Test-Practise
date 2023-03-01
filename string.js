export const stringLength = (string) =>  {
    if(string.length > 1 && string.length<11) return string.length;
    return false;
    }; 
 export const reversestring = (string) => string.split('').reverse().join('');
 export const calculator = {
    add: (a, b) =>{
    return a+b;
    },
    subtract: (a, b) =>{
        return a-b;
    },
    multiply: (a, b) =>{
        return a*b;
    },
    divide: (a, b) =>{
        return b == 0 ? null : a/b ;
    },
 };

 export const capitalize = (string) => string[0].toUpperCase() + string.slice(1);
 
export default {stringLength, reversestring, calculator, capitalize};