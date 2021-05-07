// 1 to 0
// 1
document.addEventListener('keydown', addLetterOne);
function addLetterOne(event) { 
  if (event.key === '1') {
    addDivOne()
    ,removeOne(),one()
  }
}
$('.one').click(one);
$(window).keyup(addDivOne);

function addDivOne(){
let newLetter = document.createElement("div");
  let textnode = document.createTextNode("1");
  newLetter.appendChild(textnode);
document.getElementById("ones").appendChild(newLetter);
newLetter.classList.add("one");
newLetter.classList.add("onetoz");
}

function one() {
if($('.one').hasClass('numberdown')) {
  $('.one').removeClass('numberdown');
  $('.one').addClass('numberup');
} else {
  $('.one').removeClass('numberup');
  $('.one').addClass('numberdown');
}
}

function removeOne() {
if($('.one').hasClass('numberdown')) {
  $('.one').removeClass('numberdown');
} else {
  $('.one').removeClass('numberup');
}
}


// 2
document.addEventListener('keydown', addLetterTwo);
function addLetterTwo(event) { 
  if (event.key === '2') {
    addDivTwo()
    ,removeTwo(),two()
  }
}
$('.two').click(two);
$(window).keyup(addDivTwo);

function addDivTwo(){
let newLetter = document.createElement("div");
  let textnode = document.createTextNode("2");
  newLetter.appendChild(textnode);
document.getElementById("twos").appendChild(newLetter);
newLetter.classList.add("two");
newLetter.classList.add("onetoz");
}

function two() {
if($('.two').hasClass('numberdowndown')) {
  $('.two').removeClass('numberdowndown');
  $('.two').addClass('numberupup');
} else {
  $('.two').removeClass('numberupup');
  $('.two').addClass('numberdowndown');
}
}

function removeTwo() {
if($('.two').hasClass('numberdowndown')) {
  $('.two').removeClass('numberdowndown');
} else {
  $('.two').removeClass('numberupup');
}
}

// 3
document.addEventListener('keydown', addLetterThree);
function addLetterThree(event) { 
  if (event.key === '3') {
    addDivThree()
    ,removeThree(),three()
  }
}
$('.three').click(three);
$(window).keyup(addDivThree);

function addDivThree(){
let newLetter = document.createElement("div");
  let textnode = document.createTextNode("3");
  newLetter.appendChild(textnode);
document.getElementById("threes").appendChild(newLetter);
newLetter.classList.add("three");
newLetter.classList.add("onetoz");
}

function three() {
if($('.three').hasClass('numberdown')) {
  $('.three').removeClass('numberdown');
  $('.three').addClass('numberup');
} else {
  $('.three').removeClass('numberup');
  $('.three').addClass('numberdown');
}
}

function removeThree() {
if($('.three').hasClass('numberdown')) {
  $('.three').removeClass('numberdown');
} else {
  $('.three').removeClass('numberup');
}
}

// 4
document.addEventListener('keydown', addLetterFour);
function addLetterFour(event) { 
  if (event.key === '4') {
    addDivFour()
    ,removeFour(),four()
  }
}
$('.four').click(four);
$(window).keyup(addDivFour);

function addDivFour(){
let newLetter = document.createElement("div");
  let textnode = document.createTextNode("4");
  newLetter.appendChild(textnode);
document.getElementById("fours").appendChild(newLetter);
newLetter.classList.add("four");
newLetter.classList.add("onetoz");
}

function four() {
if($('.four').hasClass('numberdowndown')) {
  $('.four').removeClass('numberdowndown');
  $('.four').addClass('numberupup');
} else {
  $('.four').removeClass('numberupup');
  $('.four').addClass('numberdowndown');
}
}

function removeFour() {
if($('.four').hasClass('numberdowndown')) {
  $('.four').removeClass('numberdowndown');
} else {
  $('.four').removeClass('numberupup');
}
}

