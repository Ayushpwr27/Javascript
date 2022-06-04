let insertValue = prompt("enter value ")
let value = insertValue
document.getElementById("value-el").textContent = value
let length = document.getElementById("conv-result1")
let volume = document.getElementById("conv-result2")
let mass = document.getElementById("conv-result3")
function convert(){
    let inFeet = value * 3.28084
    let inMeter = value * 0.3048
    length.textContent = value + " meters = " + inFeet.toFixed(3) + " feet | " + value + " feet = " + inMeter.toFixed(3) +" meters" 

    let ingallon = value * 0.264172
    let inliters = value * 3.78541
    volume.textContent = value + " liters = " + ingallon.toFixed(3) + " gallon | " + value + " gallon = " + inliters.toFixed(3) +" liters" 

    let inpounds = value * 2.20462
    let inkilos = value * 0.453592
    mass.textContent = value + " kilos = " + inpounds.toFixed(3) + " pounds | " + value + " pounds = " + inkilos.toFixed(3) +" kilos" 
}

convert()
