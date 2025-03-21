document.addEventListener("DOMContentLoaded", () => {
    fetch("../data/reality_choices.json")
        .then(response => response.json())
        .then(data => startStory(data))
        .catch(error => console.error("Error loading story:", error));
});

function startStory(storyData) {
    const storyContainer = document.getElementById("story-container");
    const choicesContainer = document.getElementById("choices");

    function displayScene(scene) {
        storyContainer.innerHTML = `<p>${scene.text}</p>`;
        choicesContainer.innerHTML = "";
        scene.choices.forEach(choice => {
            const btn = document.createElement("button");
            btn.textContent = choice.text;
            btn.addEventListener("click", () => displayScene(storyData[choice.next]));
            choicesContainer.appendChild(btn);
        });
    }

    displayScene(storyData.start);
}
