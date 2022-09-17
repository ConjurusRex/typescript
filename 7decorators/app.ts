function Log(target: any, propName: string) {
  console.log('Property Decorator')
  console.log('Property target: ', target);
  console.log('Property name: ', propName);
}

function Log2(target: any, accessorName: string, propDescription: PropertyDescriptor) {
  console.log('Accessor Decorator');
  console.log('Accessor target: ', target);
  console.log('Accessor name: ', accessorName);
  console.log('Property Descriptor: ', propDescription);
}

function Log3(target: any, methodName: string | Symbol, propDescription: PropertyDescriptor): PropertyDescriptor {
  console.log('Method Decorator');
  console.log('Method target: ', target);
  console.log('Method name: ', methodName);
  console.log('Property Descriptor: ', propDescription); // PropertyDescriptor grants access to configurable, enumerable, value, writeable props
  return { }
}

function Log4(target: any, methodName: string | Symbol, paramPosition: number) {
  console.log('Parameter Decorator');
  console.log('Parameter target: ', target);
  console.log('Method name: ', methodName);
  console.log('Parameter Position: ', paramPosition);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('price must be greater than 0');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

class Printer {
  message = 'This works';

  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const btn = document.querySelector('button')!;
btn.addEventListener('click', p.showMessage.bind(p));
