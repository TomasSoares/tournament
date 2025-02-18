// Dark Mode Toggle Script
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check for saved dark mode preference
if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
  darkModeToggle.textContent = '☀️';
}

// Toggle Dark Mode
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
    darkModeToggle.textContent = '☀️';
  } else {
    localStorage.setItem('dark-mode', 'disabled');
    darkModeToggle.textContent = '🌙';
  }
});

const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;


