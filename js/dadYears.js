function twiceAsOld(dadYearsOld, sonYearsOld) {
    /**
     * P: takes in two arguments, both are numbers
     * R: returns a number
     * E: dadYearOld = 55 sonYearOld = 30 ==> 5
     * P:
     * 1.take the total of dad years, subract the son years multiplied by 2
     */
    return Math.abs(dadYearsOld - (sonYearsOld * 2))
}

console.log(twiceAsOld(22, 1))