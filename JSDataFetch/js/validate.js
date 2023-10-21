// DOM elements
const loginSection = document.getElementById('login');
const signupSection = document.getElementById('signup');
const profileSection = document.getElementById('profile');
const signupLink = document.getElementById('signup-link');
const signinLink = document.getElementById('signin-link');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userPhone = document.getElementById('user-phone');
const signOutButton = document.getElementById('sign-out');
const removeButton = document.getElementById('remove-details-button');


// Initial state
let currentUser = null;

// Function to toggle sections
function toggleSection(show, hide1, hide2) {
    show.classList.remove('hidden');
    show.classList.add('visible');
    hide1.classList.add('hidden');
    hide1.classList.remove('visible');
    hide2.classList.add('hidden');
    hide2.classList.remove('visible');
}

// Handle Sign Up and Sign In links
signupLink.addEventListener('click', function () {
    toggleSection(signupSection, loginSection, profileSection);
});

signinLink.addEventListener('click', function () {
    toggleSection(loginSection, signupSection, profileSection);
});

// Handle Sign Out
signOutButton.addEventListener('click', function () {
    
    localStorage.removeItem("isSignedIn");

    currentUser = null;
    toggleSection(loginSection, signupSection, profileSection);
    clearProfileInfo();
});

removeButton.addEventListener('click', function () {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    localStorage.removeItem("password");
    localStorage.removeItem("isSignedIn");
    
    currentUser = null;
    toggleSection(loginSection, signupSection, profileSection);
    clearProfileInfo();
});



// Function to display user profile
function displayProfile() {
    userName.textContent = currentUser.name;
    userEmail.textContent = currentUser.email;
    userPhone.textContent = currentUser.phone;
    toggleSection(profileSection, loginSection, signupSection);
}

// Function to clear user profile info
function clearProfileInfo() {
    userName.textContent = '';
    userEmail.textContent = '';
    userPhone.textContent = '';
}

// Handle Sign Up
signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const phone = document.getElementById('signup-phone').value;
    const password = document.getElementById('signup-password').value;

    if (!isValidUsername(name)) {
        alert("Please enter a valid username.");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!isValidPassword(password)) {
        alert("Password must meet certain requirements.");
        return false;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone); // Added to store the phone number
    localStorage.setItem("password", password);

    if (name && email && phone && password) {
        currentUser = { name, email, phone };
        alert("Sign-up successful.");
        
        location.href="signup.html"
    } else {
        alert('Check or Enter correct details');
    }
});

// Handle Sign In
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    console.log("Input Email: " + email);
    console.log("Stored Email: " + storedEmail);
    console.log("Input Password: " + password);
    console.log("Stored Password: " + storedPassword);

    if (email === storedEmail && password === storedPassword) {
        localStorage.setItem("isSignedIn", "true");
        currentUser = { name: localStorage.getItem("name"), email: localStorage.getItem("email"), phone: localStorage.getItem("phone") };
        alert("Sign-in successful.");
        location.href="index.html"
        displayProfile();
        
        
    } else {
        alert("Invalid email or password. Please try again.");
        return false;
    }
});

function isValidUsername(name) {
    return name.length >= 3; // Fixed the variable name from 'username' to 'name'
}

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
}
