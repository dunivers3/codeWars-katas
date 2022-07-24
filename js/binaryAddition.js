function addBinary(a, b) {
    /**
     * P: takes in two parameters, always numbers
     * R: return a binary (number) addition of the two numbers
     * E: 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary
     * P:
     * 1. declare the addition variable and do the addition
     * 2. declare the binary convertion variable and do the convertion
     * 3. return a string using template string accomodating all the figures(numbers) in arbitrary form
     */
    const sum = a + b
    const binaryFigure = Number(sum).toString(2)
    return `${a} + ${b} = ${sum} in decimal or ${binaryFigure} in binary`
}
console.log(addBinary(51, 12))