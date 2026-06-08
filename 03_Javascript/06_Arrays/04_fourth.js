let marks = [10,20,30,40,50,60,70];

//slice() method is used to create a new array from a portion of an existing array. 
// It does not modify the original array. 
// It takes two arguments, the starting index and the ending index (exclusive). 
// The new array will contain the elements from the starting index to the ending index 
// (exclusive).
const a = marks.slice(1,4);
console.log(a);   //[20,30,40]   1 is included and 4 is excluded
console.log(marks); //[10,20,30,40,50,60,70]  original array is not modified

//splice() method is used to add or remove elements from an array. 
// It modifies the original array. 
// The method returns an array containing the removed elements.
const b = marks.splice(1,4);
console.log(b); //[20,30,40,50]  from index 1 i want to remove 4 elements
console.log(marks); //[10,60,70]  original array is modified

//splice() method can also be used to add elements in the array.
let marks1 = [10,20,30,40,50,60,70];

// from index 2 i want to remove 4 elements and add 80,90 in the place of removed elements
const c = marks1.splice(2,4,80,90);
console.log(c); //[30,40,50,60]  elements at index 2,3,4,5 are replaced with 80,90
//2 index se 4 element remove karna hai aur 80,90 add karna hai
console.log(marks1); //[10,20,80,90,70]  original array is modified

//slice() method does not modify the original array, it returns a new array.
// splice() method modifies the original array and returns an array containing the 
// removed elements.


let marks2 = [10,20,30,40,50,60,70];
//starting element in splice; delete, insert 

let d = marks2.splice(2,3,80,90,100); 
console.log(d); //[30,40,50]  elements at index 2,3,4 are replaced with 80,90,100
console.log(marks2); //[10,20,80,90,100]  original array is modified

let marks3 = [10,20,30,40,50,60,70];
let e = marks3.splice(2,0,80,90,100);
console.log(e);//[]  no element is removed from the array
console.log(marks3); //[10,20,80,90,100,80,90,100]  original array is modified

//if i have to del element 30 
let marks4 = [10,20,30,40,50,60,70];
marks4.splice(2,1);
console.log(marks4); //[10,20,40,50,60,70]  element 30 is removed from the array

//if i have to insert 41 and 51 in the array after element 40
let marks5 = [10,20,30,40,50,60,70];
marks5.splice(4,0,41,51);
console.log(marks5); //[10,20,30,40,41,51,50,60,70]  element 41 and 51 is inserted in the array after element 40
