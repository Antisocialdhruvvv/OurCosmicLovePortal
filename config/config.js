document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Fetch settings from settings.json
        const response = await fetch("../config/settings.json");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const settings = await response.json();

        // Apply Theme (Light/Dark Mode) with toggle support
        if (settings.enableDarkMode) {
            document.body.classList.add("dark-mode");
        }
        document.getElementById("themeToggle")?.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });

        // Apply Background Music (Check for file existence)
        if (settings.musicEnabled && settings.backgroundMusic) {
            const audio = new Audio(settings.backgroundMusic);
            audio.loop = true;
            audio.volume = 0.5;

            document.getElementById("playMusic")?.addEventListener("click", () => {
                audio.play().catch(err => console.error("Autoplay failed:", err));
            });
            document.getElementById("pauseMusic")?.addEventListener("click", () => {
                audio.pause();
            });
        }

        // Apply Animations
        if (!settings.enableAnimations) {
            document.body.classList.add("disable-animations");
        }

        // Set Language
        document.documentElement.lang = settings.language || "en";

        console.log("Settings applied successfully:", settings);
    } catch (error) {
        console.error("Error loading settings.json:", error);
        alert("Failed to load settings. Please check your configuration.");
    }
});
