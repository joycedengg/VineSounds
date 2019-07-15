var oof = $('#oof');
var yeet = $('#yeet');
var bruh = $('#bruh');
var illuminati = $('#illuminati');
var blowhorn = $('#blowhorn');
var legitness = $('#legitness');
var oHellNo = $('#oHellNo');
var stoopid = $('#stoopid');
var twentyOne = $('#twentyOne')
var jeff = $('#jeff')
var babyGoat = $('#babyGoat')
var dayum = $('#dayum')
var pbb = $('#pbb')


var oofSound = new Audio('./assets/oof.mp3');
var yeetSound = new Audio('./assets/yeet.mp3');
var bruhSound = new Audio('./assets/bruh.mp3');
var illuminatiSound = new Audio('./assets/illuminati.mp3');
var blowhornSound = new Audio('./assets/blowhorn.mp3');
var legitnessSound = new Audio('./assets/legitness.mp3');
var oHellNoSound = new Audio('./assets/oh hell no.mp3');
var stoopidSound = new Audio('./assets/youstupid.mp3');
var twentyOneSound = new Audio('./assets/21.mp3');
var jeffSound = new Audio('./assets/jeff.mp3');
var babyGoatSound = new Audio('./assets/babygoat.mp3');
var dayumSound = new Audio('./assets/dayum.mp3');
var pbbSound = new Audio('./assets/pbb.mp3');





oof.on("click", playOof)
yeet.on("click", playYeet)
bruh.on("click", playBruh)
illuminati.on("click", playIlluminati)
blowhorn.on("click", playBlowhorn)
legitness.on("click", playLegitness)
oHellNo.on("click", playOHellNo)
stoopid.on("click", playStoopid)
twentyOne.on("click", playTwentyOne)
jeff.on("click", playJeff)
babyGoat.on("click", playBabyGoat)
dayum.on("click", playDayum)
pbb.on("click", playPBB)


function playOof(){
  oofSound.play();
}

function playYeet(){
  yeetSound.play();
}

function playBruh(){
  bruhSound.play();
}

function playIlluminati(){
  illuminatiSound.play();
}

function playBlowhorn(){
  blowhornSound.play();
}

function playLegitness(){
  legitnessSound.play();
}

function playOHellNo(){
  oHellNoSound.play();
}

function playStoopid(){
  stoopidSound.play();
}

function playTwentyOne(){
  twentyOneSound.play();
}

function playJeff(){
  jeffSound.play();
}

function playBabyGoat(){
  babyGoatSound.play();
}

function playDayum(){
  dayumSound.play();
}

function playPBB(){
  pbbSound.play();
}
