class Department {
  name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  describe() {
    console.log('department: ' + this.name);
  }
  
  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log('num of employees: ' + this.employees.length);
    console.log('employees: ' + this.employees);
  }
}

const finance = new Department('finance');

finance.describe();
finance.addEmployee('josh');
finance.addEmployee('jess');
finance.addEmployee('bailey');
finance.printEmployeeInfo();

// private does not allow properties/methods to be accessed from outside of the class
// finance.employees[3] = 'unknown';

// public allows this
// finance.name = 'financing';
