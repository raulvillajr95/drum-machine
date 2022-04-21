let disp = document.getElementById('display')

let keyQ = document.getElementById('Q')
function soundQ() {
  keyQ.play()
  disp.innerHTML = 'Camera'
}

let keyW = document.getElementById('W')
function soundW() {
  keyW.play()
  disp.innerHTML = 'Thank you';
}

let keyE = document.getElementById('E')
function soundE() {
  keyE.play()
  disp.innerHTML = 'Sonic stop';
}

let keyA = document.getElementById('A')
function soundA() {
  keyA.play()
  disp.innerHTML = 'Bubble';
}

let keyS = document.getElementById('S')
function soundS() {
  keyS.play()
  disp.innerHTML = 'Nintendo Switch';
}

let keyD = document.getElementById('D')
function soundD() {
  keyD.play()
  disp.innerHTML = 'Horse';
}

let keyZ = document.getElementById('Z')
function soundZ() {
  keyZ.play()
  disp.innerHTML = 'Punch';
}

let keyX = document.getElementById('X')
function soundX() {
  keyX.play()
  disp.innerHTML = 'Kick';
}

let keyC = document.getElementById('C')
function soundC() {
  keyC.play()
  disp.innerHTML = 'Pop';
}

window.addEventListener('keydown', function(event) {
  const key = event.key;
  switch(key) {
    case 'q':
    case 'Q':
      soundQ()
      break
    case 'w':
    case 'W':
      soundW()
      break
    case 'e':
    case 'E':
      soundE()
      break
    case 'a':
    case 'A':
      soundA()
      break
    case 's':
    case 'S':
      soundS()
      break
    case 'd':
    case 'D':
      soundD()
      break
    case 'z':
    case 'Z':
      soundZ()
      break
    case 'x':
    case 'X':
      soundX()
      break
    case 'c':
    case 'C':
      soundC()
      break
  }
})