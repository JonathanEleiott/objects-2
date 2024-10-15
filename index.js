const addTwo = () => {

}

const two = 2;
const greeting  = `Hello everyone!`
const students = [`Billy`, `Sally`, `Sammy`];
//                  0         1        2
students.pop();
students.push(`Gary`);



// CREATING OBJECTS
const john = {
  name: 'John',
  isWorking: true,
  age: 204,
  height: 76,
  spouse: { 
    name: `Lisa`, 
    age: 200, 
    height: 54 
  },
  kids: [
    { 
      name: `Jake`, 
      age: 180 
    }, 
    { 
      name: `Bryce`, 
      age: 170 
    } 
  ],
  greeting: () => {
    alert(`Hello there!`);
  }
}

// console.log(john.greeting());

// for(let i = 0; i < john.kids.length; i++) {
//   console.log(john.kids[i]);
// }


// GRABBING ALL KEYS/VALUES
// console.log(Object.keys(john));
// console.log(Object.values(john));




// LOOPING
for(const key in john) {
  console.log(`KEY: ${key}, VALUE: ${john[key]}`); // `John`, true, 204, 76...
}

// for(let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }




// console.log(john);

// Delete
// delete john.age;

// john.age = 45;

// console.log(john);




const ralph = {
  name: `Ralph`,
  age: 42,
  height: 42
}

ralph.spouse = {
  name: `Laura`,
  age: 38,
  height: 56
}

ralph.height = 48;

// DOT NOTATION
// console.log(ralph.age);

// BRACKET NOTATION
// const myKey = 'height';
// console.log(john[myKey]);

// `vanilla,vanilla,vanilla,strawberry,coffee,coffee`

// {
//   vanilla: 3,
//   strawberry: 1,
//   coffee: 2
// }



// `rainbow,magic,rainbow,unicorn`

// {
//   rainbow: 2,
//   magic: 1,
//   unicorn: 1
// }