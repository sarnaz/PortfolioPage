const descriptions = ["Software Developer", "Data Analyst", "Problem Solver"];
const textElement = document.querySelector(".typing-animation .text");

function typeText(text, callback) {
  let index = 0;
  const interval = setInterval(() => {
    textElement.textContent = text.slice(0, index);
    index++;

    if (index > text.length) {
      clearInterval(interval);
      setTimeout(callback, 500);
    }
  }, 100);
}

function untypeText(text, callback) {
  let index = text.length;
  const interval = setInterval(() => {
    textElement.textContent = text.slice(0, index);
    index--;

    if (index < 0) {
      clearInterval(interval);
      if (callback) {
        callback();
      }
    }
  }, 50);
}

function loopDescriptions(index) {
  if (index >= descriptions.length) {
    index = 0; // Loop back to the beginning
  }

  typeText(descriptions[index], () => {
    setTimeout(() => {
      untypeText(descriptions[index], () => {
        loopDescriptions(index + 1);
      });
    }, 1000);
  });
}

// Start the loop
loopDescriptions(0);
// Navigation menu code
const toggleButton = document.getElementById("toggleNav");
const menu = document.getElementById("mainNav");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});
