// ---------------------------------------------------> class Department
class Department {
  protected employees: string[] = [];

  constructor(private readonly id: string, private name: string) {}

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


// ---------------------------------------------------> class IT
class IT extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'information technology');
  }
}


// ---------------------------------------------------> class Accounting
class Accounting extends Department {
  private lastReport: string;

  constructor(id: string, public reports: string[]) {
    super(id, 'accounting');
    this.lastReport = reports[0];
  }

  get theLastReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error('get theLastReport() - no report was found');
    }
  }

  set theLastReport(value: string) {
    if (!value) {
      throw new Error('set theLastReport() - please pass a valid value');
    }
    this.addReport(value);
  }

  addEmployee(employee: string): void {
    console.log('employee was added: ' + employee);
    this.employees.push(employee);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new Accounting('acct', []);
accounting.addReport('confidential report');
// setters are accessed without parenthesis
accounting.theLastReport = 'classified info';
// getters are accessed without parenthesis
console.log(accounting.theLastReport);
