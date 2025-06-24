// Email validation regex
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Password strength: at least 8 chars, 1 uppercase, 1 lowercase, 1 number
function isStrongPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
}

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');
const submitBtn = document.getElementById('submitBtn');
const form = document.getElementById('registerForm');

function validateForm() {
    let emailValid = false;
    let passwordValid = false;

    // Email validation
    if (!emailInput.value) {
        emailFeedback.textContent = 'Email is required.';
    } else if (!isValidEmail(emailInput.value)) {
        emailFeedback.textContent = 'Please enter a valid email address.';
    } else {
        emailFeedback.textContent = '';
        emailValid = true;
    }

    // Password validation
    if (!passwordInput.value) {
        passwordFeedback.textContent = 'Password is required.';
    } else if (!isStrongPassword(passwordInput.value)) {
        passwordFeedback.textContent = 'Password must be at least 8 characters, include uppercase, lowercase, and a number.';
    } else {
        passwordFeedback.textContent = '';
        passwordValid = true;
    }

    submitBtn.disabled = !(emailValid && passwordValid);
}

emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateForm();
    if (!submitBtn.disabled) {
        alert('Form submitted successfully!');
        form.reset();
        submitBtn.disabled = true;
    }
}); 