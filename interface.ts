// creating interface
export interface IUser {
  id: number;
  name: string;
  age?: number;
  email: string;
}

// <--------------------------------->

// use interface as a type
let user: IUser = {
  id: 2,
  name: "ahmad",
  email: "a@a.com",
};
// console.log(user);

// <--------------------------------->

// extending interface
interface IEmp extends IUser {
  salary: number;
}

let empoyee: IEmp = {
  id: 0,
  name: "ahmad",
  email: "a@a.com",
  salary: 2000,
};

// console.log(empoyee);

// <--------------------------------->

// optional properties
export interface Login {
  // ???
  login(): IUser;
}

// <--------------------------------->

// object destructuring
let { id: userId, name, email: userEmail } = user;
// console.log(userId, name, userEmail);

// <--------------------------------->

// array destructuring

let [user1, user2, ...restUsers]: IUser[] = [
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
