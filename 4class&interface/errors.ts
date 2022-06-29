class Errors {
  constructor(private code: number, private message: string) {}

  timeoutError() {
    console.log(`${this.code}: ${this.message}`);
  }
}

class fiveOhFour extends Errors {
  constructor() {
    super(504, 'Sorry, we were unable to fetch your documents. we will try again soon.');
  }
}

setTimeout(() => {
  const error = new fiveOhFour();
  error.timeoutError();
}, 5000);