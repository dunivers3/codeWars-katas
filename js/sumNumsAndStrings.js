function sumMix(arr) {
    /**
     * P: the function takes in a arry of integers, as both numbers and strings
     * R: returns the sum of all the integers as if all were numbers
     * E: [4, 3, 2, "5", "8", "1", 2, 22, "40"] =>  85
     * P:
     * - map through the array converting the integer strings into numbers
     * - reduce the new array adding the the elements together
     * - return the reduced value
     */
    const allNums = arr.map(Number).reduce((acc, element) => {
        return acc + element
    }, 0)
    console.log(allNums)
    return allNums
}

sumMix([4, 3, 2, "5", "8", "1", 2, 22, "40"])