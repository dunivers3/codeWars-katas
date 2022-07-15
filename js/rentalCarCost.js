function rentalCarCost(days) {
    /**
     * P: the function takes in the number of days in numbers
     * R: returns a number as the total amount for different days
     * E: 
     * P:
     * 1.get the cost for x number of days without the discount
     * 2.add the discount for 7 or more days
     * 3.add the discount for 3 or more days
     */
    let numOfDays = Number(days)
    let rent = 40 * numOfDays

    if (numOfDays >= 7) {
        let discount = 50
        return rent - discount
    } else if (numOfDays >= 3) {
        let discount = 20
        return rent - discount
    } else {
        return rent
    }

}

console.log(rentalCarCost(3))