//  Decorators are special functions that can be applied to classes, methods, properties, or parameters to modify their behavior. They provide a way to attach additional metadata or functionality to these elements in a declarative way. Decorators are a form of "meta-programming" and can be thought of as annotations that change the behavior of the element they are applied to.

// Decorators in TypeScript are prefixed with the @ symbol and are placed directly above the element they modify.

// @decoratorName
// class MyClass {
//   @decoratorName
//   myMethod() {}
// }

// Decorator Types
// TypeScript supports different types of decorators:

// Class decorators
// Method decorators
// Accessor decorators
// Property decorators
// Parameter decorators

// Example: Class Decorator
// A class decorator takes a class constructor as its argument and can modify or replace it.

// typescript
// Copy code
// function simpleDecorator(constructor: Function) {
//   console.log("Class decorator called.");
// }

// @simpleDecorator
// class MyClass {
//   constructor() {
//     console.log("Class instantiated.");
//   }
// }

// let obj = new MyClass();
// // Output:
// // Class decorator called.
// // Class instantiated.
// In this example:

// The @simpleDecorator is applied to MyClass, and the decorator function simpleDecorator logs a message when the class is defined.
// Example: Method Decorator
// A method decorator can modify or log calls to methods in a class.

// typescript
// Copy code
// function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//   const originalMethod = descriptor.value;
//   descriptor.value = function(...args: any[]) {
//     console.log(`Method ${propertyKey} called with arguments: ${args}`);
//     return originalMethod.apply(this, args);
//   };
// }

// class MyClass {
//   @logMethod
//   greet(name: string) {
//     console.log(`Hello, ${name}!`);
//   }
// }

// const obj = new MyClass();
// obj.greet("Ahmad");
// // Output:
// // Method greet called with arguments: Ahmad
// // Hello, Ahmad!
// How Decorators Work
// Decorators are essentially functions that are invoked when the class, method, or property is defined. They can be used to:

// Modify class properties.
// Add logging or validation to methods.
// Change how values are assigned to properties.
// Decorator Factories
// Sometimes, you need a decorator that can accept arguments. In this case, you use a decorator factory, which is a function that returns a decorator.

// typescript
// Copy code
// function logMessage(message: string) {
//   return function(constructor: Function) {
//     console.log(message);
//   };
// }

// @logMessage("This is a log message for MyClass.")
// class MyClass {
//   constructor() {
//     console.log("MyClass instantiated.");
//   }
// }
// Use Cases for Decorators
// Decorators are widely used in:

// Frameworks like Angular: Angular uses decorators to define components, services, and other entities.
// Metadata annotation: Adding extra information to classes or properties that other parts of the codebase can access.
// Aspect-Oriented Programming (AOP): They allow separation of concerns like logging, validation, and authorization.
// Important Notes:
// Experimental feature: As of now, decorators are still an experimental feature in TypeScript, so they need to be enabled in your tsconfig.json by setting "experimentalDecorators": true.
// Syntax: Decorators are part of a future ECMAScript proposal, but they are widely used in TypeScript because of the popularity of frameworks like Angular.
// In summary, decorators in TypeScript are a powerful way to modify the behavior of classes, methods, and other elements. They offer a clean and declarative way to implement cross-cutting concerns like logging, validation, or dependency injection.