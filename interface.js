"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <--------------------------------->
// use interface as a type
let user = {
    id: 2,
    name: "ahmad",
    email: "a@a.com",
};
let empoyee = {
    id: 0,
    name: "ahmad",
    email: "a@a.com",
    salary: 2000,
};
// <--------------------------------->
// object destructuring
let { id: userId, name, email: userEmail } = user;
// console.log(userId, name, userEmail);
// <--------------------------------->
// array destructuring
let [user1, user2, ...restUsers] = [
    {
        id: 2,
        name: "ahmad",
        email: "a@a.com",
    },
    {
        id: 0,
        name: "ali",
        email: "ali@a.com",
        salary: 2000,
    },
    {
        id: 1,
        name: "mohammad",
        email: "m@a.com",
    },
    {
        id: 3,
        name: "hassan",
        email: "h@a.com",
    },
];
console.log(user1);
console.log(user2);
console.log(restUsers);
