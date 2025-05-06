// signup.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const fullName = form.querySelector('input[type="text"]').value;
      const email = form.querySelector('input[type="email"]').value;
      const password = form.querySelector('input[type="password"]').value;
  
      if (!email || !password || !fullName) {
        alert('Please fill all fields.');
        return;
      }
  
      // Save user data to localStorage
      const user = { fullName, email, password };
      localStorage.setItem('netflixUser', JSON.stringify(user));
  
      alert('Signup successful!');
      window.location.href = 'login.html'; // Redirect to login
    });
  });
  