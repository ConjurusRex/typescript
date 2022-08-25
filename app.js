"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// decorator factory function - allows passing values to decorator function
function Logger(loggerMsg) {
    return function (constructor) {
        console.log(loggerMsg);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    // can replace constructor with _ to tell typescript to ignore 'value is never read'
    return function (constructor) {
        const el = document.getElementById(hookId);
        const person = new constructor();
        if (el) {
            el.innerHTML = template;
            // ! -> we are sure to have an h1 el
            el.querySelector('h1').textContent = person.name;
        }
    };
}
// @Logger('this is a Logger message')
let Person = class Person {
    constructor() {
        this.name = 'rex';
        console.log('created person obj');
    }
};
Person = __decorate([
    WithTemplate('<h1>WithTemplate: <i>a decorator factory function</i></h1>', 'app')
], Person);
const p = new Person();
