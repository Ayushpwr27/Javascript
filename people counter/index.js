let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")



let count = 0

function Increment(){
    count += 1
    countEl.textContent = count
}

function SaveCount()
{   
    let prevEntries = count + " - "
    saveEl.textContent += prevEntries
    countEl.textContent = 0
    count = 0
}




