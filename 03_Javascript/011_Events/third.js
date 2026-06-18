const button = document.getElementById("button");

function handleClick() {
    button.textContent = "button clicked";
    button.removeEventListener("click", handleClick);
}

button.addEventListener("click", handleClick);

// button.addEventListener('click', ()=>{
//   button.textContent="button clicked";
   

// });

//this won't work

// button.removeEventListener('click', ()=>{
//   button.textContent="button clicked";
   

// });