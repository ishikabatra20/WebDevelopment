const user= {
    name: "Rachel",
    age: 30,
    isMarried: false,
}

console.log(user.name); //Rachel
console.log(user.age);  //30
delete user.name;
console.log(user.name); //undefined
delete user;
console.log(user); //{ age: 30, isMarried: false }
//You cannot directly delete an object in JavaScript. 
// The delete operator removes object properties, not variables. 
// To discard an object, remove all references to it (e.g., user = null). 
// Once no references remain, JavaScript's garbage collector frees the memory automatically.
const person = {
    name: "Monica",
    age: 28,
    isMarried: true, 
    email:"m@example.com", 
    arrays: [1, 2, 3],
    nestedObject: {
        city: "New York",
        occupation: "Chef"
    },  
    greet: function() {
        console.log("Hello, I am " + this.name);
    }
};

console.log(person.greet());
console.log(person);

//print all the keys of the person object
console.log(Object.keys(person)); //["name", "age", "isMarried", "arrays", "nestedObject", "greet"]
//print all the values of the person object
console.log(Object.values(person)); //["Monica", 28, true, [1, 2, 3], { city: "New York", occupation: "Chef" }, function() { ... }]
//print all the entries(key and value) of the person object
console.log(Object.entries(person)); //[["name", "Monica"], ["age", 28], ["isMarried", true], ["arrays", [1, 2, 3]], ["nestedObject", { city: "New York", occupation: "Chef" }], ["greet", function() { ... }]]


const personKeys = Object.keys(person);
//console.log(personKeys); //["name", "age", "isMarried", "arrays", "nestedObject", "greet"]
 

//for...of loop to iterate over the keys of the person object
//prints all keys and values of the person object
for(const key of personKeys){
    //print all keys
  console.log(key); 
   //print all values
    console.log(key, person[key]);  
  
   //  console.log(key, person['age']);
}

//returns 2d array of key and value pairs
//[["name", "Monica"], ["age", 28], ["isMarried", true], ["arrays", [1, 2, 3]], ["nestedObject", { city: "New York", occupation: "Chef" }], ["greet", function() { ... }]]
for(const key of Object.entries(person)){
    console.log(key);

}
//print key and value separately
//[["name", "Monica"], ["age", 28], ["isMarried", true], ["arrays", [1, 2, 3]], ["nestedObject", { city: "New York", occupation: "Chef" }], ["greet", function() { ... }]]
for(const [key,value] of Object.entries(person)){
    console.log(key, value);
}

//print only keys starting with vowel
for(const key of Object.keys(person)){
    if(key[0].toLowerCase() === 'a' || key[0].toLowerCase() === 'e' || key[0].toLowerCase() === 'i' || key[0].toLowerCase() === 'o' || key[0].toLowerCase() === 'u'){
       console.log("k: ");
        console.log(key);
    }   
}
console.log(Object.keys(person)); //["name", "age", "isMarried", "arrays", "nestedObject", "greet"]

//objects are reference type

let obj1 = {name: "Alice"};
let obj2 = obj1; //obj2 is a reference to the same object as obj1
console.log(obj1); //{name: "Alice"}
console.log(obj2); //{name: "Alice"}