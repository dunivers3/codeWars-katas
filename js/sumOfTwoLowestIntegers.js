function sumTwoSmallestNumbers(numbers) {
    /**
     * P: takes in an array of minimum 4 positive integers. no floats or non-positive integers will be passed
     * R: returns the sum of the two lowest positive numbers
     * E: when an array is passed like [19, 5, 42, 2, 77], the output should be 7
     *    [10, 343445353, 3453445, 3453545353453] should return 3453455
     * P: 
     * 1.rearrange the array using sort in ascending order
     * 2.add the first two numbers of the array
     * 3.return the sum of the no. 2 above 
     */
    //1
    const sortedArr = numbers.sort((num, idx) => num - idx)
    console.log(sortedArr)
    //2
    let sum = sortedArr[0] + sortedArr[1]
    //3
    console.log(sum)
    return sum
}

const arr = [10, 343445353, 3453445, 3453545353453]
sumTwoSmallestNumbers(arr)