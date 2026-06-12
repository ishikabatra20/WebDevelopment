//reduce() → combine all elements into a single value

const arr=[10,20,30,40,50];

//accumalator=0
//0+10=10
//10+20=30
//30+30=60
// 60 + 40 = 100
// 100 + 50 = 150
 const reducerSum= arr.reduce((accumalator, num)=>{
    return accumalator+num;
});
console.log(reducerSum);

//accumalator=1
const reducerMul= arr.reduce((accumalator, num)=>{
    return accumalator*num;
});
console.log(reducerMul);