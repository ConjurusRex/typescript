"use strict";
let employee = {
    name: 'josh',
    privileges: ['read', 'write', 'delete'],
};
const printEmployeeInfo = (emp) => {
    console.log('Name: ' + emp.name);
    // another example of type checking -> prop in obj
    if ('privileges' in emp) {
        return console.log('Privileges: ' + emp.privileges);
    }
};
printEmployeeInfo(employee);
class Footman {
    attack() {
        console.log('swing attack!');
    }
}
class Priest {
    attack() {
        console.log('spell attack!');
    }
    heal() {
        console.log('casting healing spell for ' + (((Math.random()) * 2) * 10).toFixed(0) + 'hp!');
    }
}
const footman = new Footman();
const priest = new Priest();
const attack = (unit) => {
    unit.attack();
    // another example of type checking -> obj of class (instanceof does not work with interfaces)
    if (unit instanceof Priest) {
        unit.heal();
    }
};
// type checks available in javascript -> typeof, in, instanceof
