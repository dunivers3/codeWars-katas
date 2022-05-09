codeWarsEl.appendChild(document.createElement("li")).classList.add("grading-el")

const myAverage = [88,45,99]
function getGrade(s1, s2, s3){
    let averageGrade = (s1+s2+s3)/3
    if(averageGrade >= 90){
        return "A"
    }else if(averageGrade >= 80){
        return "B"
    }else if(averageGrade >= 70){
        return "C"
    }else if(averageGrade >= 60){
        return "D"
    }else{
        return "F"
    }
}

document.querySelector(".grading-el").textContent = `The grading system for most schools. So, from this: ${myAverage}, your got a ${getGrade(88,45,99)}
 `
