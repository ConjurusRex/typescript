// index properties
interface ErrorContainer {
  // id must be type string as propName is defined to also hold a string
  // id: string;
  [propName: string]: string;
}

const emailError: ErrorContainer = {
  // 1: 'invalid email', -> 1 can be considered a string prop name
  email: 'invalid email',
  username: 'invalid username',
}
