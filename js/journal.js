document.addEventListener("DOMContentLoaded", () => {
    const entryInput = document.getElementById("journal-entry");
    const saveButton = document.getElementById("save-entry");
    const entriesList = document.getElementById("journal-entries");

    // Load saved journal entries from local storage
    const savedEntries = JSON.parse(localStorage.getItem("journalEntries")) || [];

    function displayEntries() {
        entriesList.innerHTML = "";
        savedEntries.forEach((entry, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <p>${entry}</p>
                <button onclick="deleteEntry(${index})">🗑 Delete</button>
            `;
            entriesList.appendChild(li);
        });
    }

    saveButton.addEventListener("click", () => {
        const entryText = entryInput.value.trim();
        if (entryText !== "") {
            savedEntries.push(entryText);
            localStorage.setItem("journalEntries", JSON.stringify(savedEntries));
            entryInput.value = "";
            displayEntries();
        }
    });

    window.deleteEntry = function(index) {
        savedEntries.splice(index, 1);
        localStorage.setItem("journalEntries", JSON.stringify(savedEntries));
        displayEntries();
    };

    displayEntries();
});
