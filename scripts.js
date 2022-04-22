let disp = document.getElementById('display')

let keyQ = document.getElementById('Q')
let camera = document.getElementById('camera')
function soundQ() {
  keyQ.play()
  disp.innerHTML = 'Camera'
  camera.classList.add("btn-pressed")
  setTimeout(() => camera.classList.remove("btn-pressed"), 100)
}

let keyW = document.getElementById('W')
let machine_ty = document.getElementById('machine-ty')
function soundW() {
  keyW.play()
  disp.innerHTML = 'Thank you';
  machine_ty.classList.add("btn-pressed")
  setTimeout(() => machine_ty.classList.remove("btn-pressed"), 100)
}

let keyE = document.getElementById('E')
let sonic_stp = document.getElementById('sonic-stp')
function soundE() {
  keyE.play()
  disp.innerHTML = 'Sonic stop';
  sonic_stp.classList.add("btn-pressed")
  setTimeout(() => sonic_stp.classList.remove("btn-pressed"), 100)
}

let keyA = document.getElementById('A')
let bubble = document.getElementById('bubble')
function soundA() {
  keyA.play()
  disp.innerHTML = 'Bubble';
  bubble.classList.add("btn-pressed")
  setTimeout(() => bubble.classList.remove("btn-pressed"), 100)
}

let keyS = document.getElementById('S')
let nin_switch = document.getElementById('nin-switch')
function soundS() {
  keyS.play()
  disp.innerHTML = 'Nintendo Switch';
  nin_switch.classList.add("btn-pressed")
  setTimeout(() => nin_switch.classList.remove("btn-pressed"), 100)
}

let keyD = document.getElementById('D')
let horse = document.getElementById('horse')
function soundD() {
  keyD.play()
  disp.innerHTML = 'Horse';
  horse.classList.add("btn-pressed")
  setTimeout(() => horse.classList.remove("btn-pressed"), 100)
}

let keyZ = document.getElementById('Z')
let punch = document.getElementById('punch')
function soundZ() {
  keyZ.play()
  disp.innerHTML = 'Punch';
  punch.classList.add("btn-pressed")
  setTimeout(() => punch.classList.remove("btn-pressed"), 100)
}

let keyX = document.getElementById('X')
let kick = document.getElementById('kick')
function soundX() {
  keyX.play()
  disp.innerHTML = 'Kick';
  kick.classList.add("btn-pressed")
  setTimeout(() => kick.classList.remove("btn-pressed"), 100)
}

let keyC = document.getElementById('C')
let pop = document.getElementById('pop')
function soundC() {
  keyC.play()
  disp.innerHTML = 'Pop';
  pop.classList.add("btn-pressed")
  setTimeout(() => pop.classList.remove("btn-pressed"), 100)
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