

function payment(num1){
    console.log(`Payment of ${num1} is successful.`);
    
    
}

function hello(name){
    console.log(`Hello ${name}!`);
    
}


//module.exports=payment;
// module.exports={
//     payment=payment,
//     hello=hello
// }
//since key, value same so can be written like this
module.exports={payment,hello}