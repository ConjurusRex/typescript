// decorator factory function - allows passing values to decorator function
function Logger(loggerMsg: string) {
  // decorator function
  return function(constructor: Function) {
    console.log(loggerMsg);
    console.log(constructor);
  } 
}

function WithTemplate(template: string, hookId: string) {
  // can replace constructor with _ to tell typescript to ignore 'value is never read'
  return function(constructor: any) {
    const el = document.getElementById(hookId);
    const person = new constructor();
    if (el) {
       el.innerHTML = template;
       // ! -> we are sure to have an h1 el
       el.querySelector('h1')!.textContent = person.name;
    }
  }
}

// @Logger('this is a Logger message')
@WithTemplate('<h1>WithTemplate: <i>a decorator factory function</i></h1>', 'app')
class Person {
  name = 'rex'
  constructor() {
    console.log('created person obj');
  }
}

const p = new Person();
