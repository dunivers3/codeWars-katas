/*Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
*/
function disemvowel(str) {
    /**
     * P: takes in a string
     * R: returns a string without the vowels in trols
     * E: "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!"
     * P:
     * 1.define the letters to remove
     * 2.iterate through the string and separate the individual characters in an array using split method
     * 3.check for the letters to remove in the separated array using filter or find or an for loop
     * 4.return the string without the found letters(vowels)
     */
    const vowels = ["a", "e", "i", "o", "u"]
    let badString = str.split("").filter(function (item) {
        let theVowels = vowels.indexOf(item.toLowerCase()) == -1
        console.log(theVowels)
        console.log(item)
        return theVowels

    }).join("")
    console.log(badString)
    return badString

}
disemvowel("This website is for losers LOL!")