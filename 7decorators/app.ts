// now the WithTemplate decorator will only execute when a class object is instantiated
function WithTemplate(template: string, hookId: string) {
  console.log('WithTemplate factory');
  return function <T extends { new(...args: any[]): { name: string } }>(ogConstructor: T) {
    return class extends ogConstructor {
      // can use '_' in place of args to ignore ts warning no unused parameter
      constructor(...args: any[]) {
        super();
        console.log('WithTemplate Rendering');
        const el = document.getElementById(hookId)
        if (el) {
          el.innerHTML = template;
          el.querySelector('h1')!.textContent = this.name;
        }
      }
    }
  }
}

@WithTemplate(
  '<h1>WithTemplate: <i>a decorator factory function</i></h1>',
  'app'
)
class Person {
  name = 'rex'
  constructor() {
    console.log('created person obj')
  }
}

const p = new Person()
