const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const h1 = document.querySelector("h1");

let count = 0;

btn1.addEventListener("click", () => {
    count++;
    h1.textContent = `Counter: ${count}`;
});

btn2.addEventListener("click", () => {
    if (count === 0) {
        return;
    }

    count--;
    h1.textContent = `Counter: ${count}`;
});