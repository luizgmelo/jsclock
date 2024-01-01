const body = document.querySelector("body")
const time = document.querySelector("#clock")

function twoDigits(digit) {
  if (digit < 10) {
    return '0' + digit
  }
  return digit
}

function clock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  time.textContent = `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`
}

body.onload = () => setInterval(clock, 1000)
