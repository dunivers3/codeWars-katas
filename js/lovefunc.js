//the couple is in love if the numbers of petals is even on one flower and odd in the other flower
function lovefunc(flower1, flower2){
    if(flower1 % 2 === 0 && flower2 % 2 === 1){
        return true
    }
    else if(flower2 % 2 === 0 && flower1 % 2 === 1){
        return true
    }
    else{
        return false
    }
}


//refine it to work in the dom of the index.html file