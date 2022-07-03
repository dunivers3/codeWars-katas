function squareSum(numbers) {
    /**
     * P: takes in an array of numbers
     * R: returns a number
     * E: for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9
     * P:
     * - map through the array squaring all the values and return a new array 
     * - reduce the new array adding up all the squared values together.
     * - return the reduced value
     */
    const squaredNums = numbers.map(element => {
        return Math.pow(element, 2)
    })
    console.log(squaredNums)
    const newArr = squaredNums.reduce((sum, element) => sum + element, 0)
    console.log(newArr)
    return newArr
}
squareSum([1, 2, 2])