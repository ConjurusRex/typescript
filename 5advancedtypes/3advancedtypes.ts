interface Bird {
  type: 'bird'; // literal type 'bird'
  flyingSpeed: number;
}

interface Horse {
  type: 'horse'; // literal type 'horse'
  runningSpeed: number;
}

type Animal = Bird | Horse;

const move = (animal: Animal) => {
  let speed;
  // typescript will infer the available type properties
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('moving speed: ' + speed);
}

// typescript will infer the available type properties
move({ type:'bird', flyingSpeed: 20 });
move({ type:'horse', runningSpeed: 30 });


const p = document.querySelector('p'); // p: HTMLParagraphElement / can also add ! after to indicate value will never be null

const p2 = document.getElementById('message-output'); // p: HTMLElement  

// type casting method #1
// const inputEle = <HTMLInputElement> document.getElementById('user-input');

// type casting method #2
const inputEle = document.getElementById('user-input'); // as HTMLInputElement also indicates the value will not be null !

if (inputEle) {
  (inputEle as HTMLInputElement).value = 'conjurus_rex'; 
}
// inputEle.value = 'conjurus_rex'; // -> will throw error for generic HTMLElement type
