// Event Triggered by Click on The Button 
document.getElementById("more-btn").addEventListener("click", function() {
    console.log("Event Triggered by Click on The Button");
});
// Event Triggered by Hover or Enter Mouse on The Button
document.getElementById("more-btn").addEventListener("mouseenter", function() {
    console.log("Event Triggered By Hover or Enter Mouse Over The Button");
});
// Event Triggered by Moving Mouse Over The Button
document.getElementById("more-btn").addEventListener("mousemove", function() {
    console.log("Event Triggered By Moving Mouse Over The Button");
});
// Event Triggered by Focus on The Input Field
document.getElementById("text-field").addEventListener("focus", function() {
    console.log("Event Triggered By Focusing Inside The Input Field");
});
// Event triggered to Blur By Click Outside The Input Field
document.getElementById("text-field").addEventListener("blur", function() {
    console.log("Event triggered to Blur By Click Outside The Input Field");
});
// Event Triggered by Using Keydown, Keypress and Keyup
document.getElementById("text-field").addEventListener("keydown", function(event) {
    console.log(event.target.value);
});
document.getElementById("text-field").addEventListener("keypress", function(event) {
    console.log(event.target.value);
});
document.getElementById("text-field").addEventListener("keyup", function(event) {
    console.log(event.target.value);
});
