"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Errors {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }
    timeoutError() {
        console.log(`${this.code}: ${this.message}`);
    }
}
exports.default = Errors;
class fiveOhFour extends Errors {
    constructor() {
        super(504, 'Sorry, we were unable to fetch your documents. we will try again soon.');
    }
}
setTimeout(() => {
    const error = new fiveOhFour();
    error.timeoutError();
}, 5000);
