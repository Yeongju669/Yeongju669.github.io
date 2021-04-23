

//modal
var modal = document.getElementById("myModal");
console.log('yohohoho')

//opens the modal
var btn = document.getElementById("ob");

//element that closes the modal
var span = document.getElementsByClassName("close")[0];

//open
btn.onclick = function() {
  modal.style.display = "block";
}

//close
span.onclick = function() {
  modal.style.display = "none";
  console.log('close')
}

//clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
console.log('?????/')




