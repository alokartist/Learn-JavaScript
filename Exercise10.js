function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email address. Please enter a valid email.');
      return;
    }

    // Password validation
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert('Invalid password. Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }

    // If all validations pass, you can perform further actions (e.g., submitting the form)
    alert('Form submitted successfully!');
    // You can also add code here to submit the form to a server using AJAX or other methods.
  }