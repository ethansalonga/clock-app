const hourHand = document.querySelector(".handle__hour")
const minuteHand = document.querySelector(".handle__minute")
const secondHand = document.querySelector(".handle__second")
const millisHand = document.querySelector(".handle__millisecond")

requestAnimationFrame(setHands)

function setHands() {
  const d = new Date()

  const hours = d.getHours()
  const minutes = d.getMinutes()
  const seconds = d.getSeconds()
  const millis = d.getMilliseconds()

  const extraHoursAngle = minutes * 0.5
  const hoursAngle = hours * 30 + extraHoursAngle

  const extraMinutesAngle = seconds * 0.1
  const minutesAngle = minutes * 6 + extraMinutesAngle

  const extraSecondsAngle = millis * 0.006
  const secondsAngle = seconds * 6 + extraSecondsAngle

  hourHand.style.transform = `translateX(-50%) rotate(${hoursAngle}deg)`
  minuteHand.style.transform = `translateX(-50%) rotate(${minutesAngle}deg)`
  secondHand.style.transform = `translateX(-50%) rotate(${secondsAngle}deg)`
  millisHand.style.transform = `translateX(-50%) rotate(${360 * millis / 1000}deg)`
  requestAnimationFrame(setHands)
}