function positiveSum(arr) {
    /**
     * P: takes in an array of numbers, mixed, positive and negative
     * R: returns one number, the positive numbers summed up
     * E: [1,-4,7,12] => 1 + 7 + 12 = 20
     * P:
     * - iterate the array picking the positive numbers using filter
     * - iterate the new array adding all of its contents using reduce
     * - return the reduce element
     */
    const positiveNums = arr.filter(element => {
        if (element > 0) {
            return element
        }
    })
    const sum = positiveNums.reduce((a, e, i, arr) => {
        return a + e
    })
    console.log(sum)
}
positiveSum([1, -4, 4, -23, -12])