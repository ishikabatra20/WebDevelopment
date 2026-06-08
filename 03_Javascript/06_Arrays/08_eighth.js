const names=["Rachel", "Monica", "Phoebe", "Monica"];
//convert array to string
console.log(names.join(',')); //Rachel,Monica,Phoebe
console.log(names.join(' ')); //Rachel Monica Phoebe
console.log(names.join('-')); //Rachel-Monica-Phoebe
console.log(typeof names.join(',')); //string

console.log(names.indexOf("Monica")); //1
console.log(names.indexOf("Ross")); //-1    
console.log(names.lastIndexOf("Monica")); //3

console.log(names.includes("Monica")); //true
console.log(names.includes("Ross")); //false