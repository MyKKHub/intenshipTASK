function validateSignUpForm() {
    const signupForm = document.getElementById("signupForm");
    const username = signupForm.username.value;
    const email = signupForm.email.value;
    const password = signupForm.password.value;

    if (!isValidUsername(username)) {
        alert("Please enter a valid username .");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address .");
        return false;
    }

    if (!isValidPassword(password)) {
        alert("Password must meet certain requirements .");
        return false;
    }

   
     localStorage.setItem("email", email);
     localStorage.setItem("password", password);
 


    alert("Sign-up successful. You will now be redirected to the login page.");
    location.href = "login.html"; 
    return true;
}

function validateSignInForm() {
    const signinForm = document.getElementById("signinForm");
    const email = signinForm.email.value;
    const password = signinForm.password.value;


    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
        alert("Sign-in successful. You will now be redirected to the main page.");
        location.href = "index.html";
        return true;
    } else {
        alert("Invalid email or password. Please try again .");
        return false;
    }
   
}



document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    validateSignUpForm();
});

document.getElementById("signinForm").addEventListener("submit", function (e) {
    e.preventDefault();
    validateSignInForm();
});


function isValidUsername(username) {
    return username.length >= 3; 
}

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
}

