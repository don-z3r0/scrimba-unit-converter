const meter = 3.281
const liter = 0.264
const kilogram = 2.204

const btnEl = document.getElementById("btn-el")

const inputEl = document.getElementById("input-el")
const lengthEl= document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

let valueNum = ``

btnEl.addEventListener("click", function() {
    valueNum = inputEl.value
    let valueFeet = conversionOne(meter)
    let valueMeter = conversionTwo(meter)
    if (valueNum > 0) {
        lengthEl.innerHTML = `
            <p>
            ${valueNum} meters = ${valueFeet} feet | ${valueNum} feet = ${valueMeter} meters
            </p>
        `
    } else {
        lengthEl.innerHTML = ``
    }
    
    let valueGallons = conversionOne(liter)
    let valueLiters = conversionTwo(liter)
    if (valueNum > 0) {
        volumeEl.innerHTML = `
            <p>
            ${valueNum} liters = ${valueGallons} gallons | ${valueNum} gallons = ${valueLiters} liters
            </p>
        `
    } else {
        volumeEl.innerHTML = ``
    }
    
    let valuePounds = conversionOne(kilogram)
    let valueKilos = conversionTwo(kilogram)
    if (valueNum > 0) {
        massEl.innerHTML = `
            <p>
            ${valueNum} kilos = ${valuePounds} pounds | ${valueNum} pounds = ${valueKilos} kilos
            </p>
        `
    } else {
        massEl.innerHTML = ``
    }
})

function conversionOne(unit) {
    let value = valueNum * unit
    return value.toFixed(3)
}

function conversionTwo(unit) {
    let value = valueNum / unit
    return value.toFixed(3)
}

function reset() {
    inputEl.value = null
}

reset()

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
