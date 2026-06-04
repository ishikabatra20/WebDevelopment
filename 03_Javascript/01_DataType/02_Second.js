//copy by value

let fNum = 10;
let secNum=fNum;
console.log(secNum);

//copy by reference
let obj1 = {
    name: "ABCD",
    age:18
}
let obj2=obj1;

obj2.name="EFGH";
console.log(obj2);
console.log(obj1);

console.log(obj2.name);


// == and ===
let a=10;
let b='10';
console.log(a==b); 
console.log(a===b);

let o1 = {
    name: "ABCD",
    age:18
}
// let o2=o1;

let o2={
    name: "ABCD",
    age:18
}
console.log(o2==o1);
//console.log(o2===o1);




