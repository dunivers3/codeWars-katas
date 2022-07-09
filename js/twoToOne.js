function longest(s1, s2) {
    /**
     * P: takes in two strings including only letters
     * R: returns a sorted new string, the longest possible each taken only once from the input
     * E: Input = a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" Output = longest(a, b) -> "abcdefklmopqwxy"
     * P:
     * 1. take both strings and concatinate them as one array
     * 2. sort the string in ascending order using sort
     * 3. remove duplicates
     */
    //1
    let str1 = s1.split("")
    let str2 = s2.split("")
    const combinedStr = str1.concat(str2)
    //2
    combinedStr.sort()
    //3
    let filteredArr = combinedStr.filter((element, idx, arr) => {
        return arr.indexOf(element) == idx
    })
    console.log(filteredArr.join(""))
    return filteredArr.join("")
}

longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")
