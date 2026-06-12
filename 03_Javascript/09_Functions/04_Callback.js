function add(num1, num2){
    return num1+num2;
}
function sub(num1, num2){
    return num1-num2;
}
function mul(num1, num2){
    return num1*num2;
}

function Calculator(num1,num2,Callback){
    const res=Callback(num1,num2);
    console.log(res);
}

Calculator(10,20,add);
Calculator(30,5,function(a,b){
    return a/b;
})

Calculator(15,3,(a,b)=>{
    return a%b;
})
