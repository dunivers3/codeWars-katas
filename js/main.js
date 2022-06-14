const codeWarsEl = document.querySelector(".codewars-el")
const sheepCounterlistItems = document.createElement("li")
codeWarsEl.appendChild(sheepCounterlistItems)
sheepCounterlistItems.classList.add("to-string")


const arrayOfNums = [10,20,30,40,50]
function numberToString(num){
    return num.toString()
}

document.querySelector(".to-string").textContent =`Let's start with converting these numbers: ${arrayOfNums} to a string. String version = ${numberToString(arrayOfNums)}`
