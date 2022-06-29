function squareDigits(num){
    /**
     * P: takes in numbers every time. numbers only can be squared
     * R: returns numbers only. squared numbers
     * E: 91191 => 8111811
     * P: 
     * collect the value and separate it in individual numbers
     * square each number and and join them together
     * return the joined number
     */
    let numsToBeSquared = num.split("").map(Number)
    let optimus = numsToBeSquared.map( element => Math.pow(element, 2) )
    console.log(parseInt(optimus.join("")))
}

//squareDigits("3435") //916925






function squareDigits2(num){
    var array = num.toString().split('').map( function(int) {
        console.log(array)
        var i = parseInt(int);
        console.log(i * i);
        return i * i;
    });
        
    console.log(parseInt(array.join("")));
}
//squareDigits2(3435)