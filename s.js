document.addEventListener("DOMContentLoaded", () => {
  const greeting = document.getElementById("greeting");
  const text = "Hii, Bijoy Kar";
  greeting.textContent = ""; // clear existing text
  let index = 0;

  // Function to type letters
  function typeLetter() {
    if (index < text.length) {
      const span = document.createElement("span");
      span.textContent = text[index];
      greeting.appendChild(span);
      index++;
      setTimeout(typeLetter, 100); // typing speed
    }
  }

  typeLetter(); // start typing

  // Rainbow light effect on letters
  let hue = 0;
  setInterval(() => {
    const spans = greeting.querySelectorAll("span");
    spans.forEach((span, i) => {
      span.style.color = `hsl(${(hue + i * 30) % 360}, 80%, 70%)`; // light rainbow
    });
    hue += 2; // speed of color shift
  }, 100); // refresh every 100ms
});
const menuToggle = document.querySelector('.hamburger'); // ✅ matches your HTML
const navMenu = document.querySelector('.circle-navbar');
const navLinks = document.querySelectorAll('.circle-navbar a');

// Toggle menu on hamburger click
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuToggle.classList.toggle('active'); // animates hamburger to X
});

// Hide menu after clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});
