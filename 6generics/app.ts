class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) { // can use generic types in class methods -> addItem<T>
    this.data.push(item);
  }

  removeItem(item: T) {
    // if (this.data.indexOf(item) === -1) {
    //   return;
    // }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

// specifies generic type -> <string>
const textStorage = new DataStorage<string>();
textStorage.addItem('conjurus_rex');
textStorage.addItem('arowscal');
textStorage.addItem('faerwald');
textStorage.removeItem('arowscal');
console.log(textStorage.getItems());

const numStorage = new DataStorage<number>(); // also valid -> <number | string>
numStorage.addItem(2);
numStorage.addItem(1);
numStorage.addItem(3);
numStorage.removeItem(3);
console.log(numStorage.getItems());

// const objStorage = new DataStorage<object>();
// const rexDataObj = {name: 'rex'};
// objStorage.addItem(rexDataObj);
// objStorage.addItem({name: 'conjurus'});
// objStorage.addItem({name: 'faerwald'});
// objStorage.removeItem(rexDataObj); // correct way to remove an object by reference
// // objStorage.removeItem({name: 'conjurus'}); this will not work -> objects are reference types and indexOf returns -1 and removes the last index
// console.log(objStorage.getItems());

