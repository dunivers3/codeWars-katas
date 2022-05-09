codeWarsEl.appendChild(document.createElement("li")).classList.add("invert-el")

function invert(arr){
    return arr.map( (num, i) => 0 - num, 0 )
}

document.querySelector(".invert-el").innerHTML = `
<button>Click me to invert this: [5,50,23,3,1,5,5] array</button>
`
document.querySelector("button").addEventListener("click", () => {
    let optimus = [5,50,23,3,1,5,5]
    document.querySelector("button").classList.add("btn-el")
    let buttonEl = document.querySelector(".btn-el")
    buttonEl.textContent = `And the the inverted array is: ${invert(optimus)}. That's it!`
} ) 
