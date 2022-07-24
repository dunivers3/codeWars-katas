const number = function (arr) {
    /**
     * P: takes in a list of strings, an array of string, could be empty
     * R: returns a each string prepended to the correct number, i.e, a numbered string
     * E: Input --> ["a", "b", "c"] Output --> ["1: a", "2: b", "3: c"]
     * P:
     * 1. iterate the array with map method into a new variable
     * 2. pick the index and the item from the map method
     * 3. return the index concatinated with the item into the new array
     */
    let newArr = arr.map((element, idx) => {
        return (`${idx + 1}: ${element}`)
    })
    console.log(newArr)
}
number(["a", "b", "c"])
