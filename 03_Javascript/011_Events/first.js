const child1= document.getElementById("child1");
const child2= document.getElementById("child2");
const child3= document.getElementById("child3");
const child4= document.getElementById("child4");

 const parent = document.getElementById("parent");

// parent.addEventListener('click', ()=>{
//     console.log("Parent is clicked");
// });

parent.addEventListener('click', (e)=>{
      console.log(e);
    e.target.textContent = "Parent";
  
});



child1.addEventListener('click', ()=>{
    child1.textContent="I am clicked";

});
child2.addEventListener('click', ()=>{
    child2.textContent="I am clicked";

});
child3.addEventListener('click', ()=>{
    child3.textContent="I am clicked";

});
child4.addEventListener('click', ()=>{
    child4.textContent="I am clicked";

});