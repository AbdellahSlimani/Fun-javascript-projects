const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
let idx = 1;
let speed = 300 / speedEl.value

text = "Starting..."


function ShowMe() {
  text = document.getElementById('chosenText').value
  writeText()
}

writeText()

function writeText(){
  textEl.innerText = text.slice(0, idx)

  idx++

  if(idx > text.length){
    idx = 1
  }

  setTimeout(writeText, speed)
}

speedEl.addEventListener("input", (e) => speed = 300 / e.target.value)