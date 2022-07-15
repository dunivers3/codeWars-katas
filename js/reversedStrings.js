function solution(str) {
    /**
     * P: takes in a string
     * R: return a string
     * E: 'world'  =>  'dlrow'
     * P:
     * 1.split the string to form an array
     * 2.reverse the array using reverse method
     */
    const reversedString = str.split("").reverse().join("")
    console.log(reversedString)
    return reversedString
}
solution("world")