// ---------------------------------------------------> class Department
// abstract classes cannot be instantiated -> new Department(...)
abstract class Department {
  protected employees: string[] = [];
  static year: number = 2022;
  // you can also have abstract properties

  constructor(protected readonly id: string, private name: string) {}

  // an abstract method can only be defined inside an abstract class
  // methods can be overridden without being abstract -> abstract enforces that every class it is extended by requires an implementation
  abstract describe(): void;
  // describe() {
  //   console.log(`Department: (ID)${this.id} -> ${this.name}`);
  // }

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

const accting = new Accounting('acct', ['classified', 'important', 'fees', 'expenses']);
accting.describe();
