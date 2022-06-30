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