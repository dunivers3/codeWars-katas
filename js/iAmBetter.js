function iAmBetterThanAverage(classScore, myScore){
    const averageClassScore = classScore.reduce((a, c) => a + c)/classScore.length
    if(averageClassScore < myScore){
        console.log("I am better than average!")
    }
    else{
        console.log("Duncan, you suck!")
    }
}

//iAmBetterThanAverage([34,55,39,66,23,43,72], 88)