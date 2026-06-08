//1D array
const arr1 = [10, 20, 30, 40, 50];
const arr2 = arr1;
arr2[2] = 80;
console.log(arr2);
console.log(arr1);

//2D array- array of arrays
const arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arr3);
console.log(arr3[0]); //[1,2,3]
console.log(arr3[1]); //[4,5,6]
console.log(arr3[2]); //[7,8,9]

console.log(arr3[0][0]); //1
console.log(arr3[0][1]); //2
console.log(arr3[0][2]); //3
console.log(arr3[1][0]); //4
console.log(arr3[1][1]); //5
console.log(arr3[1][2]); //6
console.log(arr3[2][0]); //7
console.log(arr3[2][1]); //8
console.log(arr3[2][2]); //9

//print number of rows in 2D array
//or
//number of sub arrays in the main array
console.log(arr3.length); //3

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}
//print all elements in 2D array
//why arr3[row].length? because arr3[row] is a sub array and
// we want to print all elements in that sub array, so we need to know
// the length of that sub array to loop through it.
for (let row = 0; row < arr3.length; row++) {
  for (let col = 0; col < arr3[row].length; col++) {
    console.log(arr3[row][col]);
  }
}

for (let row of arr3) {
  console.log(row);
} //[[1,2,3],[4,5,6],[7,8,9]]

for (let row of arr3) {
  for (let col of row) {
    console.log(col);
  }
} //1 2 3 4 5 6 7 8 9
