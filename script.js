function makeEnquiry(product) {
    alert("You have requested more information about " + product + ". Please fill out the contact form.");
    window.scrollTo(0, document.getElementById("contact").offsetTop);
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contactNo = document.getElementById('contactNo').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !contactNo || !message) {
        alert("All fields are required!");
        return false;
    }

    alert("Thank you for your enquiry, " + name + "!");
    return true;
}
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === "admin" && password === "password123") {
        alert("Login successful!");
        return true;
    } else {
        alert("Invalid username or password. Please try again.");
        return false;
    }
}
function logout() {
    localStorage.removeItem('username');
    window.location.href = "/index.html";
   
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function(event) {
            window.history.pushState(null, document.title, window.location.href);
        });
  
    alert("You have been logged out successfully.");
}

function validateRegistration() {
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return false;
    }
    alert("Registration successful for " + username + "!");
    return true; 
}
