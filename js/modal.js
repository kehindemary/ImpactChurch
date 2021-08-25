let btn = document.querySelectorAll("#myBtn");
let modal = document.querySelector("#myModal");
let span = document.querySelector(".close");

// When the user clicks the button, open the modal 
function openModal(){
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
}

for( i= 0; i < btn.length; i++) {
    btn[i].addEventListener('click', openModal);
}
btn.onclick = openModal
span.onclick= closeModal
console.log(btn)


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}