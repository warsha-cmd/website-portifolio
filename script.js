// Magic Color Button
document.getElementById('color-btn')?.addEventListener('click', function() {
    const colors = ['#6C5CE7', '#FD79A8', '#00B894', '#0984E3', '#FDCB6E'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Typing Animation
const typingText = document.querySelector('.typing-text');
if (typingText) {
    const text = typingText.textContent;
    typingText.textContent = '';
    
    let i = 0;
    const typing = setInterval(() => {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, 100);
}

// Form Animation
const inputs = document.querySelectorAll('.input-group input, .input-group textarea');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentNode.querySelector('.underline').style.width = '100%';
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentNode.querySelector('.underline').style.width = '0';
        }
    });
});

// Simple Form Validation
document.getElementById('fun-form')?.addEventListener('submit', function(e) {
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email.value)) {
        e.preventDefault();
        alert('Please enter a valid email address');
        email.focus();
    }
});






function setGreeting() {
    const greetingElement = document.getElementById('greeting');
    
    if (greetingElement) {
        // Get current time in Tanzania (UTC+3)
        const now = new Date();
        const tzOffset = 3; // Tanzania is UTC+3
        const tzHour = (now.getUTCHours() + tzOffset) % 24;
        
        if (tzHour >= 5 && tzHour < 12) {
            greetingElement.textContent = 'Good Morning!';
        } else if (tzHour >= 12 && tzHour < 19) {
            greetingElement.textContent = 'Good Afternoon!';
        } else {
            greetingElement.textContent = 'Good Evening!';
        }
    }
}

// Call this when the page loads
document.addEventListener('DOMContentLoaded', setGreeting);






// Theme toggle functionality
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Save preference to localStorage
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    
    // Update ARIA label for accessibility
    const toggleButton = document.getElementById('theme-toggle');
    toggleButton.setAttribute('aria-label', 
        isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

// Initialize theme from localStorage
function initTheme() {
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Use saved mode if exists, otherwise use system preference
    if (savedMode === 'true' || (!savedMode && prefersDark)) {
        document.body.classList.add('dark-mode');
    }
    
    // Add event listener to toggle button
    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleDarkMode);
    }
}

// Call initTheme when DOM loads
document.addEventListener('DOMContentLoaded', initTheme);