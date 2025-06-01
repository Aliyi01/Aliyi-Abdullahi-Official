// Select hamburger and nav links
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');  // Animate hamburger
  navLinks.classList.toggle('active');   // Show/hide menu
});

// Close menu and reset hamburger on nav link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});// placeholder