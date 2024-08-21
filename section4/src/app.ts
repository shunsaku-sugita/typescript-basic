// const userName = "Max";
// // userName = "Maximilian";
// let age = 30;

// age = 29;

// const add = (a: number, b: number) => {
//   let result;
//   result = a + b;
//   return result;
// };

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// const add2 = (a: number, b: number = 1) => a + b;

// const printOutput: (output: string | number) => void = (output) =>
//   console.log(output);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

// printOutput(add2(5, 2));

const hobbies = ["Sports", "Cooking"];
console.log(hobbies[0]);
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const person = {
  firstName: "Max",
  age: 30,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addNumbers = add(5, 10, 2, 3.7);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age);
