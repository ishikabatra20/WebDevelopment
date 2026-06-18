const parent = document.getElementById("root");
const body = document.querySelector('body');

//double click
parent.addEventListener('dblclick', (e) => {
    body.style.backgroundColor = e.target.id;
});

//single click
// parent.addEventListener("click", (e) => {
//     body.style.backgroundColor = e.target.id;
// });

