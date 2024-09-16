document.getElementById("delete-text-field").addEventListener("keyup", function(event) {
    const deleteText = event.target.value;
    const deleteButton = document.getElementById("delete-btn");
    if (deleteText === "delete" || deleteText === "Delete" || deleteText === "DELETE") {
        deleteButton.removeAttribute("disabled");
    }
    else {
        deleteButton.setAttribute("disabled", true);
    }
});
document.getElementById("delete-btn").addEventListener("click", function() {
    const secretInfo = document.getElementById("secret-info");
    secretInfo.style.display = "none";
});