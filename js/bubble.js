document.getElementById("item-3").addEventListener("click", function() {
    console.log("HP Laptop Clicked");
    // event.stopImmediatePropagation();
});
document.getElementById("list-items").addEventListener("click", function() {
    console.log("List Items Clicked");
});
document.getElementById("list-container").addEventListener("click", function() {
    console.log("List Container Clicked");
});
document.getElementById("body").addEventListener("click", function() {
    console.log("Body of The HTML Clicked");
});