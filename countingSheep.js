const countSheepEl = document.querySelector(".codewars-el")
let listItems = document.createElement("li")


const arrayOfSheep = [3,4,5,6,7,9,44]
function countSheeps(arr){
    return arr.filter(Boolean).length 
}

countSheepEl.appendChild(listItems) 
listItems.append(`Counting Sheep = ${countSheeps(arrayOfSheep)}`)
listItems.className = "counting-sheep"
