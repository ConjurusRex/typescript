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
// console.log(res4);
// console.log(res5);
// console.log(res6);
// console.log(res7);
