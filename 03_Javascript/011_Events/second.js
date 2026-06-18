 const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
 const child = document.getElementById("child");

grandparent.addEventListener('click', ()=>{
  grandparent.textContent="grandparent clicked";
   console.log("grandparent is clicked");

}, false);
parent.addEventListener('click', ()=>{
 parent.textContent="parent clicked";
  console.log("Parent is clicked");

}, false);
child.addEventListener('click', ()=>{
    child.textContent="child clicked";
     console.log("child is clicked");

}, false);

//event bubbling

//capture phase 