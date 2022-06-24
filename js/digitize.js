codeWarsEl.appendChild(document.createElement("li")).classList.add("digitize-el")
let digitizeEl = document.querySelector(".digitize-el")
digitizeEl.innerHTML = `Click me to digitize 12345`
function digitize(num){
    //P; number
    //R; a reversed arry of the parameter
    //E; 345 => [5,4,3]
    //P;
    /**
     * use split method to separate the parameter and store it in a variable
     * use reverse method to reverse the value in the varable
     * return/console.log the variable
     * call the function
     */
    let reversedNum = num.toString().split('').map(Number)
    reversedNum.reverse()
    return reversedNum
}

digitizeEl.addEventListener("click", () => {
    digitizeEl.textContent = `12345 is ${digitize(12345)}`
} )