// const res = await fetch("https://api.github.com/users?per_page=20");
// const data= await res.json();
// console.log(data);

console.log("start");
async function githubAPI() {
  const res = await fetch("https://api.github.com/users?per_page=20");
  const data = await res.json();
  console.log(data);
}
githubAPI();
console.log("end");

