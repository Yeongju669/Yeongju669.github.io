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
  newLetter.classList.add("upper");
  document.body.appendChild(newLetter);
}

function q() {
  if($('.q').hasClass('do')) {
    $('.q').removeClass('do');
    $('.q').addClass('upp');
  } else {
    $('.q').removeClass('upp');
    $('.q').addClass('do');
  }
}

function removeQ() {
  if($('.q').hasClass('do')) {
    $('.q').removeClass('do');
  } else {
    $('.q').removeClass('upp');
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
  newLetter.classList.add("upper");
  document.body.appendChild(newLetter);
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
  newLetter.classList.add("upper");
  document.body.appendChild(newLetter);
}

function ee() {
  if($('.ee').hasClass('do')) {
    $('.ee').removeClass('do');
    $('.ee').addClass('upp');
  } else {
    $('.ee').removeClass('upp');
    $('.ee').addClass('do');
  }
}

function removeE() {
  if($('.ee').hasClass('do')) {
    $('.ee').removeClass('do');
  } else {
    $('.ee').removeClass('upp');
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
  newLetter.classList.add("upper");
  document.body.appendChild(newLetter);
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
  newLetter.classList.add("upper");
  document.body.appendChild(newLetter);
}
function t() {
  if($('.t').hasClass('do')) {
    $('.t').removeClass('do');
    $('.t').addClass('upp');
  } else {
    $('.t').removeClass('upp');
    $('.t').addClass('do');
  }
}
function removeT() {
  if($('.t').hasClass('do')) {
    $('.t').removeClass('do');
  } else {
    $('.t').removeClass('upp');
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
  newLetter.classList.add("upper");
  document.body.appendChild(newLetter);
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
  newLetter.classList.add("upper");
  document.body.appendChild(newLetter);
}
function u() {
  if($('.u').hasClass('do')) {
    $('.u').removeClass('do');
    $('.u').addClass('upp');
  } else {
    $('.u').removeClass('upp');
    $('.u').addClass('do');
  }
}
function removeU() {
  if($('.u').hasClass('do')) {
    $('.u').removeClass('do');
  } else {
    $('.u').removeClass('upp');
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
  newLetter.classList.add("upper");
  document.body.appendChild(newLetter);
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
  newLetter.classList.add("upper");
  document.body.appendChild(newLetter);
}
function o() {
  if($('.o').hasClass('do')) {
    $('.o').removeClass('do');
    $('.o').addClass('upp');
  } else {
    $('.o').removeClass('upp');
    $('.o').addClass('do');
  }
}
function removeO() {
  if($('.o').hasClass('do')) {
    $('.o').removeClass('do');
  } else {
    $('.o').removeClass('upp');
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
  newLetter.classList.add("upper");
  document.body.appendChild(newLetter);
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
  newLetter.classList.add("middle");
  document.body.appendChild(newLetter);
}
function s() {
  if($('.s').hasClass('down')) {
    $('.s').removeClass('down');
    $('.s').addClass('up');
  } else {
    $('.s').removeClass('up');
    $('.s').addClass('down');
  }
}
function removeS() {
  if($('.s').hasClass('down')) {
    $('.s').removeClass('down');
  } else {
    $('.s').removeClass('up');
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
  newLetter.classList.add("middle");
  document.body.appendChild(newLetter);
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
  newLetter.classList.add("middle");
  document.body.appendChild(newLetter);
}
function f() {
  if($('.f').hasClass('down')) {
    $('.f').removeClass('down');
    $('.f').addClass('up');
  } else {
    $('.f').removeClass('up');
    $('.f').addClass('down');
  }
}
function removeF() {
  if($('.f').hasClass('down')) {
    $('.f').removeClass('down');
  } else {
    $('.f').removeClass('up');
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
  newLetter.classList.add("middle");
  document.body.appendChild(newLetter);
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
  newLetter.classList.add("middle");
  document.body.appendChild(newLetter);
}
function h() {
  if($('.h').hasClass('down')) {
    $('.h').removeClass('down');
    $('.h').addClass('up');
  } else {
    $('.h').removeClass('up');
    $('.h').addClass('down');
  }
}
function removeH() {
  if($('.h').hasClass('down')) {
    $('.h').removeClass('down');
  } else {
    $('.h').removeClass('up');
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
  newLetter.classList.add("middle");
  document.body.appendChild(newLetter);
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
  newLetter.classList.add("middle");
  document.body.appendChild(newLetter);
}
function k() {
  if($('.k').hasClass('down')) {
    $('.k').removeClass('down');
    $('.k').addClass('up');
  } else {
    $('.k').removeClass('up');
    $('.k').addClass('down');
  }
}
function removeK() {
  if($('.k').hasClass('down')) {
    $('.k').removeClass('down');
  } else {
    $('.k').removeClass('up');
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
  newLetter.classList.add("middle");
  document.body.appendChild(newLetter);
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
  document.body.appendChild(newLetter);
}
function z() {
  if($('.z').hasClass('dow')) {
    $('.z').removeClass('dow');
    $('.z').addClass('uppp');
  } else {
    $('.z').removeClass('uppp');
    $('.z').addClass('dow');
  }
}
function removeZ() {
  if($('.z').hasClass('dow')) {
    $('.z').removeClass('dow');
  } else {
    $('.z').removeClass('uppp');
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
  document.body.appendChild(newLetter);
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
  document.body.appendChild(newLetter);
}
function c() {
  if($('.c').hasClass('dow')) {
    $('.c').removeClass('dow');
    $('.c').addClass('uppp');
  } else {
    $('.c').removeClass('uppp');
    $('.c').addClass('dow');
  }
}
function removeC() {
  if($('.c').hasClass('dow')) {
    $('.c').removeClass('dow');
  } else {
    $('.c').removeClass('uppp');
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
  document.body.appendChild(newLetter);
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
  document.body.appendChild(newLetter);
}
function b() {
  if($('.b').hasClass('dow')) {
    $('.b').removeClass('dow');
    $('.b').addClass('uppp');
  } else {
    $('.b').removeClass('uppp');
    $('.b').addClass('dow');
  }
}
function removeB() {
  if($('.b').hasClass('dow')) {
    $('.b').removeClass('dow');
  } else {
    $('.b').removeClass('uppp');
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
  document.body.appendChild(newLetter);
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
  document.body.appendChild(newLetter);
}
function m() {
  if($('.m').hasClass('dow')) {
    $('.m').removeClass('dow');
    $('.m').addClass('uppp');
  } else {
    $('.m').removeClass('uppp');
    $('.m').addClass('dow');
  }
}
function removeM() {
  if($('.m').hasClass('dow')) {
    $('.m').removeClass('dow');
  } else {
    $('.m').removeClass('uppp');
  }
}
