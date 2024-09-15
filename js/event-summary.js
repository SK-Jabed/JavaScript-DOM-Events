// Option - 01 
function handleOnClick() {
    const handlerStatus = document.getElementById("handler-status");
    handlerStatus.innerText = "Handled by Function Attached on onclick Function";
};

// Option - 02 
document.getElementById("event-listener").addEventListener("click", function() {
    const handlerStatus = document.getElementById("handler-status");
    handlerStatus.innerText = "Text Updated by Event Listener";
});
//------------------------ OR -------------------------
document.getElementById("update-btn").addEventListener("click", function() {
    const inputField = document.getElementById("input-field");
    const inputText = inputField.value;

    const h4 = document.getElementById("update-input-text");
    h4.innerText = inputText;
    inputField.value = "";
});
