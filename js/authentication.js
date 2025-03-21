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