// 5
document.addEventListener('keydown', addLetterFive);
function addLetterFive(event) { 
  if (event.key === '5') {
    addDivFive()
    ,removeFive(),five()
  }
}
$('.five').click(five);
$(window).keyup(addDivFive);

function addDivFive(){
let newLetter = document.createElement("div");
  let textnode = document.createTextNode("5");
  newLetter.appendChild(textnode);
document.getElementById("fives").appendChild(newLetter);
newLetter.classList.add("five");
newLetter.classList.add("onetoz");
}

function five() {
if($('.five').hasClass('numberdown')) {
  $('.five').removeClass('numberdown');
  $('.five').addClass('numberup');
} else {
  $('.five').removeClass('numberup');
  $('.five').addClass('numberdown');
}
}

function removeFive() {
if($('.five').hasClass('numberdown')) {
  $('.five').removeClass('numberdown');
} else {
  $('.five').removeClass('numberup');
}
}


// 6
document.addEventListener('keydown', addLetterSix);
function addLetterSix(event) { 
  if (event.key === '6') {
    addDivSix()
    ,removeSix(),six()
  }
}
$('.six').click(six);
$(window).keyup(addDivSix);

function addDivSix(){
let newLetter = document.createElement("div");
  let textnode = document.createTextNode("6");
  newLetter.appendChild(textnode);
document.getElementById("sixs").appendChild(newLetter);
newLetter.classList.add("six");
newLetter.classList.add("onetoz");
}

function six() {
if($('.six').hasClass('numberdowndown')) {
  $('.six').removeClass('numberdowndown');
  $('.six').addClass('numberupup');
} else {
  $('.six').removeClass('numberupup');
  $('.six').addClass('numberdowndown');
}
}

function removeSix() {
if($('.six').hasClass('numberdowndown')) {
  $('.six').removeClass('numberdowndown');
} else {
  $('.six').removeClass('numberupup');
}
}

// 7
document.addEventListener('keydown', addLetterSeven);
function addLetterSeven(event) { 
  if (event.key === '7') {
    addDivSeven()
    ,removeSeven(),seven()
  }
}
$('.seven').click(seven);
$(window).keyup(addDivSeven);

function addDivSeven(){
let newLetter = document.createElement("div");
  let textnode = document.createTextNode("7");
  newLetter.appendChild(textnode);
document.getElementById("sevens").appendChild(newLetter);
newLetter.classList.add("seven");
newLetter.classList.add("onetoz");
}

function seven() {
if($('.seven').hasClass('numberdown')) {
  $('.seven').removeClass('numberdown');
  $('.seven').addClass('numberup');
} else {
  $('.seven').removeClass('numberup');
  $('.seven').addClass('numberdown');
}
}

function removeSeven() {
if($('.seven').hasClass('numberdown')) {
  $('.seven').removeClass('numberdown');
} else {
  $('.seven').removeClass('numberup');
}
}

// 8
document.addEventListener('keydown', addLetterEight);
function addLetterEight(event) { 
  if (event.key === '8') {
    addDivEight()
    ,removeEight(),eight()
  }
}
$('.eight').click(eight);
$(window).keyup(addDivEight);

function addDivEight(){
let newLetter = document.createElement("div");
  let textnode = document.createTextNode("8");
  newLetter.appendChild(textnode);
document.getElementById("eights").appendChild(newLetter);
newLetter.classList.add("eight");
newLetter.classList.add("onetoz");
}

function eight() {
if($('.eight').hasClass('numberdowndown')) {
  $('.eight').removeClass('numberdowndown');
  $('.eight').addClass('numberupup');
} else {
  $('.eight').removeClass('numberupup');
  $('.eight').addClass('numberdowndown');
}
}

function removeEight() {
if($('.eight').hasClass('numberdowndown')) {
  $('.eight').removeClass('numberdowndown');
} else {
  $('.eight').removeClass('numberupup');
}
}

//9
document.addEventListener('keydown', addLetterNine);
function addLetterNine(event) { 
  if (event.key === '9') {
    addDivNine()
    ,removeNine(),nine()
  }
}
$('.nine').click(nine);
$(window).keyup(addDivNine);

