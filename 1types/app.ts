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
