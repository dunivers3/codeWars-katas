const min = function (list) {
    /**
     * P: takes in a list of integers
     * R: returns the lowest number in the list
     * E: * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
     * P:
     * 1.sort the list and return the first index 
     */
    //1
    let firstSortedNum = list.sort((a, b) => a - b)[0]
    console.log(`min = ${firstSortedNum}`)
    return firstSortedNum
}
const max = function (list) {
    /**
     * P: takes in a list of integers
     * R: returns the highest number in the list
     * E: * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
     * P:
     * 1.sort the list and return the last index 
     */
    //1
    let lastSortedNum = list.sort((a, b) => a - b)[list.length - 1]
    console.log(`max = ${lastSortedNum}`)
    return lastSortedNum
}

min([5])
max([5])