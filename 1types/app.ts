let fn = (num: number, num2: number) => {
  return num + num2;
}

// let num: number; -> do this for unassigned variables
let num = 1;
let num2 = 1;
const res = fn(num, num2);
// console.log(res);


// let worker: {
//   name: string;
//   age: number;
//   likes: string[]
// } = {
let worker = {
  name: 'josh',
  age: 31,
  likes: ['music', 'code'],
}


// let stuff: any; -> not best practice to use type 'any'
let stuff: (string | number)[];
stuff = ['slime', 2, 'string', 4, 1, 4, 5];


let queen: {
  name: string;
  age: number;
  likes: string[];
  dish: [number, string]; // 'tuple' type
} = {
  name: 'jess',
  age: 32,
  likes: ['drawing', 'reading'],
  dish: [1, 'loaded peppers'],
}


// enum Spells { FROST = 1, FIRE, ARCANE, SHADOW = 'shadow' }
enum Spells { FROST, FIRE, ARCANE, SHADOW };
let conjurer = {
  primary: Spells.FROST,
  secondary: Spells.FIRE,
}
if (conjurer.primary == 0) {
  // console.log('conjurer is frost');
}


let fn2 = (num: number | string, num2: number | string) => {
  if (typeof num === 'number' && typeof num2 === 'number') {
    return num + num2;
  } else {
    return num.toString() + ' ' + num2.toString();
  }
}
const res1 = fn2(1, 1);
const res2 = fn2('jess', 'josh');
const res3 = fn2(1, 'josh');
// console.log(res1, res2, res3);


let fn3 = (num: number | string, num2: number | string, result: 'as-number' | 'as-string') => { // result is  a 'literal' type
  let res;
  if (typeof num === 'number' && typeof num2 === 'number' || result === 'as-number') {
    res = +num + +num2;
  } else {
    res = num.toString() + num2.toString();
  }
  return res;
  // if (result === 'as-number') {
  //   return +res;
  // } else if (result === 'as-string') {
  //   return res.toString();
  // }
}
const res4 = fn3(1, 1, 'as-number');
const res5 = fn3('jess', 'josh', 'as-string');
const res6 = fn3('1', '1', 'as-number');
const res7 = fn3('1', 2, 'as-number');

// console.log(res4);
// console.log(res5);
// console.log(res6);
// console.log(res7);


// type aliases
type Combined = number | string;
type Conversion = 'as-number' | 'as-string';
let fn4 = (num: Combined, num2: Combined, result: Conversion) => { // result is  a 'literal' type
  let res;
  if (typeof num === 'number' && typeof num2 === 'number' || result === 'as-number') {
    res = +num + +num2;
  } else {
    res = num.toString() + num2.toString();
  }
  return res;
}


// object types
type Robot = {
  name: string;
  age: number;
}
let fn5 = (robot: Robot) => {
  console.log('hi my name is ' + robot.name + ', and i am ' + robot.age + ' years old.');
}
let robo: Robot = {
  name: 'robo',
  age: 4120
}
// fn5(robo);


// fn return type
let fn6 = (num: number, num2: number): number => {
  return num + num2;
}
// fn void return type -> does not require return statement
let fn7 = (num: number) => {
  console.log(num);
}
// fn7(fn6(2000, 22));
// console.log(fn7(fn6(2000, 22))); -> this returns 'undefined'
// let value: undefined; -> undefined is a valid type in TS, void is the absence of any type at all
// this is a valid function as undefined requires a return statement
// let fn7 = (num: number): undefined => {
//   console.log(num);
//   return;
// }


// function types
let add: Function;
add = fn6;
// console.log(add(6, 4));

// function type definition -> better at catching errors during compilation
let subtract: (a: number, b: number) => number;
let fn8 = (num: number, num2: number) => {
  return num - num2;
}
subtract = fn8;
// console.log(subtract(10, 5));


// function callback types
let addAndPrint = (num: number, num2: number, cb: (num: number) => void) => {
  const res = num + num2;
  cb(res);
}
// addAndPrint(10, 10, (res) => {
//   console.log(res);
// })


// unknown type
let userInput: unknown;
// setting userInput to type any will not throw any errors/warnings
// let userInput: any;
let username: string;
userInput = 'josh';
// unknown types cannot be assigned to string type variables
// username = userInput;
// must type check to assign unknown variable to string type variable
if (typeof userInput == 'string') {
  username = userInput;
}


// never type -> never produces/returns a value
let fn9 = (message: string, code: number) => {
  throw {
    message,
    code,
  };
}
fn9('an error occured', 510);
