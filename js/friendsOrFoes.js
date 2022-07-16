function friend(friends) {
    /**
     * P: takes in an array of strings
     * R: returns an array of strings filtered
     * E: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
     * P:
     * 1.create a function that checks if a string is four letters
     * 2.pass every element of the array through the function
     * 3.check if a string in the array passes true
     * 4.return a new array for elements that passes true
     */
    //1
    function letterChecker(str) {
        return str.length === 4
    }
    //2
    let checker = friends.map((element, idx) => {
        if (letterChecker(element)) {
            return element
        } else {
            return false
        }
    })
    //3
    let myFriends = checker.filter(function (item) {
        //4
        if (item) {
            return item
        }
    })
    console.log(myFriends)
    return myFriends

}
friend(["Ryan", "Kieran", "Jason", "Yous"])