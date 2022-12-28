const secondHandle = document.querySelector(".handle__second")
const minuteHandle = document.querySelector(".handle__minute")
const hourHandle = document.querySelector(".handle__hour")

setInterval(() => {
  setHandles()
}, 1000)

function setHandles() {
  console.log("called")
  const d = new Date()

  const hours = d.getHours()
  const minutes = d.getMinutes()
  const seconds = d.getSeconds()

  hourHandle.style.transform = `translateX(-50%) rotate(${hours * 30}deg)`
  minuteHandle.style.transform = `translateX(-50%) rotate(${minutes * 6}deg)`
  secondHandle.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`
}

