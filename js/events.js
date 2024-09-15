// Option - 01 : Directly Set on The HTML Element 

// Option - 02
// Important - We will use it 
function makeRed() {
    document.body.style.backgroundColor = "red";
}

// Option - 03
const makeTomatoButton = document.getElementById("make-tomato");
makeTomatoButton.onclick = makeTomato;

function makeTomato() {
    document.body.style.backgroundColor = "tomato";
}
//------------------------ OR -------------------------
const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = "purple";
}

// Option - 04
// Important : We will use it sometimes 
const makeAquaButton = document.getElementById("make-aqua");
makeAquaButton.addEventListener("click", makeAqua);

function makeAqua() {
    document.body.style.backgroundColor = "aqua";
}
//------------------------ OR -------------------------
const makeGoldButton = document.getElementById("make-gold");
makeGoldButton.addEventListener("click", function makeGold() {
    document.body.style.backgroundColor = "gold";
});
//------------------------ OR -------------------------
document.getElementById("make-orange").addEventListener("click", function(){
    document.body.style.backgroundColor = "orange";
});

document.getElementById("make-blue").addEventListener("click", function(){
    document.body.style.backgroundColor = "blue";
});