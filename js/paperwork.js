function paperwork(n, m) {
    /**
     * P: takes in two integers, n as the number of classmates and m as the number of paperwork(in pages)
     * R: returns a number, the blank pages needed
     * E:n= 5, m=5: 25 or n=-5, m=5:  0 
     * P: 
     * - use an if statement that determines if any of the argument is < 0
     * - determine the calculation point, the math function
     * - return the number
     */
    if (n < 0 || m < 0) {
        return 0
    } else {
        return n * m
    }
}

console.log(paperwork(4, -5))