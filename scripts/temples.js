var date = new Date();
var year = date.getFullYear();
document.querySelector('#current-year').textContent = year;
document.querySelector('#last-mod').textContent = document.lastModified;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("ul");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});