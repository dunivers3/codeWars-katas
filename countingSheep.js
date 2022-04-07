codeWarsEl.appendChild(document.createElement("li")).classList.add("sheep-counter")


const arrayOfSheep = [3,4,5,6,7,9,44]
function countSheeps(arr){
    return arr.filter(Boolean).length 
}
document.querySelector(".sheep-counter").textContent =`Counter counts sheep from this array: ${arrayOfSheep}. The count = ${countSheeps(arrayOfSheep)
} sheep. 
` 
