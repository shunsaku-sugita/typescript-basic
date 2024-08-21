// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// This is an enum, which is a custom type that allows us to assign labels to numbers.
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// This is a tuple, which is an array with a fixed number of elements and fixed types.
// person.role.push("admin");
// person.role[1] = 10; // !!! ERROR !!!
// person.role = [0, "admin", "user"]; // !!! ERROR !!!

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}

person.hobbies.map((hobby) => {
  console.log(hobby.toUpperCase());
});

// Check if the role is an admin.
if (person.role === Role.ADMIN) {
  console.log("is admin");
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
