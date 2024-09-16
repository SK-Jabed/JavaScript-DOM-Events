// STEP - 01: Add Event LIstener to The Post Button
document.getElementById("post-btn").addEventListener("click", function() {
    // STEP - 02: Get The Comment Inside Text Area
    const commentBox = document.getElementById("new-comment");
    const newComment = commentBox.value;

    // STEP - 03: Set The Comment Inside Comment Container 
    // 01. Get The Comment Container
    // 02. Create a New Element (P Tag)
    // 03. Set The Text of The Comment as InnerText of The P Tag
    // 04. Add The P Tag Using appendChild
    const commentContainer = document.getElementById("comment-container");
    const p = document.createElement("p");
    p.innerText = newComment;
    commentContainer.appendChild(p);

    // Step - 04: Clear The Textarea
    commentBox.value = "";
})