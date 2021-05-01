
function a() {
    if($('.a').hasClass('down')) {
      $('.a').removeClass('down');
      $('.a').addClass('up');
    } else {
      $('.a').removeClass('up');
      $('.a').addClass('down');
    }
  }

  function a1() {
    if($('.a1').hasClass('d')) {
      $('.a1').removeClass('d');
      $('.a1').addClass('u');
    } else {
      $('.a1').removeClass('u');
      $('.a1').addClass('d');
    }
  }

  function animateA(e) {
      if(e.key === 'a') {
        a();
      }
  }


$(window).keyup(animateA);

//   document.addEventListener('keydown', addLetter);
//   function addLetter(event) {
//     console.log(event);
  
//     if (event.key === 'a') {
//       let newLetter = document.createElement("div");
//       newLetter.classList.add("a");
//       newLetter.classList.add("middle");
//       document.body.appendChild(newLetter);
//     }
//   }
//   function createA(e) {
//         if(e.key === 'a') {
//           addLetter();
//         }
//     }
