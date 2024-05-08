function validateForm(event) {
    event.preventDefault();

    const usernameErrorElement = document.getElementById('usernameError');
    const emailErrorElement = document.getElementById('emailError');
    const passwordErrorElement = document.getElementById('passwordError');
    const confirmPasswordErrorElement = document.getElementById('confirmPasswordError');

    usernameErrorElement.textContent = '';
    emailErrorElement.textContent = '';
    passwordErrorElement.textContent = '';
    confirmPasswordErrorElement.textContent = '';

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!username.trim()) {
        usernameErrorElement.textContent = 'Username is required';
    }

    if (!email.trim()) {
        emailErrorElement.textContent = 'Email is required';
    } else if (!validateEmail(email)) {
        emailErrorElement.textContent = 'Invalid email address';
    }

    if (!password.trim()) {
        passwordErrorElement.textContent = 'Password is required';
    } else if (password.length < 8) {
        passwordErrorElement.textContent = 'Password must be at least 8 characters';
    } else {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(password)) {
            passwordErrorElement.textContent = 'Invalid password format';
        }
    }

    if (confirmPassword !== password) {
        confirmPasswordErrorElement.textContent = 'Passwords do not match';
    }

    console.log('Username Error:', usernameErrorElement.textContent);
    console.log('Email Error:', emailErrorElement.textContent);
    console.log('Password Error:', passwordErrorElement.textContent);
    console.log('Confirm Password Error:', confirmPasswordErrorElement.textContent);

    return (
        usernameErrorElement.textContent === '' &&
        emailErrorElement.textContent === '' &&
        passwordErrorElement.textContent === '' &&
        confirmPasswordErrorElement.textContent === ''
    );
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
