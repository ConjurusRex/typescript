type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

type UnknownEmployee = Admin | Employee;

let employee: UnknownEmployee = {
  name: 'josh',
  privileges: ['read', 'write', 'delete'],
}

const printEmployeeInfo = (emp: UnknownEmployee) => {
  console.log('Name: ' + emp.name);
  // another example of type checking -> prop in obj
  if ('privileges' in emp) {
    return console.log('Privileges: ' + emp.privileges);
  }
}

printEmployeeInfo(employee);


class Footman {
  attack() {
    console.log('swing attack!');
  }
}


class Priest {
  attack() {
    console.log('spell attack!');
  }

  heal() {
    console.log('casting healing spell for ' + (((Math.random()) * 2) * 10).toFixed(0) + 'hp!');
  }
}

const footman = new Footman();
const priest = new Priest();

type Unit = Footman | Priest;

const attack = (unit: Unit) => {
  unit.attack();

  // another example of type checking -> obj of class (instanceof does not work with interfaces)
  if (unit instanceof Priest) {
    unit.heal();
  }
}

// type checks available in javascript -> typeof, in, instanceof
