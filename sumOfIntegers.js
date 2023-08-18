function sumOfRange(leftSummand, rightSummand) {
    let inclusiveSumBetweenSummands=0;
    // Input validations, leftSummand and rightSummand must be integers
    if(Number.isInteger(leftSummand) && Number.isInteger(rightSummand)) { 
        for(let iterator=leftSummand; iterator<= rightSummand; iterator++) {
            inclusiveSumBetweenSummands=inclusiveSumBetweenSummands+iterator;
        }
    }
    else{
        return("Numbers are not integers")
    }
    return inclusiveSumBetweenSummands;
}

// call function
console.log(sumOfRange(1, 1.15)); 