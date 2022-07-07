"use strict";
// constraints
// union types, interfaces, or custom types are valid constraints as well -> constraining one generic type is also valid
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
//const obj = merge({ name: 'josh' }, 30); -> will throw an error when constraints are specified
const obj = merge({ name: 'josh' }, { age: 31 });
obj.age;
obj.name;
// generic function with interface constraint
// return type is a tuple -> first ele is of type T, second ele is of type string
// Lengthy tells TS to only care that the element argument has a length property
function countAndDescribe(element) {
    let description = 'missing value';
    if (element.length === 1) {
        description = 'got 1 element';
    }
    else if (element.length > 1) {
        description = 'got ' + element.length + ' elements';
    }
    return [element, description];
}
console.log(countAndDescribe('hello world')); // returns: Array [ "hello world", "got 11 elements" ]
console.log(countAndDescribe(['yam', 'fish', 'broccoli'])); // returns: Array [ (3) […], "got 3 elements" ]
console.log(countAndDescribe([])); // returns: Array [ [], "missing value" ]
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'rex' }, 'name');
