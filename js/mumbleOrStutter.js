function accum(s) {
    /**
     * P: takes in a string
     * R: returns a string, hyphenated and each character mulitplied recursively
     * E: accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
     * P: 
     * 1. split the incoming string with a hyphen
     * 2. capitalize eache element
     * 3. add small letters for each element equivalent to the index
     * 4. join the array together again
     */
    //1 & 2
    let newArr = s.toUpperCase().split("")

    //3 & 4
    return newArr.map((element, idx) => {
        return element.concat(element.toLowerCase().repeat(idx))
    }).join("-")
}
console.log(accum("RqaEzty"))