function addDivNine(){
let newLetter = document.createElement("div");
  let textnode = document.createTextNode("9");
  newLetter.appendChild(textnode);
document.getElementById("nines").appendChild(newLetter);
newLetter.classList.add("nine");
newLetter.classList.add("onetoz");
}

function nine() {
if($('.nine').hasClass('numberdown')) {
  $('.nine').removeClass('numberdown');
  $('.nine').addClass('numberup');
} else {
  $('.nine').removeClass('numberup');
  $('.nine').addClass('numberdown');
}
}

function removeNine() {
if($('.nine').hasClass('numberdown')) {
  $('.nine').removeClass('numberdown');
} else {
  $('.nine').removeClass('numberup');
}
}


//0
document.addEventListener('keydown', addLetterZero);
function addLetterZero(event) { 
  if (event.key === '0') {
    addDivZero()
    ,removeZero(),zero()
  }
}
$('.zero').click(zero);
$(window).keyup(addDivZero);

function addDivZero(){
let newLetter = document.createElement("div");
  let textnode = document.createTextNode("0");
  newLetter.appendChild(textnode);
document.getElementById("zeros").appendChild(newLetter);
newLetter.classList.add("zero");
newLetter.classList.add("onetoz");
}

function zero() {
if($('.zero').hasClass('numberdowndown')) {
  $('.zero').removeClass('numberdowndown');
  $('.zero').addClass('numberupup');
} else {
  $('.zero').removeClass('numberupup');
  $('.zero').addClass('numberdowndown');
}
}

function removeZero() {
if($('.zero').hasClass('numberdowndown')) {
  $('.zero').removeClass('numberdowndown');
} else {
  $('.zero').removeClass('numberupup');
}
}











////////Q from P////
//Q
  document.addEventListener('keydown', addLetterQ);
  function addLetterQ(event) { 
    if (event.key === 'q') {
      addDivQ()
      ,removeQ(),q()
    }
  }
  $('.q').click(q);
  $(window).keyup(addDivQ);

function addDivQ(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("Q");
    newLetter.appendChild(textnode);
  document.getElementById("qs").appendChild(newLetter);
  newLetter.classList.add("q");
  newLetter.classList.add("upper")
}

function q() {
  if($('.q').hasClass('downn')) {
    $('.q').removeClass('downn');
    $('.q').addClass('uppu');
  } else {
    $('.q').removeClass('uppu');
    $('.q').addClass('downn');
  }
}

function removeQ() {
  if($('.q').hasClass('downn')) {
    $('.q').removeClass('downn');
  } else {
    $('.q').removeClass('uppu');
  }
}


//W
  document.addEventListener('keydown', addLetterW);
  function addLetterW(event) { 
    if (event.key === 'w') {
      addDivW()
      ,removeW(),w()
    }
  }
  $('.w').click(w);
  $(window).keyup(addDivW);

function addDivW(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("W");
    newLetter.appendChild(textnode);
  document.getElementById("ws").appendChild(newLetter);
  newLetter.classList.add("w");
  newLetter.classList.add("upper")
}

function w() {
  if($('.w').hasClass('do')) {
    $('.w').removeClass('do');
    $('.w').addClass('upp');
  } else {
    $('.w').removeClass('upp');
    $('.w').addClass('do');
  }
}

function removeW() {
  if($('.w').hasClass('do')) {
    $('.w').removeClass('do');
  } else {
    $('.w').removeClass('upp');
  }
}


//E
  document.addEventListener('keydown', addLetterE);
  function addLetterE(event) { 
    if (event.key === 'e') {
      addDivE()
      ,removeE(),ee()
    }
  }
  $('.ee').click(ee);
  $(window).keyup(addDivW);

function addDivE(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("E");
    newLetter.appendChild(textnode);
  document.getElementById("es").appendChild(newLetter);
  newLetter.classList.add("ee");
  newLetter.classList.add("upper")
}

