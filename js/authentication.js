document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const userDisplay = document.getElementById("userDisplay");

    function hashPassword(password) {
        return btoa(password); // Base64 encoding (Replace with real hashing later)
    }

    function saveUser(username, password) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.find(user => user.username === username)) {
            alert("Username already exists!");
            return false;
        }
        users.push({ username, password: hashPassword(password) });
        localStorage.setItem("users", JSON.stringify(users));
        return true;
    }

    function authenticate(username, password) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        return users.some(user => user.username === username && user.password === hashPassword(password));
    }

    function loginUser(username) {
        sessionStorage.setItem("currentUser", username);
        alert(`Welcome back, ${username}!`);
        window.location.href = "index.html";
    }

    function logoutUser() {
        sessionStorage.removeItem("currentUser");
        alert("Logged out successfully!");
        window.location.href = "login.html";
    }

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("loginUsername").value;
            const password = document.getElementById("loginPassword").value;

            if (authenticate(username, password)) {
                loginUser(username);
            } else {
                alert("Invalid credentials. Try again!");
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("signupUsername").value;
            const password = document.getElementById("signupPassword").value;

            if (saveUser(username, password)) {
                alert("Signup successful! You can now log in.");
                window.location.href = "login.html";
            }
        });
    }

    if (userDisplay) {
        const currentUser = sessionStorage.getItem("currentUser");
        if (currentUser) {
            userDisplay.innerHTML = `Welcome, ${currentUser}! <button onclick="logoutUser()">Logout</button>`;
        }
    }
});
