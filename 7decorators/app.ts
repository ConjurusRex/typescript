function Logger(target: Function) {
  console.log('logging');
  console.log(target);
}

@Logger
class Person {
  name = 'rex'
  constructor() {
    console.log('created person obj');
  }
}

const p = new Person();
