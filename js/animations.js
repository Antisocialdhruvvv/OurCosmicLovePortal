document.addEventListener("DOMContentLoaded", () => {
    const stars = document.createElement("div");
    stars.classList.add("stars");
    document.body.appendChild(stars);

    for (let i = 0; i < 100; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        stars.appendChild(star);
    }
});
document.addEventListener("DOMContentLoaded", () => {
    // Smooth Fade-In Animation for Sections
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    // Floating Hearts Effect
    function createHeart() {
        const heart = document.createElement("div");
        heart.className = "floating-heart";
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }
    setInterval(createHeart, 500);

    // Cosmic Background Animation
    let cosmicBg = document.getElementById("cosmic-background");
    let posX = 0;
    function moveCosmicBg() {
        posX += 0.1;
        cosmicBg.style.backgroundPosition = `${posX}px ${posX}px`;
        requestAnimationFrame(moveCosmicBg);
    }
    moveCosmicBg();
});
