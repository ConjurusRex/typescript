class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // describe() {
  //   console.log('department: ' + this.name);
  // }
  describe(this: Department) {
    console.log('department: ' + this.name);
  }
}

const finance = new Department('finance');

console.log(finance);
finance.describe();

// const accounting = { describe: finance.describe }
// returns undefined -> this.name refers to the accountingCopy object, not a Department object
// accounting.describe(); 
const accounting = { name: 'accounting', describe: finance.describe }
accounting.describe(); 

