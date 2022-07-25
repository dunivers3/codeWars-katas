function stray(numbers) {
    /**
     * P: takes in an array of numbers: odd-length array of integers. The input array will always be valid! (odd-length >= 3)
     * R: returns an integer that is the odd one out inthe input. The single different number
     * E: [17, 17, 3, 17, 17, 17, 17] ==> 3
     * P:
     * 1. sort the array in ascending order. if the first index number === second index number, sort the array in reverse and remove the first number
     * if first index number !== second index number, remove the first number
     */

    const sortedArr = numbers.sort((a, b) => a - b)
    if (sortedArr[0] === sortedArr[1]) {
        return sortedArr[sortedArr.length - 1]
    } else {
        return sortedArr[0]
    }
}

console.log(stray([1, 1, 2]))