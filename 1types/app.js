var fn = function (num, num2) {
    return num + num2;
};
// let num: number; -> do this for unassigned variables
var num = 1;
var num2 = 1;
var res = fn(num, num2);
// console.log(res);
// let worker: {
//   name: string;
//   age: number;
//   likes: string[]
// } = {
var worker = {
    name: 'josh',
    age: 31,
    likes: ['music', 'code']
};
// let stuff: any; -> not best practice to use type 'any'
var stuff;
stuff = ['slime', 2, 'string', 4, 1, 4, 5];
var queen = {
    name: 'jess',
    age: 32,
    likes: ['drawing', 'reading'],
    dish: [1, 'loaded peppers']
};
// enum Spells { FROST = 1, FIRE, ARCANE, SHADOW = 'shadow' }
var Spells;
(function (Spells) {
    Spells[Spells["FROST"] = 0] = "FROST";
    Spells[Spells["FIRE"] = 1] = "FIRE";
    Spells[Spells["ARCANE"] = 2] = "ARCANE";
    Spells[Spells["SHADOW"] = 3] = "SHADOW";
})(Spells || (Spells = {}));
;
var conjurer = {
    primary: Spells.FROST,
    secondary: Spells.FIRE
};
if (conjurer.primary == 0) {
    // console.log('conjurer is frost');
}
var fn2 = function (num, num2) {
    if (typeof num === 'number' && typeof num2 === 'number') {
        return num + num2;
    }
    else {
        return num.toString() + ' ' + num2.toString();
    }
};
var res1 = fn2(1, 1);
var res2 = fn2('jess', 'josh');
var res3 = fn2(1, 'josh');
// console.log(res1, res2, res3);
var fn3 = function (num, num2, result) {
    var res;
    if (typeof num === 'number' && typeof num2 === 'number' || result === 'as-number') {
        res = +num + +num2;
    }
    else {
        res = num.toString() + num2.toString();
    }
    return res;
    // if (result === 'as-number') {
    //   return +res;
    // } else if (result === 'as-string') {
    //   return res.toString();
    // }
};
var res4 = fn3(1, 1, 'as-number');
var res5 = fn3('jess', 'josh', 'as-string');
var res6 = fn3('1', '1', 'as-number');
var res7 = fn3('1', 2, 'as-number');
var fn4 = function (num, num2, result) {
    var res;
    if (typeof num === 'number' && typeof num2 === 'number' || result === 'as-number') {
        res = +num + +num2;
    }
    else {
        res = num.toString() + num2.toString();
    }
    return res;
};
var fn5 = function (robot) {
    console.log('hi my name is ' + robot.name + ', and i am ' + robot.age + ' years old.');
};
var robo = {
    name: 'robo',
    age: 4120
};
// fn5(robo);
// fn return type
var fn6 = function (num, num2) {
    return num + num2;
};
// fn void return type -> does not require return statement
var fn7 = function (num) {
    console.log(num);
};
// fn7(fn6(2000, 22));
// console.log(fn7(fn6(2000, 22))); -> this returns 'undefined'
// let value: undefined; -> undefined is a valid type in TS, void is the absence of any type at all
// this is a valid function as undefined requires a return statement
// let fn7 = (num: number): undefined => {
//   console.log(num);
//   return;
// }
// function types
var add;
add = fn6;
// console.log(add(6, 4));
// function type definition -> better at catching errors during compilation
var subtract;
var fn8 = function (num, num2) {
    return num - num2;
};
subtract = fn8;
// console.log(subtract(10, 5));
// function callback types
var addAndPrint = function (num, num2, cb) {
    var res = num + num2;
    cb(res);
};
// addAndPrint(10, 10, (res) => {
//   console.log(res);
// })
// unknown type
var userInput;
// setting userInput to type any will not throw any errors/warnings
// let userInput: any;
var username;
userInput = 'josh';
// unknown types cannot be assigned to string type variables
// username = userInput;
// must type check to assign unknown variable to string type variable
if (typeof userInput == 'string') {
    username = userInput;
}
// never type -> never produces/returns a value
var fn9 = function (message, code) {
    throw {
        message: message,
        code: code
    };
};
fn9('an error occured', 510);
