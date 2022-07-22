function sum(numbers) {
    /**
     * P: takes in an array of numbers, always, unknown length and could be empty
     * R: return 0 if the array is empty, or returns the sum of the numbers in the array
     * E: Input: [1, 5.2, 4, 0, -1] Output: 9.2
     * P: 
     * 1. add up through the array using reduce method
     */
    return numbers.reduce((accu, element) => {
        return accu + element
    }, 0)
}
console.log(sum([1, 5.2, 4, 0, -1]))