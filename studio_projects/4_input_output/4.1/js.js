



  document.addEventListener('keydown', addLetter);
  function addLetter(event) { 
    if (event.key === 'a') {
      addDiv()
      ,remove(),a()
    }
  }
  $('.a').click(a);
  $(window).keyup(addDiv);


function addDiv(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("A");
    newLetter.appendChild(textnode);
  document.getElementById("as").appendChild(newLetter);
  newLetter.classList.add("a");
  newLetter.classList.add("middle");
  document.body.appendChild(newLetter);
}

function a() {
  if($('.a').hasClass('down')) {
    $('.a').removeClass('down');
    $('.a').addClass('up');
  } else {
    $('.a').removeClass('up');
    $('.a').addClass('down');
  }
}

function remove() {
  if($('.a').hasClass('down')) {
    $('.a').removeClass('down');
  } else {
    $('.a').removeClass('up');
  }
}

