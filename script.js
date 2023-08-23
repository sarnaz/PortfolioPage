const descriptions = ["Software Developer", "Data Analyst", "Problem Solver"];
const text = document.querySelector(".text");
let currentIndex = 0;

const textLoad = () => {
  text.textContent = descriptions[currentIndex];
  currentIndex = (currentIndex + 1) % descriptions.length;
};

textLoad();
setInterval(textLoad, 6000);
// Navigation menu code
const toggleButton = document.getElementById("toggleNav");
const menu = document.getElementById("mainNav");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});
