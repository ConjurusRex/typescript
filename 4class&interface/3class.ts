class Department {
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, private name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe() {
    console.log(`Department: (ID)${this.id} -> ${this.name}`);
  }
  
  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log('num of employees: ' + this.employees.length);
    console.log('employees: ' + this.employees);
  }
}


class IT extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'information technology');
  }
}


class Accounting extends Department {
  constructor(id: string, public reports: string[]) {
    super(id, 'accounting');
  }

  addEmployee(employee: string): void {
    console.log('employee was added: ' + employee);
    // this.employees is private -> will work with public or protected modifiers (protected still only allows access from within the class)
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new Accounting('acct', []);
accounting.describe();
accounting.addReport('bills');
accounting.addReport('project expenses');
accounting.printReports();
accounting.addEmployee('jess');
accounting.printEmployeeInfo();

const it = new IT('it', ['josh']);
it.describe();
it.addEmployee('josh');
it.printEmployeeInfo();
console.log(it);

const finance = new Department('fin', 'finance');

finance.describe();
finance.addEmployee('josh');
finance.addEmployee('jess');
finance.addEmployee('bailey');
finance.printEmployeeInfo();
