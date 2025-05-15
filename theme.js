function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById('themeToggleBtn');
  const isDark = body.classList.toggle('dark-mode');
  btn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  btn.setAttribute('aria-pressed', isDark);

  // Save user preference
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// On page load, set theme based on saved preference
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
      btn.textContent = 'Light Mode';
      btn.setAttribute('aria-pressed', true);
    }
  }
  
  // Existing greetUser and event listeners here...
});
