async function github(number=20) {
    const res = await fetch(`https://api.github.com/users?per_page=${number}`);
    const data = await res.json();

    const rootElement = document.getElementById("root");
    rootElement.innerHTML = "";

    for (const user of data) {
        // Create container
        const container = document.createElement("div");
        container.style.display = "flex";
        container.style.alignItems = "center";
        container.style.gap = "20px";
        container.style.marginBottom = "20px";

        // Create image
        const img = document.createElement("img");
        img.src = user.avatar_url;
        img.style.height = "100px";
        img.style.width = "100px";

        // Create username
        const name = document.createElement("p");
        name.textContent = user.login;

        // Add image and name to container
        container.append(img, name);

        // Add container to root
        rootElement.append(container);
    }
}

github();

const search=document.querySelector("button");
const input = document.querySelector('input');

input.addEventListener()

search.addEventListener('click',()=>{
    const number = Number(input.value);
    github(number);

})