function Logger(loggerMsg: string) {
  console.log('Logger factory');
  return function (constructor: Function) {
    console.log(loggerMsg)
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log('WithTemplate factory');
  return function (constructor: any) {
    console.log('WithTemplate Rendering');
    const el = document.getElementById(hookId)
    const person = new constructor()
    if (el) {
      el.innerHTML = template
      el.querySelector('h1')!.textContent = person.name
    }
  }
}
// decorators run in bottom-top order (WithTemplate then Logger)
// factories run in top-bottom order (Logger then WithTemplate)
@Logger('Logger Activated')
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
