let a = 12;
const b=30;
var c = 90;

function greet(){
    let d = 50;
   
    console.log("Hello");
    console.log(d);
}

greet();
 //console.log(d); //error

 function counter1(){
    function increment1(){
        console.log("Increment the value");
        
    }
    increment1();
   return increment1;
 }
 counter1(); //Increment the value


 function counter2(){
    function increment2(){
        console.log("Increment the value");
        
    }
   
   return increment2;
 }

 const count = counter2();
 count(); //Increment the value

 function counter3(){
    let count=0;
    function increment3(){
        count++;
        console.log(count);
        
    }
   
   return increment3;
 }
 
 const count1 = counter3();
 count1();  //1