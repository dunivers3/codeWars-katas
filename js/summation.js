codeWarsEl.appendChild(document.createElement("li")).classList.add("summation-el")


let sum = 0
let summation = function (num) {
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    return sum
}

document.querySelector(".summation-el").textContent = `The sum of 2 is ${summation(2)}`
//These figure are hard coded
