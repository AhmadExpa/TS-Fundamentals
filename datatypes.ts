let firstname: string = "ahmad";
firstname = firstname.toUpperCase();
// console.log(firstname);

let dob = "25";
let result = parseInt(dob);
// console.log(result);

let isValid: boolean = true;
// console.log(isValid);

// Array

let empList: string[] = ["ahmad", "ali"];
let depList: Array<string> = ["ahmad", "ali"];
let num: number[] = [1, 2, 3];
let stringOfNum: string[] = ["4", "2", "3"];

empList = empList.filter((emp) => emp.length > 3);
let depFinder = depList.find((dep) => dep === "ali");
let sum: number = num.reduce((acc, num) => acc + num, 0);
let stringNum: number = stringOfNum.reduce(
  (acc, num) => acc + parseInt(num),
  0
);

// <------------------------------------------------------------->
// console.log(empList);
// console.log(depFinder);
// console.log(sum);
// console.log(stringNum);
// <------------------------------------------------------------->

// Enum  (short for "enumeration") is a way to define a collection of named constant values. It allows you to assign friendly names to numeric or string values

const enum Color {
  Red,
  Green,
  Blue,
}

let c: Color = Color.Green;
// console.log(c);

// tuple is a special type of array that allows you to specify the exact types of elements and their order.

let tuple: [string, number];
tuple = ["ahmad", 25];
// console.log(tuple);

//  any type is a special type that can hold any kind of value. It effectively turns off type checking for that variable

let v0: any = 12;
// console.log(v0);

// The void type is used when a function doesn't return any value. It signifies the absence of a return value.
function logMessage(message: string): void {
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