function ee() {
  if($('.ee').hasClass('downn')) {
    $('.ee').removeClass('downn');
    $('.ee').addClass('uppu');
  } else {
    $('.ee').removeClass('uppu');
    $('.ee').addClass('downn');
  }
}

function removeE() {
  if($('.ee').hasClass('downn')) {
    $('.ee').removeClass('downn');
  } else {
    $('.ee').removeClass('uppu');
  }
}

//R
  document.addEventListener('keydown', addLetterR);
  function addLetterR(event) { 
    if (event.key === 'r') {
      addDivR()
      ,removeR(),r()
    }
  }
  $('.r').click(r);
  $(window).keyup(addDivR);

function addDivR(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("R");
    newLetter.appendChild(textnode);
  document.getElementById("rs").appendChild(newLetter);
  newLetter.classList.add("r");
  newLetter.classList.add("upper")
}

function r() {
  if($('.r').hasClass('do')) {
    $('.r').removeClass('do');
    $('.r').addClass('upp');
  } else {
    $('.r').removeClass('upp');
    $('.r').addClass('do');
  }
}

function removeR() {
  if($('.r').hasClass('do')) {
    $('.r').removeClass('do');
  } else {
    $('.r').removeClass('upp');
  }
}

 
//T
  document.addEventListener('keydown', addLetterT);
  function addLetterT(event) { 
    if (event.key === 't') {
      addDivT()
      ,removeT(),t()
    }
  }
  $('.t').click(t);
  $(window).keyup(addDivT);

function addDivT(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("T");
    newLetter.appendChild(textnode);
  document.getElementById("ts").appendChild(newLetter);
  newLetter.classList.add("t");
  newLetter.classList.add("upper")
}
function t() {
  if($('.t').hasClass('downn')) {
    $('.t').removeClass('downn');
    $('.t').addClass('uppu');
  } else {
    $('.t').removeClass('uppu');
    $('.t').addClass('downn');
  }
}
function removeT() {
  if($('.t').hasClass('downn')) {
    $('.t').removeClass('downn');
  } else {
    $('.t').removeClass('uppu');
  }
}


//Y
  document.addEventListener('keydown', addLetterY);
  function addLetterY(event) { 
    if (event.key === 'y') {
      addDivY()
      ,removeY(),y()
    }
  }
  $('.y').click(y);
  $(window).keyup(addDivY);

function addDivY(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("Y");
    newLetter.appendChild(textnode);
  document.getElementById("ys").appendChild(newLetter);
  newLetter.classList.add("y");
  newLetter.classList.add("upper")
}
function y() {
  if($('.y').hasClass('do')) {
    $('.y').removeClass('do');
    $('.y').addClass('upp');
  } else {
    $('.y').removeClass('upp');
    $('.y').addClass('do');
  }
}
function removeY() {
  if($('.y').hasClass('do')) {
    $('.y').removeClass('do');
  } else {
    $('.y').removeClass('upp');
  }
}

//U
  document.addEventListener('keydown', addLetterU);
  function addLetterU(event) { 
    if (event.key === 'u') {
      addDivU()
      ,removeU(),u()
    }
  }
  $('.u').click(u);
  $(window).keyup(addDivU);

function addDivU(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("U");
    newLetter.appendChild(textnode);
  document.getElementById("us").appendChild(newLetter);
  newLetter.classList.add("u");
  newLetter.classList.add("upper")
}
function u() {
  if($('.u').hasClass('downn')) {
    $('.u').removeClass('downn');
    $('.u').addClass('uppu');
  } else {
    $('.u').removeClass('uppu');
    $('.u').addClass('downn');
  }
}
function removeU() {
  if($('.u').hasClass('downn')) {
    $('.u').removeClass('downn');
  } else {
    $('.u').removeClass('uppu');
  }
}

//I
  document.addEventListener('keydown', addLetterI);
  function addLetterI(event) { 
    if (event.key === 'i') {
      addDivI()
      ,removeI(),i()
    }
  }
  $('.i').click(i);
  $(window).keyup(addDivI);

