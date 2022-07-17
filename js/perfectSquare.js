function findNextSquare(sq) {
    /**
     * P:takes in an integer, non-negative
     * R:returns an interger or -1 if sq is not a perfect square
     * E:121 --> 144 ==> 121 is a perfect square, so 144 is the next perfect square
     * P:
     * 1.write a function that checks if sq is a perfect square
     * 2.squareroot + 1 of sq is the next number, square it to make it a perfect square
     * 3.use an if statement, for if sq is a perfect square, return squareroot + 1 squared, else, return -1
     */
    //1
    const perfectSquare = Math.sqrt(sq)
    //2
    let nextSq = perfectSquare + 1
    if (Number.isInteger(perfectSquare)) {
        return nextSq * nextSq
    } else {
        return -1
    }
}
console.log(findNextSquare(145))