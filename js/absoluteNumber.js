/*
Kata description
Your function takes two arguments:
current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/

codeWarsEl.appendChild(document.createElement("li")).classList.add("absoluteNo-el")

let dadYears = 33
let sonYears = 5
function twiceAsOld(dadYearsOld, sonYearsOld){
    return Math.abs(dadYearsOld -(sonYearsOld * 2))
}

let writeTo = document.querySelector(".absoluteNo-el")
writeTo.innerHTML = `If the dad is ${dadYears} years old, and the son is ${sonYears}: How many years ago the dad was twice as old as his son (or in how many years he will be twice as old). <button class="answer-btn">Answer</button>`

document.querySelector(".answer-btn").addEventListener("click",() => {
    writeTo.innerText = `${twiceAsOld(dadYears, sonYears)} years old`
})

