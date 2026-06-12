const arr=[10,20,30,1,3,4];

arr.sort((a,b)=>a-b);
console.log(arr);



//bubble sort
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr);

//customised sorting function
console.log(arr['2']);
arr.sorting = function(){
   for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
}

arr.sorting();
console.log(arr);

//customised fxn -2
//arr.sorting = function(Callback){  //uh will not get fxn(anonymous) bcoz of Array.prototype.sorting
Array.prototype.sorting = function(Callback){
   for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (Callback(arr[j], arr[j+1])) {
          
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
}

//ascending order
arr.sorting((a,b)=>a>b);
// a>b- swap a and b
// otherwise don't swap
console.log(arr);

//descending order
arr.sorting((a,b)=>b>a);
console.log(arr);