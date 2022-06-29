"use strict";
// ---------------------------------------------------> class Department
// abstract classes cannot be instantiated -> new Department(...)
class Department {
    // you can also have abstract properties
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    // describe() {
    //   console.log(`Department: (ID)${this.id} -> ${this.name}`);
    // }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log('num of employees: ' + this.employees.length);
        console.log('employees: ' + this.employees);
    }
}
Department.year = 2022;
// ---------------------------------------------------> class IT
class IT extends Department {
    constructor(id, admins) {
        super(id, 'information technology');
        this.admins = admins;
    }
    describe() {
        console.log(`${this.id} is the ID for the information technology department`);
    }
}
// ---------------------------------------------------> class Accounting
class Accounting extends Department {
    constructor(id, reports) {
        super(id, 'accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get theLastReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        else {
            throw new Error('get theLastReport() - no report was found');
        }
    }
    set theLastReport(value) {
        if (!value) {
            throw new Error('set theLastReport() - please pass a valid value');
        }
        this.addReport(value);
    }
    describe() {
        console.log(`${this.id} is the ID for the accounting department`);
    }
    addEmployee(employee) {
        console.log('employee was added: ' + employee);
        this.employees.push(employee);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const accting = new Accounting('acct', ['classified', 'important', 'fees', 'expenses']);
accting.describe();
