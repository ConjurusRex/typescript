"use strict";
// spread
let hobbies = ['reading', 'writing', 'music'];
let extraHobbies = [...hobbies, 'painting'];
console.log(extraHobbies);
let person = {
    name: 'josh',
    age: 31,
};
let copiedPerson = Object.assign({ id: 1 }, person);
console.log(copiedPerson);
// rest
// (...numbers: number[number, number, number]) -> this would be an example using the tuple type
const add = (...numbers) => {
    return numbers.reduce((res, value) => {
        return res + value;
    }, 0);
};
const addedNumbers = add(5, 5, 5, 5, 5);
console.log(addedNumbers);
// destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2, remainingHobbies);
