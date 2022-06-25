function solution(str, ending){
    /**
     * P: takes in a two strings
     * R: retuns a boolean or a string of "True"/"False"
     * E: "abcd, cd" => true or "True"
     *      "abcd, ab" => false or "False"
     * P:
     */
    //split the string to check for individual characters
    //split the ending string too
    //determine the number of values needed to check for the string
    // e.g, if 3 in ending, count 3 from the string, starting from the last one
    //check if the second argument matches starting from the last ones
    //return true or false inside the check => the if statement
    
    //const strArray = str.split("").reverse()
    //const endingArray = ending.split("").reverse()

    //for(i=0; i<=strArray.length - 1; i++){
        //let returnedArray = strArray[i]
    //}
    //for(i=0; i<=endingArray.length - 1; i++){
        //let returnedEnding = endingArray[i]
    //}
    //if(returnedArray[i] === returnedEnding[i]){
        //console.log("True")
    //}else{
        //console.log("False")
    //}

    //solution
    console.log(str.endsWith(ending))
}
solution("abcd", "cd")