// Option - 01 
function handleOnClick() {
    const handlerStatus = document.getElementById("handler-status");
    handlerStatus.innerText = "Handled by Function Attached on onclick Function";
}
document.getElementById("event-listener").addEventListener("click", function() {
    const handlerStatus = document.getElementById("handler-status");
    handlerStatus.innerText = "Text Updated by Event Listener";
})

