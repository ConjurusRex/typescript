function Autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      // binds 'this' to the object
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  }
  return adjDescriptor;
}

class Printer {
  message = 'This works';

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const btn = document.querySelector('button')!;
btn.addEventListener('click', p.showMessage);
