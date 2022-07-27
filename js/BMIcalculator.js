function bmiCalculator(weight, height) {
    /**
     * P: takes in two parameters, always integers
     * R: returns a string, the result of the bmi result
     * E: bmi = weight / height2
     *    if bmi <= 18.5 return "Underweight"
     *    if bmi <= 25.0 return "Normal"
     *    if bmi <= 30.0 return "Overweight" 
     *    if bmi > 30 return "Obese"
     * P:
     * 1. calculate bmi into a variable
     * 2. write an if statement/ switch case to return the respective strings for each test
     */
    const bmi = Number(weight / (height * height))
    if (bmi <= 18.5) {
        console.log("Underweight!")
        return "Underweight!"
    } else if (bmi <= 25.0) {
        console.log("Normal")
        return "Normal"
    } else if (bmi <= 30.0) {
        console.log("Overweight!")
        return "Overweight!"
    } else {
        console.log("Obese!")
        return "Obese!"
    }
}

bmiCalculator(68, 1.69)