
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("studentForm");
    const table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const rollNo = document.getElementById("rollNo").value;
        const fees = document.getElementById("fees").value;

        if (!name || !rollNo || !fees) {
            alert("Please fill in all fields.");
            return;
        }

        const row = table.insertRow();
        row.innerHTML = `<td>${name}</td><td>${rollNo}</td>
                         <td>${fees}</td>
                         <td><button onclick="deleteRow(this)">Delete</button></td>`;

        form.reset();
    });
});

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}





