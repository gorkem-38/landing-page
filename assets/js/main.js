let button = document.getElementById("dark-mode");
let body = document.querySelector("body");
let title = document.querySelectorAll("h1");
let paragraphe = document.querySelectorAll("p");

console.log(button);
const darkMode = () => {
    body.classList.toggle.remove("bg-white");
    body.classList.add("dark-bg-black");
    title.classList.remove("text-black");
    title.classList.add("text-white");
    paragraphe.classList.remove("text-black");
    paragraphe.classList.add("text-white");
};

button.addEventListener("click", darkMode);

const sum = (value1, value2) => {
    return value1 + value2;
};
// sum(1, 2);
console.log(sum(1, 2));

