// Array<string> generic type
const names: Array<string> = []; // same as -> string[]

// Promise<string> generic type
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise has resolved');
  }, 2000);
});

promise.then(data => {
  data.trim(); // because we let typescript know the promise will return a string we get auto completion string options here
});


// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }

// const obj = merge({ name: 'josh' }, { age: 31 }); // as { name: string, age: number } -> long work around
// obj.name; -> throws an error because TS doesn't know obj will have these props

// custom generic type -> T stands for type, U is next in alpabet
function merge<T, U>(objA: T, objB: U) { // merge : T & U -> intersection
  return Object.assign(objA, objB);
}

const obj = merge({ name: 'josh' }, { age: 31 }); // TS now knows the obj returned will have both props
obj.age;
obj.name;

// can provide TS with more info about generic types -> this example is redundant
const obj2 = merge<{ name: string, age: number }, { hobbies: string[] }>({ name: 'rex', age: 91 }, { hobbies: ['spells', 'knowledge'] });

