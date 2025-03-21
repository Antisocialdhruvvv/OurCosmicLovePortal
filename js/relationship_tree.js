document.addEventListener("DOMContentLoaded", () => {
    const treeContainer = document.getElementById("tree-container");
    const addPersonBtn = document.getElementById("add-person");

    let relationshipData = JSON.parse(localStorage.getItem("relationshipTree")) || [];

    function displayTree() {
        treeContainer.innerHTML = "";
        relationshipData.forEach((person, index) => {
            const div = document.createElement("div");
            div.className = "person";
            div.innerHTML = `
                <h3>${person.name}</h3>
                <p>Relation: ${person.relation}</p>
                <button onclick="editPerson(${index})">✏ Edit</button>
                <button onclick="deletePerson(${index})">🗑 Delete</button>
            `;
            treeContainer.appendChild(div);
        });
    }

    addPersonBtn.addEventListener("click", () => {
        const name = prompt("Enter Name:");
        const relation = prompt("Enter Relation:");
        if (name && relation) {
            relationshipData.push({ name, relation });
            localStorage.setItem("relationshipTree", JSON.stringify(relationshipData));
            displayTree();
        }
    });

    window.editPerson = function(index) {
        const newName = prompt("Edit Name:", relationshipData[index].name);
        const newRelation = prompt("Edit Relation:", relationshipData[index].relation);
        if (newName && newRelation) {
            relationshipData[index] = { name: newName, relation: newRelation };
            localStorage.setItem("relationshipTree", JSON.stringify(relationshipData));
            displayTree();
        }
    };

    window.deletePerson = function(index) {
        relationshipData.splice(index, 1);
        localStorage.setItem("relationshipTree", JSON.stringify(relationshipData));
        displayTree();
    };

    displayTree();
});
