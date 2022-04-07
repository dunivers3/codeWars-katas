const toStringList = document.querySelector(".codewars-el")
const toStringlistItems = document.createElement("li")
toStringList.appendChild(toStringlistItems)
toStringlistItems.classList.add("to-string")
const toStringWriteHere = document.querySelector(".to-string")


const arrayOfNums = [10,20,30,40,50]
const arrayOfString = ["Optimus","Prime", "Bumble Bee", "Sentinel", "Prime"]

function numberToString(num){
    return num.toString()
}
toStringWriteHere.textContent = numberToString(arrayOfNums)
