const passwordReader = document.querySelector("input");
const h2 = document.querySelector("h2");
const strengthBar = document.getElementById("strength-bar");
passwordReader.addEventListener("input", () => {
    const password = passwordReader.value;

    const hasLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

    let score = 0;

    if (hasLength) score++;
    if (hasUpperCase) score++;
    if (hasLowerCase) score++;
    if (hasNumber) score++;
    if (hasSpecialChar) score++;
if (score === 0) {
    h2.textContent = "Strength: None";

    strengthBar.style.width = "0%";
    strengthBar.style.backgroundColor = "grey";
}
    else if (score <= 2) {
    h2.textContent = "Strength: Weak";

    strengthBar.style.width = "33%";
    strengthBar.style.backgroundColor = "red";

} 
else if (score <= 4) {
    h2.textContent = "Strength: Medium";

    strengthBar.style.width = "66%";
    strengthBar.style.backgroundColor = "gold";

} else {
    h2.textContent = "Strength: Strong";

    strengthBar.style.width = "100%";
    strengthBar.style.backgroundColor = "green";
}
});