function addDivI(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("I");
    newLetter.appendChild(textnode);
  document.getElementById("is").appendChild(newLetter);
  newLetter.classList.add("i");
  newLetter.classList.add("upper")
}
function i() {
  if($('.i').hasClass('do')) {
    $('.i').removeClass('do');
    $('.i').addClass('upp');
  } else {
    $('.i').removeClass('upp');
    $('.i').addClass('do');
  }
}
function removeI() {
  if($('.i').hasClass('do')) {
    $('.i').removeClass('do');
  } else {
    $('.i').removeClass('upp');
  }
}

//O
  document.addEventListener('keydown', addLetterO);
  function addLetterO(event) { 
    if (event.key === 'o') {
      addDivO()
      ,removeO(),o()
    }
  }
  $('.o').click(o);
  $(window).keyup(addDivO);

function addDivO(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("O");
    newLetter.appendChild(textnode);
  document.getElementById("os").appendChild(newLetter);
  newLetter.classList.add("o");
  newLetter.classList.add("upper")
}
function o() {
  if($('.o').hasClass('downn')) {
    $('.o').removeClass('downn');
    $('.o').addClass('uppu');
  } else {
    $('.o').removeClass('uppu');
    $('.o').addClass('downn');
  }
}
function removeO() {
  if($('.o').hasClass('downn')) {
    $('.o').removeClass('downn');
  } else {
    $('.o').removeClass('uppu');
  }
}
//P
  document.addEventListener('keydown', addLetterP);
  function addLetterP(event) { 
    if (event.key === 'p') {
      addDivP()
      ,removeP(),p()
    }
  }
  $('.p').click(p);
  $(window).keyup(addDivP);

function addDivP(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("P");
    newLetter.appendChild(textnode);
  document.getElementById("ps").appendChild(newLetter);
  newLetter.classList.add("p");
  newLetter.classList.add("upper")
}
function p() {
  if($('.p').hasClass('do')) {
    $('.p').removeClass('do');
    $('.p').addClass('upp');
  } else {
    $('.p').removeClass('upp');
    $('.p').addClass('do');
  }
}
function removeP() {
  if($('.p').hasClass('do')) {
    $('.p').removeClass('do');
  } else {
    $('.p').removeClass('upp');
  }
}








////////A from L////
//A
  document.addEventListener('keydown', addLetterA);
  function addLetterA(event) { 
    if (event.key === 'a') {
      addDivA()
      ,removeA(),a()
    }
  }
  $('.a').click(a);
  $(window).keyup(addDivA);

