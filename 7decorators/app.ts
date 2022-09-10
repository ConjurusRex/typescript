// decorator function for class properties
function Log(target: any, propName: string) {
  console.log('Property Decorator')
  console.log('Property target: ', target); // prototype
  console.log('Property name: ', propName);
}

// decorator function for class accessors (get/set)
function Log2(target: any, accessorName: string, propDescription: PropertyDescriptor) {
  console.log('Accessor Decorator');
  console.log('Accessor target: ', target); 
  console.log('Accessor name: ', accessorName);
  console.log('Property Descriptor: ', propDescription); // get: undefined, set: price(val)
}

// decorator function for class method
function Log3(target: any, methodName: string | Symbol, propDescription: PropertyDescriptor) {
  console.log('Method Decorator');
  console.log('Method target: ', target);
  console.log('Method name: ', methodName);
  console.log('Property Descriptor: ', propDescription);  // value, writable
}

// decorator function for method parameter
function Log4(target: any, methodName: string | Symbol, paramPosition: number) {
  console.log('Parameter Decorator');
  console.log('Parameter target: ', target);
  console.log('Method name: ', methodName);
  console.log('Parameter Position: ', paramPosition); // 0
}

class Product {
  @Log // executes when class constructor function initializes the prop
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
  getPriceWithTax(@Log4 tax: number) { // parameter decorator executes before method decorator
    return this._price * (1 + tax);
  }
}
