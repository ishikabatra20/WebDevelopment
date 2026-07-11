import {add, sub} from "./second.js";
import {mul,fib} from "./inlineExports.js";
import greet,{modulus, fibonacci} from "./defaultExport.js";
console.log("I am first");
add();
sub();
mul();
fib();
greet();
modulus();
fibonacci();
console.log("I am done");

