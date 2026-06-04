//Arithmetic operators
console.log(3+4);
console.log(3*4);
console.log(32/4);
console.log(31-4);
console.log(10%4);
console.log(10**4);

//assignment operators
let a=10;
let b=20;

console.log(a=a+b) ;
console.log(a-=b);
console.log(a*=b);
console.log(a/=b);
console.log(a%=b);

//pre increment- pehle m apni value ko 1 s inc krunga fir val dunga
console.log(++b);
console.log(b);

//post increment- pehle a ki original val lejiye fir inc krunga
console.log(a++);
console.log(a);


//Comparison operators
console.log(10>5);
console.log(10>=5);
console.log(10<15);
console.log(10<=5);

//== and ===
console.log("10"==10); //t
console.log("10"===10); //f
//JS: null is loosely equal to undefined and not to anyone
console.log(null==undefined); //t
console.log(null==0);//f
console.log(null==1);//f
console.log(null==true);//f
console.log(null==false);//f
console.log(0==undefined);//f
console.log(""==null);//f
console.log(" "==undefined);//f


//
console.log(true&&true);
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);
console.log(true&&"ABCD"); //ABCD
console.log(false&&"ABCD");//false

console.log(true||true);
console.log(true||false);
console.log(false||true);
console.log(false||false);
console.log(true||"ABCD");//true
console.log(false||"ABCD");//abcd











