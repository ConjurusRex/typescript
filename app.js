"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(loggerMsg) {
    console.log('Logger factory');
    return function (constructor) {
        console.log(loggerMsg);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    console.log('WithTemplate factory');
    return function (constructor) {
        console.log('WithTemplate Rendering');
        const el = document.getElementById(hookId);
        const person = new constructor();
        if (el) {
            el.innerHTML = template;
            el.querySelector('h1').textContent = person.name;
        }
    };
}
// decorators run in bottom-top order (WithTemplate then Logger)
// factories run in top-bottom order (Logger then WithTemplate)
let Person = class Person {
    constructor() {
        this.name = 'rex';
        console.log('created person obj');
    }
};
Person = __decorate([
    Logger('Logger Activated'),
    WithTemplate('<h1>WithTemplate: <i>a decorator factory function</i></h1>', 'app')
], Person);
const p = new Person();
