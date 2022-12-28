const secondHandle = document.querySelector(".handle__second")
const minuteHandle = document.querySelector(".handle__minute")
const hourHandle = document.querySelector(".handle__hour")

const d = new Date()
const hours = d.getHours()
const minutes = d.getMinutes()
const seconds = d.getSeconds()

console.log(seconds * 6)

hourHandle.style.transform = `translateX(-50%) rotate(${hours * 30}deg)`
minuteHandle.style.transform = `translateX(-50%) rotate(${minutes * 6}deg)`
secondHandle.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`