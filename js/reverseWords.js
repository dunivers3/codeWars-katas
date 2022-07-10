function reverseWords(str) {
    /**
     * P: takes in a string parameter
     * R: returns the string each word reversed but retaining the spaces
     * E: "This is an example!" ==> "sihT si na !elpmaxe"
     * P:
     * 1. pass the string in a map method to convert each word in an array
     * 2. pass each array into a reverse method
     * 3. join the reversed array with join method
     * 4. return the joined value
     */
    const newStr = str.split("").reverse().join("").split(" ").reverse().join(" ")
    console.log(newStr)
    return newStr
}

reverseWords("This is an example!")