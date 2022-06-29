// ---------------------------------------------------> class Department
class Department {
  protected employees: string[] = [];
  // static properties are detached from class instances (cannot be used in non-static instances/methods this.year)
  static year: number = 2022;

  constructor(private readonly id: string, private name: string) {
    // this is how you can access a static property
    // console.log(Department.year);
  }

  describe() {
    console.log(`Department: (ID)${this.id} -> ${this.name}`);
  }

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

const employee = Department.createEmployee('faerwald');
console.log('(' + Department.year + ') created employee: ' + employee.name);
