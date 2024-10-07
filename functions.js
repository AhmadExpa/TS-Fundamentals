"use strict";
// generic function
function add(num1, num2) {
    return num1 + num2;
}
// console.log(add(1, 2));
// <----------------------------------------->
// optional parameter
function addOptional(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
// console.log(addOptional(1, 2, 3));
// console.log(addOptional(1, 2));
// <----------------------------------------->
// required parameter
function addRequired(num1, num2, num3 = 0) {
    return num1 + num2 + num3;
}
// console.log(addRequired(1, 2, 3));
// console.log(addRequired(1, 2));
// <----------------------------------------->
// Rest Parameter
function addRest(num1, ...num2) {
    return num1 + num2.reduce((acc, num) => acc + num, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(addRest(1, ...numbers));
console.log(addRest(1, 2, 3, 4, 5));
// <----------------------------------------->
function getItems(items) {
    return new Array().concat(items);
}
let numArray = getItems([1, 2, 3, 4]);
let strArray = getItems(["ahmad", "ali"]);
console.log(numArray);
console.log(strArray);
