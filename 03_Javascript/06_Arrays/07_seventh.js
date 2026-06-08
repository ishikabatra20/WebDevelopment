const a=[1,2,3,4,5];
const b = [6,7,8,9,10];
const c = [11,12,13,14,15];
//concat() method is used to merge two or more arrays.
// It does not modify the original arrays. 
// It returns a new array containing the merged elements.
const d = a.concat(b,c);
console.log(d); //[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(a); //[1,2,3,4,5] original array is not modified

//spread operator is also used to merge two or more arrays.
// It does not modify the original arrays. 
// It returns a new array containing the merged elements.
const e = [...a,...b,...c];
console.log(e); //[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(a); //[1,2,3,4,5] original array is not modified

const f =[a,b,...c]
console.log(f); //[[1,2,3,4,5],[6,7,8,9,10],11,12,13,14,15]  original array is not modified
console.log([a,...b, c]); //[[1,2,3,4,5],6,7,8,9,10,[11,12,13,14,15]]  original array is not modified   


const num =[10,20,30,40,50,60,70,80,90,100];
const first = num[0];
const second = num[1];
const third = num[2];

console.log(first,second,third); //10,20,30

//destructuring assignment is a syntax that allows us to unpack values 
// from arrays or properties from objects into distinct variables.
const[first1, second1, third1, ...remaining] = num;

//...remaining is called rest operator, it is used to collect the remaining 
// elements of the array into a new array.
console.log(first1,second1,third1); //10,20,30
console.log(first1,second1,third1, remaining); //10,20,30,40,50,60,70,80,90,100
console.log(remaining); //40,50,60,70,80,90,100


//left hand: rest operartor
//right hand: spread operator
