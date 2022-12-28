const hourHand = document.querySelector(".handle__hour")
const minuteHand = document.querySelector(".handle__minute")
const secondHand = document.querySelector(".handle__second")
const millisHand = document.querySelector(".handle__millisecond")

function setHands() {
  const d = new Date()

  const hours = d.getHours()
  const minutes = d.getMinutes()
  const seconds = d.getSeconds()
  const millis = d.getMilliseconds()

  hourHand.style.transform = `translateX(-50%) rotate(${hours * 30}deg)`
  minuteHand.style.transform = `translateX(-50%) rotate(${minutes * 6}deg)`
  secondHand.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`
  millisHand.style.transform = `translateX(-50%) rotate(${millis * 0.006}deg)`
}

setHands()