
codeWarsEl.appendChild(document.createElement("li")).classList.add("countPositivesSumNegatives-el")
let inputEl = document.querySelector(".countPositivesSumNegatives-el")
inputEl.innerHTML = `<input class="input-el"> <button class="countButton">Check</button>`


let valuesToCheck = []
valuesToCheck =  Number(document.querySelector(".input-el").value)

function countPositiveSumNegative(input){
    let newArr = []
    let positiveNumber = 0
    let negativeNumber = 0

    //Validate Input
    if(input === null || input.length === 0)
        return newArr
    
    //Loop through array of Numbers
    for(let i = 0; i < input.length; i++){
        if(input[i] == 0)
            continue

        //Count positives
        else if (input[i] > 0 )
            positiveNumber++

        //Sum negatives
        else if (input[i] < 0 )
            negativeNumber += input[i]
    }

    //Prepare Output
    newArr.push(positiveNumber)
    newArr.push(negativeNumber)

    return newArr
}

document.querySelector(".countButton").addEventListener("click", () => {
    console.log(valuesToCheck)
    inputEl.innerText = `The values are ${countPositiveSumNegative(valuesToCheck)}`
})
//The code doesn't work on the DOM. To be refined ()
