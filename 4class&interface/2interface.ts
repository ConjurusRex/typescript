interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  age = 30;
  constructor(public name: string) {}
  
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user: Greetable;

user = new Person('josh');

user.greet('Hi there,');
console.log(user);