// type Combinable = string | number;
// type Numeric = number | boolean;
// intersection type
// type Universal = Combinable & Numeric; // Universal = number -> number is the intersection type between combinable and numeric

// union type
// type Universal = Combinable | Numeric; // -> Universal = string | number | boolean


type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

// you can use interfaces instead of types ->
// interface Manager extends Employee, Admin {}
type Manager = Admin & Employee;

const m1: Manager = {
  name: 'josh',
  privileges: ['read', 'write', 'delete'],
  startDate: new Date(),
}