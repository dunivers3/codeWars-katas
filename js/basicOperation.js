//Create a function that does the arithmetic operation from the parameters given

function basicOp(operation, value1, value2){
    if(operation == "+"){
        console.log(value1 + value2)
    }
    else if(operation == "-"){
        console.log(value1 - value2)
    }
    else if(operation == "*"){
        console.log(value1 * value2)
    }
    else if(operation == "/"){
        console.log(value1 / value2)
    }
    else{
        console.log("Error! Please enter the correct values")
    }
}


//basicOp("-", 5, 3)
