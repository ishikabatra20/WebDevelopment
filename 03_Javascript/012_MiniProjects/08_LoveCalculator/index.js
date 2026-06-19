const button = document.querySelector("button");
const boys= document.getElementById("name1");
const girls= document.getElementById("name2");
const h2 = document.querySelector("h2");


button.addEventListener('click', ()=>{
    const val1= boys.value.length;
    const val2= girls.value.length;

    const res=(val1*val2*val1*val2)%101;

    h2.textContent = `Result: ❤️ ${res}%`;

});