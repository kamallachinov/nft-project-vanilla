function validateForm(event) {
    event.preventDefault();

    const emailErrorElement = document.getElementById('emailError');
    const passwordErrorElement = document.getElementById('passwordError');

    emailErrorElement.textContent = '';
    passwordErrorElement.textContent = '';

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

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

    console.log('Email Error:', emailErrorElement.textContent);
    console.log('Password Error:', passwordErrorElement.textContent);


    return emailErrorElement.textContent === '' && passwordErrorElement.textContent === '';
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
