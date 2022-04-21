let keyQ = document.getElementById('Q')
function soundQ() {
  keyQ.play()
}

let keyW = document.getElementById('W')
function soundW() {
  keyW.play()
}

let keyE = document.getElementById('E')
function soundE() {
  keyE.play()
}

let keyA = document.getElementById('A')
function soundA() {
  keyA.play()
}

let keyS = document.getElementById('S')
function soundS() {
  keyS.play()
}

let keyD = document.getElementById('D')
function soundD() {
  keyD.play()
}

let keyZ = document.getElementById('Z')
function soundZ() {
  keyZ.play()
}

let keyX = document.getElementById('X')
function soundX() {
  keyX.play()
}

let keyC = document.getElementById('C')
function soundC() {
  keyC.play()
}

window.addEventListener('keydown', function(event) {
  const key = event.key;
  
  console.log(key)
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