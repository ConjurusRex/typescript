"use strict";
// type function
// type AddFN = (a: number, b: number) => number;
let add;
add = (a, b) => { return a + b; };
class Person {
    constructor(name) {
        this.name = name;
        this.age = 30;
        if (name) {
            this.name = name;
        }
        else {
            this.name = 'person';
        }
    } // public name?: string -> can have optional properties in classes
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user;
user = new Person('josh');
user.greet('Hi there,');
console.log(user);
let user2 = new Person();
user2.greet('Hi there,');
