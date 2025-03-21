document.addEventListener("DOMContentLoaded", () => {
    const authForm = document.getElementById("authForm");
    const authMessage = document.getElementById("authMessage");

    authForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simulating user authentication with localStorage
        let storedUser = localStorage.getItem("user");
        if (!storedUser) {
            localStorage.setItem("user", JSON.stringify({ username, password }));
            authMessage.innerHTML = "Account created! Please log in.";
        } else {
            storedUser = JSON.parse(storedUser);
            if (storedUser.username === username && storedUser.password === password) {
                authMessage.innerHTML = `Welcome back, ${username}!`;
            } else {
                authMessage.innerHTML = "Invalid credentials. Try again!";
            }
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("loginUsername").value;
            const password = document.getElementById("loginPassword").value;

            const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
            const user = storedUsers.find(user => user.username === username && user.password === password);

            if (user) {
                alert("Login successful!");
                window.location.href = "index.html";
            } else {
                alert("Invalid username or password!");
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const newUsername = document.getElementById("signupUsername").value;
            const newPassword = document.getElementById("signupPassword").value;

            let users = JSON.parse(localStorage.getItem("users")) || [];
            if (users.find(user => user.username === newUsername)) {
                alert("Username already exists!");
                return;
            }

            users.push({ username: newUsername, password: newPassword });
            localStorage.setItem("users", JSON.stringify(users));

            alert("Signup successful! You can now log in.");
            window.location.href = "login.html";
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const userDisplay = document.getElementById("userDisplay");

    function saveUser(username, password) {
        localStorage.setItem("user", JSON.stringify({ username, password }));
    }

    function getUser() {
        return JSON.parse(localStorage.getItem("user"));
    }

    function authenticate(username, password) {
        const storedUser = getUser();
        return storedUser && storedUser.username === username && storedUser.password === password;
    }

    loginForm?.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        if (authenticate(username, password)) {
            sessionStorage.setItem("loggedInUser", username);
            window.location.href = "index.html";
        } else {
            alert("Invalid credentials. Try again!");
        }
    });

    registerForm?.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("registerUsername").value;
        const password = document.getElementById("registerPassword").value;
        saveUser(username, password);
        alert("Registration successful! You can now log in.");
        window.location.href = "login.html";
    });

    function checkLogin() {
        const loggedInUser = sessionStorage.getItem("loggedInUser");
        if (loggedInUser) {
            userDisplay.innerHTML = `Welcome, ${loggedInUser}! <button onclick="logout()">Logout</button>`;
        }
    }

    window.logout = function () {
        sessionStorage.removeItem("loggedInUser");
        window.location.href = "login.html";
    };

    checkLogin();
});
