//map() → transform each element and return a new array
const arr=[10,20,30,40,50];
const mapAns = arr.map((num)=>{
     return num * 2;
})
console.log(mapAns);


//shorthand
const mapAns = arr.map(num => num * 2);

console.log(mapAns);
