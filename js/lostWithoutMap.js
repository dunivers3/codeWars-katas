function maps(x) {
    /**
     * P: takes in an array of integers
     * R: return in an array of integers doubled
     * E: [1, 2, 3] => [2, 4, 6]
     * P:
     * - iterate throuhg the array with map method
     * - double the element piece of the map method
     * - return a new array with new values
     */
    let doubled = x.map(numToSquare => {
        return numToSquare * 2
    })
    console.log(doubled)
}

maps([2, 3, 4, 5])