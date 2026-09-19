const form = document.getElementById("authForm");
const switchBtn = document.getElementById("switchBtn");

const formTitle = document.getElementById("formTitle");
const formText = document.getElementById("formText");
const authButton = document.getElementById("authButton");
const switchMessage = document.getElementById("switchMessage");

const nameBox = document.getElementById("nameBox");
const confirmBox = document.getElementById("confirmBox");

let signupMode = false;


/* Login/Signup switch */

switchBtn.addEventListener("click", function () {

    signupMode = !signupMode;

    nameBox.classList.toggle("hidden", !signupMode);
    confirmBox.classList.toggle("hidden", !signupMode);

    if (signupMode) {
        formTitle.textContent = "Create Account";
        formText.textContent = "Join Robo Tech Forum";
        authButton.textContent = "Sign Up";
        switchMessage.textContent = "Already have an account?";
        switchBtn.textContent = "Login";
    } else {
        formTitle.textContent = "Login";
        formText.textContent = "Login to continue to RTF";
        authButton.textContent = "Login";
        switchMessage.textContent = "Don't have an account?";
        switchBtn.textContent = "Sign Up";
    }
});


/* FORM VALIDATION */

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    document.querySelectorAll("small").forEach(error => {
        error.textContent = "";
    });

    let valid = true;

    if (signupMode && fullName === "") {
        document.getElementById("nameError").textContent = "Full name is required.";
        valid = false;
    }

    if (username === "") {
        document.getElementById("usernameError").textContent = "Username is required.";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        valid = false;
    } else if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "Email must contain @.";
        valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        valid = false;
    }

    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required.";
        valid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").textContent =
            "Password must be at least 6 characters.";
        valid = false;
    }

    if (signupMode && password !== confirmPassword) {
        document.getElementById("confirmError").textContent =
            "Passwords do not match.";
        valid = false;
    }

    if (valid) {

        // Save username for the home page
        localStorage.setItem("rtfUsername", username);

        // Go to home page
        window.location.href = "home.html";
    }
});