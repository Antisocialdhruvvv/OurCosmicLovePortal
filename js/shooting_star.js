document.addEventListener("DOMContentLoaded", () => {
    const wishInput = document.getElementById("wish-input");
    const submitButton = document.getElementById("submit-wish");
    const wishesList = document.getElementById("wishes-list");

    function loadWishes() {
        fetch("../data/wishes.json")
            .then(response => response.json())
            .then(data => {
                wishesList.innerHTML = data.map(wish => `<p>🌠 ${wish.text}</p>`).join("");
            });
    }

    submitButton.addEventListener("click", () => {
        const newWish = wishInput.value.trim();
        if (newWish) {
            fetch("../data/wishes.json")
                .then(response => response.json())
                .then(data => {
                    data.push({ text: newWish });
                    return fetch("../data/wishes.json", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data)
                    });
                })
                .then(() => {
                    wishInput.value = "";
                    loadWishes();
                })
                .catch(error => console.error("Error saving wish:", error));
        }
    });

    loadWishes();
});
