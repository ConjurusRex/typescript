"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// decorator function for class properties
function Log(target, propName) {
    console.log('Property Decorator');
    console.log('Property target: ', target); // prototype
    console.log('Property name: ', propName);
}
// decorator function for class accessors (get/set)
function Log2(target, accessorName, propDescription) {
    console.log('Accessor Decorator');
    console.log('Accessor target: ', target);
    console.log('Accessor name: ', accessorName);
    console.log('Property Descriptor: ', propDescription); // get: undefined, set: price(val)
}
// decorator function for class method
function Log3(target, methodName, propDescription) {
    console.log('Method Decorator');
    console.log('Method target: ', target);
    console.log('Method name: ', methodName);
    console.log('Property Descriptor: ', propDescription); // value, writable
}
// decorator function for method parameter
function Log4(target, methodName, paramPosition) {
    console.log('Parameter Decorator');
    console.log('Parameter target: ', target);
    console.log('Method name: ', methodName);
    console.log('Parameter Position: ', paramPosition); // 0
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('price must be greater than 0');
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log // executes when class constructor function initializes the prop
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
