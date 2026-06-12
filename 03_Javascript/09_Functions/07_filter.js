//filter() → keep only matching elements

const arr=[10,20,40,30,50,70,77];
const ans = arr.filter((num)=>num>20);
console.log("R1.. ");
console.log(ans);

const answer=[];
for(let num of arr){
    if(num>10){
        answer.push(num);
    }
}
console.log("R2.. ");
console.log(answer);

const answer1=[];
const Callbackfxn = (num)=>num>20;
for(let num of arr){
    if(Callbackfxn(num)){
        answer1.push(num);
    }
}
console.log("R3.. ");
console.log(answer);



Array.prototype.filtered = function(Callback){
    const answer =[];
    for(let num of arr){
    if(Callback(num)){
        answer.push(num);
    }
}
return answer;

}
console.log("R4..");

const result = arr.filtered((num) => num > 20);

console.log(result);

// const ans1 = arr.filter((num)=>num%2==0);
// console.log(ans1);
