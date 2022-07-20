function getCount(str) {
    /**
     * P: takes in a series of string(vowels)
     * R: returns a number, number of vowels in the given string
     * E: input - abracadabra => output - 5
     * P:
     * 1.split the string to separate the individual characters in an array
     * 2.define the vowels, and write a function to check agains the vowels
     * 3.check the returned array against the vowels and count the matches
     * 4.return the number
     */
    let digitals = "b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z"
    let num = str.split("").filter(function (element, idx, arr) {
        return digitals.indexOf(element) == -1
    })
    num = num.join("").split(" ").join('').split('')
    console.log(num.length)
}

getCount("pear tree")