/*
const text = document.querySelector(".second");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Software Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "Data Analyst";
  }, 6000);
  setTimeout(() => {
    text.textContent = "Problem Solver";
  }, 12000);
};
textLoad();
setInterval(textLoad, 18000);
*/
// Navigation menu code
const toggleButton = document.getElementById("toggleNav");
const menu = document.getElementById("mainNav");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});
