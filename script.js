/* Global JavaScript File */

// Cosmic Background Animation (Star Twinkle Effect)
function createStars() {
    const starContainer = document.createElement('div');
    starContainer.classList.add('stars');
    document.body.appendChild(starContainer);
    
    for (let i = 0; i < 100; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.animationDuration = Math.random() * 2 + 1 + 's';
        starContainer.appendChild(star);
    }
}
createStars();

// Authentication System (Basic Simulation)
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        
        if (username === "Dhruv" && password === "Samridhi") {
            alert("Welcome to Our Cosmic Love Portal!");
            window.location.href = 'dashboard.html'; // Redirect to dashboard
        } else {
            alert("Incorrect login credentials!");
        }
    });
}

// Nickname Generator
const nicknames = ["Starlight", "Moonbeam", "Sunflower", "Nebula", "Comet", "Twinkle", "Serenity", "Eclipse"];
function generateNickname() {
    let randomIndex = Math.floor(Math.random() * nicknames.length);
    document.getElementById('nickname-display').innerText = nicknames[randomIndex];
}

// Shooting Star Wish System
function makeWish() {
    let wish = prompt("Make a wish upon the shooting star ✨");
    if (wish) {
        alert("Your wish has been saved to the stars! 🌠");
    }
}

// Love Meter Quiz
function calculateLoveMeter() {
    let score = Math.floor(Math.random() * 101);
    document.getElementById('love-meter-score').innerText = `Love Compatibility: ${score}% ❤️`;
}
