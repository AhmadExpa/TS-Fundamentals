"use strict";
let firstname = "ahmad";
firstname = firstname.toUpperCase();
// console.log(firstname);
let dob = "25";
let result = parseInt(dob);
// console.log(result);
let isValid = true;
// console.log(isValid);
// Array
let empList = ["ahmad", "ali"];
let depList = ["ahmad", "ali"];
let num = [1, 2, 3];
let stringOfNum = ["4", "2", "3"];
empList = empList.filter((emp) => emp.length > 3);
let depFinder = depList.find((dep) => dep === "ali");
let sum = num.reduce((acc, num) => acc + num, 0);
let stringNum = stringOfNum.reduce((acc, num) => acc + parseInt(num), 0);
let c = 1 /* Green */;
// console.log(c);
// tuple is a special type of array that allows you to specify the exact types of elements and their order.
let tuple;
tuple = ["ahmad", 25];
// console.log(tuple);
//  any type is a special type that can hold any kind of value. It effectively turns off type checking for that variable
let v0 = 12;
// console.log(v0);
// The void type is used when a function doesn't return any value. It signifies the absence of a return value.
function logMessage(message) {
    console.log(message);
}
// logMessage("Hello World!");
// The never type represents a function that never successfully completes. This means the function will either throw an error or run infinitely without returning any value.
// <----------------------------------------->
// function throwError(message: string): never {
//     throw new Error(message);
// }
// function infiniteLoop(): never {
//     while (true) {
//         // Looping forever
//     }
// }
// <----------------------------------------->
