// ---------------------------------------------------> class Department
abstract class Department {
  protected employees: string[] = [];
  static year: number = 2022;

  constructor(protected readonly id: string, private name: string) {}

  abstract describe(): void;
  

  static createEmployee(name: string) {
    return { name: name };
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

  describe(): void {
    console.log(`${this.id} is the ID for the information technology department`);
  }
}


// ---------------------------------------------------> class Accounting
class Accounting extends Department {
  private lastReport: string;
  private static instance: Accounting;

  // allows for one instance of the accounting class (Singleton)
  private constructor(id: string, public reports: string[]) {
    super(id, 'accounting');
    this.lastReport = reports[0];
  }

  // how to instantiate singleton instance
  static getInstance() {
    // same as using Accounting.instance
    if (this.instance) {
      return this.instance;
    }
    this.instance = new Accounting('acct', []);
    return this.instance;
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

  describe(): void {
    console.log(`${this.id} is the ID for the accounting department`);
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

// const accounting = new Accounting('acct', ['classified', 'important', 'fees', 'expenses']);
// declaration of accounting object instance (singleton)
const accounting = Accounting.getInstance();
// const accounting2 = Accounting.getInstance(); -> this returns the exact same instance of the class as accounting
accounting.describe();
