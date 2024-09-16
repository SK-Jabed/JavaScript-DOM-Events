const items = document.getElementsByClassName("item");
for (const item of items) {
    item.addEventListener("click", function(event) {
        event.target.parentNode.removeChild(event.target);      
        // console.log(event.target.parentNode);
        console.log(item);
    })
    
}

document.getElementById("add-items-btn").addEventListener("click", function() {
    const listContainer = document.getElementById("lists-container");
    const li = document.createElement("li");
    li.innerText = "Brand New Item Added";
    li.classList.add("item");
    listContainer.appendChild(li);
})