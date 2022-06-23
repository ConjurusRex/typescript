const button = document.querySelector('button'); // add '!' to let typescript know that button will not be null

const fn = (message: string) => {
  return console.log(message);
}

// typescript adds '?' after button to indicate button could be HTMLButtonElement | null
// button?.addEventListener('click', fn.bind('data was successfully sent'));
// type check to get around ! and ?
if (button) {
  button.addEventListener('click', fn.bind(null, 'data was successfully sent'));
}
