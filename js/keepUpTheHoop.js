const hoopCount = function (n) {
    /**
     * P: takes in number, the count
     * R: returns a string, an encouraging message
     * E: If Alex gets 10 or more hoops, return the string "Great, now move on to tricks"
     *    If he doesn't get 10 hoops, return the string "Keep at it until you get it"
     * P: 
     * 1.write a conditional that checks if n 10 or more and return the respective message, else, return the other message
     */
    //1.
    if (n >= 10) {
        return "Great, now move on to tricks"
    } else {
        return "Keep at it until you get it"
    }
}
console.log(hoopCount(45))