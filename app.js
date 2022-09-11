"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// now the WithTemplate decorator will only execute when a class object is instantiated
function WithTemplate(template, hookId) {
    console.log('WithTemplate factory');
    return function (ogConstructor) {
        return class extends ogConstructor {
            // can use '_' in place of args to ignore ts warning no unused parameter
            constructor(...args) {
                super();
                console.log('WithTemplate Rendering');
                const el = document.getElementById(hookId);
                if (el) {
                    el.innerHTML = template;
                    el.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
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
