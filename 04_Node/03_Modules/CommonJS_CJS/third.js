
//const obj = require("./fourth.js");
//obj={payment,hello}
//destructing
const{payment,hello} = require("./fourth.js");
const {add} = require("./inlineExports.js");

const a=10;
const b=20;


console.log("Mul: ", a*b);


payment(5000);
hello("Rachel");
add(60,70);


// OP-
// Mul:  200
// Payment of 5000 is successful.
// Hello Rachel!
// 130