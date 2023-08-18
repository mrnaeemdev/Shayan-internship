function toSnakeCase(inputString){
    // input validations -> input must be non empty string
    if(typeof(inputString)!="string") {
        return("Input must be string")
    }
    else if(typeof(inputString) === "string" && inputString.length===0) {
        return ("Input string should not be empty");
    }
    else{
    let snakeCaseString = inputString.toLowerCase();
    snakeCaseString = snakeCaseString.replaceAll(" ", "_")
    return snakeCaseString;
    }
}

console.log(toSnakeCase("HeLlo fRIENds"));