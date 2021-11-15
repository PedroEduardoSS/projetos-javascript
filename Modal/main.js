// Get modal element
var modal = document.getElementById("simpleModal");
// Get open modal button
var modalBtn = document.getElementById("modalBtn");
// Get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// listen for click
modalBtn.addEventListener("click", openModal);

// listen for close click
closeBtn.addEventListener("click", closeModal);

// listen for outside click
window.addEventListener("click", outsideClick);

function openModal(){
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
}

function outsideClick(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}
