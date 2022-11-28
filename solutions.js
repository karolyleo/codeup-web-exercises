"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
function isTrue(data){  //Question 1
    return (data === true) ? true : false;
}
function isFalse(data){ // Question 2
    return data === false ? true : false;
}
function not(data){ //Question 3
    return !data;
}
function addOne(data){ //Question 4
    return parseFloat(data) + 1;
}
function isEven(data){ //Question 5
    if (data === false){
        return false;
    }
    return (data % 2) === 0;
}
function isIdentical(data1, data2){ //Question 6
    return (data1===data2)?true:false;
}
function isEqual(data1, data2){ //Question 7
    return (data1==data2)?true:false;
}
function or(boolean1,boolean2){ //Question 8
    return (boolean1 || boolean2);
}
function and(input1, input2){ //Question 9
    return (input1 && input2);
}
function concat(string1,string2){ //Question 10
    return string1 + '' + string2;
}