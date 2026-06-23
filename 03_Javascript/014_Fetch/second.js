const jdObject = {
    name: "ABCDE",
    age:20,
}

//object->string i.e., JS object-> JSON
const a = JSON.stringify(jdObject);
console.log(typeof a);

//string->object i.e., JSON-> JS Object
const b = JSON.parse(a);
console.log(typeof b);