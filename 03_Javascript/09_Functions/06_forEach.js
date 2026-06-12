const arr=[10,20,30,405,50];

arr.forEach((num)=>{
    console.log(num);
}
)

arr.forEach((num, index)=>{
    console.log(num, index);
}
)

arr.forEach((num, index,arr)=>{
    console.log(num, index, arr);
}
)

//implementation
Array.prototype.customForEach = function(Callback){
   for(let i=0;i<arr.length;i++){
    Callback(arr[i]);
    //  Callback(arr[i],i);
    //   Callback(arr[i], i, arr);

   }
    
}


console.log("Customised")
arr.customForEach((num)=>{
    console.log(num);
}
);
// arr.customForEach((num, index, arr) => {
//     console.log(num);
//     console.log(num,  index);
//     console.log(num,  index, arr);
// });