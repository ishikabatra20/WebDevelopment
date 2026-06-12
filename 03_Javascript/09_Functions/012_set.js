// Set stores only unique values.
// Duplicate primitive values are automatically removed.

const arr = [
  10, 20, 30, 40, 50,
  20, 50,
  "Aman", "Naman", "Aman",
  70,
  { name: "Aman", age: 20 },
  { name: "Aman", age: 20 },
  { name: "Aman", age: 20 }
];

const s1 = new Set(arr);
console.log(s1);



s1.add(10);
s1.add(20);
s1.add(30);
s1.add(10);
console.log(s1);
console.log(s1.has(30));

/*
Output:

Set {
  10,
  20,
  30,
  40,
  50,
  "Aman",
  "Naman",
  70,
  { name: "Aman", age: 20 },
  { name: "Aman", age: 20 },
  { name: "Aman", age: 20 }
}
*/

/*
Why are duplicate numbers and strings removed?

- Numbers and strings are primitive data types.
- Primitive values are compared by their actual value.
- Since 20 === 20 and "Aman" === "Aman", Set keeps only one copy.

Why are all 3 objects present?

- Objects are non-primitive data types.
- Objects are compared by reference (memory address), not by their contents.
- Each object literal creates a new object at a different memory location.
- Therefore, even though all three objects have the same properties and values,
  they are considered different objects.

Example:
{ name: "Aman", age: 20 } === { name: "Aman", age: 20 } // false

Key Point:
- Primitives (number, string, boolean, etc.) -> compared by value.
- Objects, arrays, and functions -> compared by reference.
- Set removes duplicates only when values/references are exactly the same.
*/

//fix the issue
// const unique = [
//   ...new Map(
//     arr.map(obj => [`${obj.name}-${obj.age}`, obj])
//   ).values()
// ];

// console.log(unique);


const email = [
  "a@gmail.com",
  "b@gmail.com",
  "a@gmail.com",
  "c@gmail.com",
  "b@gmail.com"
];
const s2 = new Set(email);
const arr1 =[...s2];
console.log(arr1);