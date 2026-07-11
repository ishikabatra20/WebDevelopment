
//Always 1 default not more than 1
export default function greet(){
    console.log("Hii from default");
}

export function fibonacci(){
console.log("Fib from default");
}

function modulus(){
    console.log("Remainder...");
}

//in this both will work
export{modulus};
