//Array is a data structure that can hold multiple values. It is a collection of elements, where each element can be of any data type, including numbers, strings, booleans, objects, and even other arrays. Arrays are ordered, meaning that the elements are stored in a specific sequence and can be accessed using their index.

//Heterogenous array    
let user =[10,60, "Rachel", "Green", true, null, undefined, [1,2,3], {name:"Rachel", age:30}];
console.log(user);

//update value in array
user[2] = 100;
console.log(user[2]);

let num=[10,20,30,40,50];
//insert element in the end of array
num.push(60);
console.log(num);
//remove element from the end of array
num.pop();
console.log(num);
//insert multiple elements in the end of array
num.push(60,400,500);
console.log(num);

//insert element in the beginning of array
num.unshift(8, 23);
console.log(num);

//remove element from the beginning of array
num.shift();
console.log(num);

//array is an object in javascript
console.log(typeof num);
//index=  0  1  2  3  4   
// arr = [10,20,30,40,50];
//address= 1000 1008 1016 1024 1032
//num[2] = 1000+2*8 
//formaula to calculate address of element in array
//address of element = base address + index*size of each element

//array is not contiguous in memory in javascript, it is a dynamic data structure. It can grow and shrink in size as needed. When we insert an element in the array, it may need to allocate new memory and copy the existing elements to the new location. 
// This is why arrays in javascript are not contiguous in memory.
//array is a reference type in javascript, it means that when we assign an array to a 
// variable, we are assigning the reference to the array, not the actual array. 
// So when we modify the array using one variable, it will affect all the variables 
// that reference the same array.

let arr1 = [10,20,30];
let arr2 = arr1;
console.log(arr1);

//why array is object in javascript?
//In JavaScript, arrays are implemented as objects. This means that 
// they have properties and methods that allow us to manipulate the data stored in the array.
//  For example, we can use the push() method to add elements to the end of the array, or 
// the length property to get the number of elements in the array. 
// Additionally, arrays in JavaScript can hold elements of different data types,
//  which is a characteristic of objects. Therefore, arrays are considered a type of
//  object in JavaScript.

//if user wants to add this name in array - mulchand singh kumar this name is big and 
// we want to add it in array as a single element then we can use push() method 
// to add it in array. 

let names = ["Rachel", "Monica", "Phoebe"];
names.push("Mulchand Singh Kumar");
console.log(names);