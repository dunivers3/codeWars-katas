//the couple is in love if the numbers of petals is even on one flower and odd in the other flower

codeWarsEl.appendChild(document.createElement("li")).classList.add("lovefunc-el")
let loveFunctionEl = document.querySelector(".lovefunc-el")        

function lovefunc(flower1, flower2){
    if(flower1 % 2 === 0 && flower2 % 2 === 1){
        loveFunctionEl.textContent = "We are in love"
    }
    else if(flower2 % 2 === 0 && flower1 % 2 === 1){
        loveFunctionEl.textContent = "We are in love"
    }
    else{
        loveFunctionEl.textContent = "Who are you again?"
    }
}

//lovefunc(4,8)

//refine it to work in the dom of the index.html file
//ask for petals from each lover
loveFunctionEl.innerHTML = `<input id="flower1" >Flower 1 petals</input>`
loveFunctionEl.innerHTML += `<input id="flower2" >Flower 2 petals</input>`

//put the feedback in the lovefunc function
let flower1Petals = Number(document.getElementById("flower1").value)
let flower2Petals = Number(document.getElementById("flower2").value)

loveFunctionEl.innerHTML += `<button id="lovefunction-el">LOVE Check</button>`
document.getElementById("lovefunction-el").addEventListener("click", () => {
    console.log(flower1Petals)
    console.log(flower2Petals)
    lovefunc(flower1Petals, flower2Petals)
})
