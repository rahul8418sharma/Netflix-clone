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
  