function addDivA(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("A");
    newLetter.appendChild(textnode);
  document.getElementById("as").appendChild(newLetter);
  newLetter.classList.add("a");
  newLetter.classList.add("middle")
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
function removeA() {
  if($('.a').hasClass('down')) {
    $('.a').removeClass('down');
  } else {
    $('.a').removeClass('up');
  }
}



//S
  document.addEventListener('keydown', addLetterS);
  function addLetterS(event) { 
    if (event.key === 's') {
      addDivS()
      ,removeS(),s()
    }
  }
  $('.s').click(s);
  $(window).keyup(addDivS);

function addDivS(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("S");
    newLetter.appendChild(textnode);
  document.getElementById("ss").appendChild(newLetter);
  newLetter.classList.add("s");
  newLetter.classList.add("middle")
}
function s() {
  if($('.s').hasClass('middown')) {
    $('.s').removeClass('middown');
    $('.s').addClass('midup');
  } else {
    $('.s').removeClass('midup');
    $('.s').addClass('middown');
  }
}
function removeS() {
  if($('.s').hasClass('middown')) {
    $('.s').removeClass('middown');
  } else {
    $('.s').removeClass('midup');
  }
}

//D
  document.addEventListener('keydown', addLetterD);
  function addLetterD(event) { 
    if (event.key === 'd') {
      addDivD()
      ,removeD(),d()
    }
  }
  $('.d').click(d);
  $(window).keyup(addDivD);

function addDivD(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("D");
    newLetter.appendChild(textnode);
  document.getElementById("ds").appendChild(newLetter);
  newLetter.classList.add("d");
  newLetter.classList.add("middle")
}
function d() {
  if($('.d').hasClass('down')) {
    $('.d').removeClass('down');
    $('.d').addClass('up');
  } else {
    $('.d').removeClass('up');
    $('.d').addClass('down');
  }
}
function removeD() {
  if($('.d').hasClass('down')) {
    $('.d').removeClass('down');
  } else {
    $('.d').removeClass('up');
  }
}


//F
  document.addEventListener('keydown', addLetterF);
  function addLetterF(event) { 
    if (event.key === 'f') {
      addDivF()
      ,removeF(),f()
    }
  }
  $('.f').click(f);
  $(window).keyup(addDivF);

function addDivF(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("F");
    newLetter.appendChild(textnode);
  document.getElementById("fs").appendChild(newLetter);
  newLetter.classList.add("f");
  newLetter.classList.add("middle")
}
function f() {
  if($('.f').hasClass('middown')) {
    $('.f').removeClass('middown');
    $('.f').addClass('midup');
  } else {
    $('.f').removeClass('midup');
    $('.f').addClass('middown');
  }
}
function removeF() {
  if($('.f').hasClass('middown')) {
    $('.f').removeClass('middown');
  } else {
    $('.f').removeClass('midup');
  }
}

//G
  document.addEventListener('keydown', addLetterG);
  function addLetterG(event) { 
    if (event.key === 'g') {
      addDivG()
      ,removeG(),g()
    }
  }
  $('.g').click(g);
  $(window).keyup(addDivG);

function addDivG(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("G");
    newLetter.appendChild(textnode);
  document.getElementById("gs").appendChild(newLetter);
  newLetter.classList.add("g");
  newLetter.classList.add("middle")
}
function g() {
  if($('.g').hasClass('down')) {
    $('.g').removeClass('down');
    $('.g').addClass('up');
  } else {
    $('.g').removeClass('up');
    $('.g').addClass('down');
  }
}
function removeG() {
  if($('.g').hasClass('down')) {
    $('.g').removeClass('down');
  } else {
    $('.g').removeClass('up');
  }
}

//H
  document.addEventListener('keydown', addLetterH);
  function addLetterH(event) { 
    if (event.key === 'h') {
      addDivH()
      ,removeH(),h()
    }
  }
  $('.h').click(h);
  $(window).keyup(addDivH);

function addDivH(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("H");
    newLetter.appendChild(textnode);
  document.getElementById("hs").appendChild(newLetter);
  newLetter.classList.add("h");
  newLetter.classList.add("middle")
}
function h() {
  if($('.h').hasClass('middown')) {
    $('.h').removeClass('middown');
    $('.h').addClass('midup');
  } else {
    $('.h').removeClass('midup');
    $('.h').addClass('middown');
  }
}
function removeH() {
  if($('.h').hasClass('middown')) {
    $('.h').removeClass('middown');
  } else {
    $('.h').removeClass('midup');
  }
}

//J
  document.addEventListener('keydown', addLetterJ);
  function addLetterJ(event) { 
    if (event.key === 'j') {
      addDivJ()
      ,removeJ(),j()
    }
  }
  $('.j').click(j);
  $(window).keyup(addDivJ);

function addDivJ(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("J");
    newLetter.appendChild(textnode);
  document.getElementById("js").appendChild(newLetter);
  newLetter.classList.add("j");
  newLetter.classList.add("middle")
}
function j() {
  if($('.j').hasClass('down')) {
    $('.j').removeClass('down');
    $('.j').addClass('up');
  } else {
    $('.j').removeClass('up');
    $('.j').addClass('down');
  }
}
function removeJ() {
  if($('.j').hasClass('down')) {
    $('.j').removeClass('down');
  } else {
    $('.j').removeClass('up');
  }
}

//K
  document.addEventListener('keydown', addLetterK);
  function addLetterK(event) { 
    if (event.key === 'k') {
      addDivK()
      ,removeK(),k()
    }
  }
  $('.k').click(k);
  $(window).keyup(addDivK);

function addDivK(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("K");
    newLetter.appendChild(textnode);
  document.getElementById("ks").appendChild(newLetter);
  newLetter.classList.add("k");
  newLetter.classList.add("middle")
}
function k() {
  if($('.k').hasClass('middown')) {
    $('.k').removeClass('middown');
    $('.k').addClass('midup');
  } else {
    $('.k').removeClass('midup');
    $('.k').addClass('middown');
  }
}
function removeK() {
  if($('.k').hasClass('middown')) {
    $('.k').removeClass('middown');
  } else {
    $('.k').removeClass('midup');
  }
}

//L
  document.addEventListener('keydown', addLetterL);
  function addLetterL(event) { 
    if (event.key === 'l') {
      addDivL()
      ,removeL(),l()
    }
  }
  $('.l').click(l);
  $(window).keyup(addDivL);

function addDivL(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("L");
    newLetter.appendChild(textnode);
  document.getElementById("ls").appendChild(newLetter);
  newLetter.classList.add("l");
  newLetter.classList.add("middle")
}
function l() {
  if($('.l').hasClass('down')) {
    $('.l').removeClass('down');
    $('.l').addClass('up');
  } else {
    $('.l').removeClass('up');
    $('.l').addClass('down');
  }
}
function removeL() {
  if($('.l').hasClass('down')) {
    $('.l').removeClass('down');
  } else {
    $('.l').removeClass('up');
  }
}




  ////////Z from M////
//Z
  document.addEventListener('keydown', addLetterZ);
  function addLetterZ(event) { 
    if (event.key === 'z') {
      addDivZ()
      ,removeZ(),z()
    }
  }
  $('.z').click(z);
  $(window).keyup(addDivZ);

function addDivZ(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("Z");
    newLetter.appendChild(textnode);
  document.getElementById("zs").appendChild(newLetter);
  newLetter.classList.add("z");
  newLetter.classList.add("bottom");
}
function z() {
  if($('.z').hasClass('bodow')) {
    $('.z').removeClass('bodow');
    $('.z').addClass('bouppp');
  } else {
    $('.z').removeClass('bouppp');
    $('.z').addClass('bodow');
  }
}
function removeZ() {
  if($('.z').hasClass('bodow')) {
    $('.z').removeClass('bodow');
  } else {
    $('.z').removeClass('bouppp');
  }
}

//X
  document.addEventListener('keydown', addLetterX);
  function addLetterX(event) { 
    if (event.key === 'x') {
      addDivX()
      ,removeX(),x()
    }
  }
  $('.x').click(x);
  $(window).keyup(addDivX);

function addDivX(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("X");
    newLetter.appendChild(textnode);
  document.getElementById("xs").appendChild(newLetter);
  newLetter.classList.add("x");
  newLetter.classList.add("bottom");
}
function x() {
  if($('.x').hasClass('dow')) {
    $('.x').removeClass('dow');
    $('.x').addClass('uppp');
  } else {
    $('.x').removeClass('uppp');
    $('.x').addClass('dow');
  }
}
function removeX() {
  if($('.x').hasClass('dow')) {
    $('.x').removeClass('dow');
  } else {
    $('.x').removeClass('uppp');
  }
}

//C
  document.addEventListener('keydown', addLetterC);
  function addLetterC(event) { 
    if (event.key === 'c') {
      addDivC()
      ,removeC(),c()
    }
  }
  $('.c').click(c);
  $(window).keyup(addDivC);

function addDivC(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("C");
    newLetter.appendChild(textnode);
  document.getElementById("cs").appendChild(newLetter);
  newLetter.classList.add("c");
  newLetter.classList.add("bottom");
}
function c() {
  if($('.c').hasClass('bodow')) {
    $('.c').removeClass('bodow');
    $('.c').addClass('bouppp');
  } else {
    $('.c').removeClass('bouppp');
    $('.c').addClass('bodow');
  }
}
function removeC() {
  if($('.c').hasClass('bodow')) {
    $('.c').removeClass('bodow');
  } else {
    $('.c').removeClass('bouppp');
  }
}

//V
  document.addEventListener('keydown', addLetterV);
  function addLetterV(event) { 
    if (event.key === 'v') {
      addDivV()
      ,removeV(),v()
    }
  }
  $('.v').click(v);
  $(window).keyup(addDivV);

function addDivV(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("V");
    newLetter.appendChild(textnode);
  document.getElementById("vs").appendChild(newLetter);
  newLetter.classList.add("v");
  newLetter.classList.add("bottom");
}
function v() {
  if($('.v').hasClass('dow')) {
    $('.v').removeClass('dow');
    $('.v').addClass('uppp');
  } else {
    $('.v').removeClass('uppp');
    $('.v').addClass('dow');
  }
}
function removeV() {
  if($('.v').hasClass('dow')) {
    $('.v').removeClass('dow');
  } else {
    $('.v').removeClass('uppp');
  }
}

//B
  document.addEventListener('keydown', addLetterB);
  function addLetterB(event) { 
    if (event.key === 'b') {
      addDivB()
      ,removeB(),b()
    }
  }
  $('.b').click(b);
  $(window).keyup(addDivB);

function addDivB(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("B");
    newLetter.appendChild(textnode);
  document.getElementById("bs").appendChild(newLetter);
  newLetter.classList.add("b");
  newLetter.classList.add("bottom");
}
function b() {
  if($('.b').hasClass('bodow')) {
    $('.b').removeClass('bodow');
    $('.b').addClass('bouppp');
  } else {
    $('.b').removeClass('bouppp');
    $('.b').addClass('bodow');
  }
}
function removeB() {
  if($('.b').hasClass('bodow')) {
    $('.b').removeClass('bodow');
  } else {
    $('.b').removeClass('bouppp');
  }
}

//N
  document.addEventListener('keydown', addLetterN);
  function addLetterN(event) { 
    if (event.key === 'n') {
      addDivN()
      ,removeN(),n()
    }
  }
  $('.n').click(n);
  $(window).keyup(addDivN);

function addDivN(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("N");
    newLetter.appendChild(textnode);
  document.getElementById("ns").appendChild(newLetter);
  newLetter.classList.add("n");
  newLetter.classList.add("bottom");
}
function n() {
  if($('.n').hasClass('dow')) {
    $('.n').removeClass('dow');
    $('.n').addClass('uppp');
  } else {
    $('.n').removeClass('uppp');
    $('.n').addClass('dow');
  }
}
function removeN() {
  if($('.n').hasClass('dow')) {
    $('.n').removeClass('dow');
  } else {
    $('.n').removeClass('uppp');
  }
}

//M
  document.addEventListener('keydown', addLetterM);
  function addLetterM(event) { 
    if (event.key === 'm') {
      addDivM()
      ,removeM(),m()
    }
  }
  $('.m').click(m);
  $(window).keyup(addDivM);

function addDivM(){
  let newLetter = document.createElement("div");
    let textnode = document.createTextNode("M");
    newLetter.appendChild(textnode);
  document.getElementById("ms").appendChild(newLetter);
  newLetter.classList.add("m");
  newLetter.classList.add("bottom");
}
function m() {
  if($('.m').hasClass('bodow')) {
    $('.m').removeClass('bodow');
    $('.m').addClass('bouppp');
  } else {
    $('.m').removeClass('bouppp');
    $('.m').addClass('bodow');
  }
}
function removeM() {
  if($('.m').hasClass('bodow')) {
    $('.m').removeClass('bodow');
  } else {
    $('.m').removeClass('bouppp');
  }
}
