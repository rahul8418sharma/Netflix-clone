// Open and close movie modal
function openModal(title, description) {
    document.getElementById('movieTitle').textContent = title;
    document.getElementById('movieDescription').textContent = description;
    const modal = document.getElementById('movieModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
  
  function closeModal() {
    const modal = document.getElementById('movieModal');
    modal.classList.add('hidden');
  }
  
  // Theme toggle logic
  function toggleTheme() {
    const body = document.getElementById('body');
    const isDark = body.classList.contains('bg-black');
  
    if (isDark) {
      body.classList.remove('bg-black', 'text-white');
      body.classList.add('bg-white', 'text-black');
      document.querySelectorAll('#modeToggle, #modeToggleMobile').forEach(btn => btn.textContent = '☀️');
    } else {
      body.classList.remove('bg-white', 'text-black');
      body.classList.add('bg-black', 'text-white');
      document.querySelectorAll('#modeToggle, #modeToggleMobile').forEach(btn => btn.textContent = '🌙');
    }
  }
  
  // Bind toggles
  document.getElementById('modeToggle').addEventListener('click', toggleTheme);
  document.getElementById('modeToggleMobile').addEventListener('click', toggleTheme);
  
  // Hamburger menu toggle
  document.getElementById('hamburgerBtn').addEventListener('click', () => {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
  });
 

// login.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const email = form.querySelector('input[type="email"]').value;
      const password = form.querySelector('input[type="password"]').value;
  
      const storedUser = JSON.parse(localStorage.getItem('netflixUser'));
  
      if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
        alert('Invalid email or password!');
        return;
      }
  
      alert('Login successful!');
      window.location.href = 'index.html'; // Redirect to home page
    });
  });
  