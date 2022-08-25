// class decorators require an arg which passes the constructor function of the class
// decorators execute when the class is defined
function Logger(constructor: Function) {
  console.log('Logger');
  console.log(constructor);
}

@Logger
class Person {
  name = 'rex'
  constructor() {
    console.log('created person obj');
  }
}

const p = new Person();
