//for in loop to iterate over the keys of the person object
//prints all keys and values of the person object

//do not use for in loop to iterate over the keys of the person object because it will 
// also iterate over the inherited properties of the person object
const person = {
    name: "John Doe",
    age: 35,
    city: "New York"
};

for (const key in person) {
    console.log(key, person[key]);
    console.log(person.key);// this will not work because key is a variable and not a property of the person object
}