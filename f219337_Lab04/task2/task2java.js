document.getElementById('signinForm').addEventListener('submit', function(event) {
    var username = document.getElementById('signinUsername').value;
    var password = document.getElementById('signinPassword').value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Username and password are required.');
        event.preventDefault();
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    var username = document.getElementById('signupUsername').value;
    var password = document.getElementById('signupPassword').value;
    var email = document.getElementById('signupEmail').value;

    if (username.trim() === '' || password.trim() === '' || email.trim() === '') {
        alert('All fields are required.');
        event.preventDefault();
    }

    if (!/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password) || !/\d/.test(password)) {
        alert('Password must contain special and numeric characters.');
        event.preventDefault();
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Email address must be in a valid format.');
        event.preventDefault();
    }
});
