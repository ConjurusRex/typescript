// type function
// type AddFN = (a: number, b: number) => number;

// let add: AddFN;
// add = (a: number, b: number) => { return a + b; }


// interface function
interface AddFN {
  (a: number, b: number): number;
}
let add: AddFN;
add = (a: number, b: number) => { return a + b; }


interface Named {
  // readonly can be used in type as well
  readonly name?: string;
  // optional property
  outputName?: string;
}


interface Greetable extends Named {
  // greet?(phrase: string): void; -> optional method
  greet(phrase: string): void;
}


class Person implements Greetable { // or -> implements Greetable, Named
  age = 30;
  
  constructor(public name?: string) { // public name: string = 'user' -> you can assign a default value without ?
    if (name) {
      this.name = name;
    } else {
      this.name = 'person'
    }
  } // public name?: string -> can have optional properties in classes
  
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}


let user: Greetable;
user = new Person('josh');
user.greet('Hi there,');
console.log(user);

let user2 = new Person();
user2.greet('Hi there,');