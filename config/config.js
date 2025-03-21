document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Fetch settings from settings.json
        const response = await fetch("../config/settings.json");
        const settings = await response.json();

        // Apply Theme (Light/Dark Mode)
        if (settings.enableDarkMode) {
            document.body.classList.add("dark-mode");
        }

        // Apply Background Music
        if (settings.musicEnabled) {
            const audio = new Audio(settings.backgroundMusic);
            audio.loop = true;
            audio.volume = 0.5; // Adjust volume if needed
            audio.play();
        }

        // Apply Animations
        if (!settings.enableAnimations) {
            document.body.classList.add("disable-animations");
        }

        // Set Language (if applicable)
        document.documentElement.lang = settings.language;

        console.log("Settings applied successfully:", settings);
    } catch (error) {
        console.error("Error loading settings.json:", error);
    }
});
