// class
class Employee {
  #id!: number; // Private
  protected name!: string; // Protected ???
  address!: string; // Public
  constructor(
    id: number,
     name: string // Parameterized Constructor
  ) {
    this.#id = id;
    this.name = name;
  }
  getNameWithAddress() {
    // Method
    return this.name + " stay at " + this.address;
  }
  get id() {
    // Getter
    return this.#id;
  }
  set id(id: number) {
    // Setter
    this.#id = id;
  }

  static getEmployeeCount() {
    return 10;
  }
}
class Manager extends Employee {
  salary!: number;
  constructor(id: number, name: string) {
    super(id, name);
  }
}

// Creating Instance of the class to access its method and properties

let emp = new Employee(145, "Emp");
emp.address = "highway 15";
console.log(emp.getNameWithAddress());

let manager = new Manager(0, "Manager");
manager.address = "Glassgow";
console.log(manager.getNameWithAddress());

// without creating instance
console.log(Employee.getEmployeeCount());


import { Login } from "./interface";

// let user: Login = {
//   idNo: 2,
//   name: "ahmad",
//   email: "a@a.com",
// };

// class User implements Login {
//   idNo!: number;
//   name!: string;
//   email!: string;
//   constructor(idNo: number, name: string, email: string) {
//     this.idNo = idNo;
//     this.name = name;
//     this.email = email;
//   }
// }

// let user1 = new Use r(2, "ahmad", "a@a.com");
// console.log(user1.login(2, "ahmad", "a@a.com"));