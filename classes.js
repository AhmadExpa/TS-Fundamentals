"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
// class
class Employee {
    constructor(id, name // Parameterized Constructor
    ) {
        _Employee_id.set(this, void 0); // Private
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
    }
    getNameWithAddress() {
        // Method
        return this.name + " stay at " + this.address;
    }
    get id() {
        // Getter
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set id(id) {
        // Setter
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    static getEmployeeCount() {
        return 10;
    }
}
_Employee_id = new WeakMap();
class Manager extends Employee {
    constructor(id, name) {
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
