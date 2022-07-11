const series = 1 + 1 / 4 + 1 / 7 + 1 / 10 + 1 / 13 + 1 / 16 + nth

function seriesSum(n) {
    /**
     * P: takes in a series of natural numbers upto the nth
     * R: return the sum of the series upto the nth parameter
     * E: n=5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
     * P: 
     */
    let sum = 0;
    for (i = 0; i < n; i++) {
        sum += 1 / (1 + i * 3);
    }

    return sum.toFixed(2);
}