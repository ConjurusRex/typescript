type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// function overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const res = add('rex', ' conjurus'); // as string -> not needed with overloads
res.split(' ');
