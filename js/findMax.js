function findMax(nums) {
    let maxNum = Number.NEGATIVE_INFINITY; //smaller than all other numbers
    for (let num of nums) {
        if (num > maxNum) {
            maxNum += 1
        }
    }
    console.log(maxNum)
    return maxNum
}

findMax([1, 2, 3, 4])