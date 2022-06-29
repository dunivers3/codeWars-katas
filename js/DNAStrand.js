function dnaStrand(dna){
    /**
     * P: takes in a string on the dna string
     * R: return a string of the complementary dna string
     * E: "GTAT" --> "CATA" or "ATTGC" --> "TAACG"
     * P:
     * -split the string letters so as to compare them individually
     * -compare each individual letter, for A replace with T and vice versa. for C replace with G and vice versa
     * -join the individual returns together and return
     */
    let newArr = []
    let newStr = dna.split("").map( element => {
        if(element === "A"){
            newArr.push("T")
        }else if(element === "T"){
            newArr.push("A")
        }else if(element === "G"){
            newArr.push("C")
        }else if(element === "C"){
            newArr.push("G")
        }else{
            console.log("Please use the correct dna string")
        }
    } )    
    console.log(newArr.join(""))

}
dnaStrand("ATTGC")