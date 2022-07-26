String.prototype.toJadenCase = function () {
    /**
     * P: always takes in a string
     * R: returns the same string but the first character of every word capitalized: Jaden Smith case
     * E: Not Jaden-Cased: "How can mirrors be real if our eyes aren't real" ==> Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
     * P:
     * 1. split the string to make an array
     * 2. iterate through the array, adding a capital letter to each 0 index, and removin character at index 1
     * 3. join the iteration together
     */
    //1
    return this.split(" ").map(element => {
        //2 & 3
        return element.charAt(0).toUpperCase() + element.slice(1)
    }).join(" ")

}

let optimus = "How can mirrors be real if our eyes aren't real".toJadenCase()
console.log(optimus)