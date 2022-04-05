const countSheepEl = document.querySelector(".codewars-el")



function countSheeps(arr){
    countSheepEl.textContent =  arr.filter(Boolean).length 
}

let someNums = [5,10,15,20,25,30,35,40,45,50]
countSheeps(someNums)

