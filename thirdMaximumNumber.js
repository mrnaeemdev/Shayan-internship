function findThirdMaximum(inputAarray) {
  // input validation, input must be an array
  if (!Array.isArray(inputAarray)) {
    return "Input must be array";
  } else {
    inputAarray = Array.from(new Set(inputAarray)); // set will remove the dublicate number from array
    inputAarray.sort(function (a, b) {
      return a - b;
    }); // compare function use for number sorting
    // calculate the index of third maximum number
    let indexOfNumber = inputAarray.length - 3;
    if (indexOfNumber < 0) {
      return inputAarray[inputAarray.length - 1];
    } else {
      return inputAarray[indexOfNumber];
    }
  }
}

// call function
console.log(findThirdMaximum([1, 2]));
// console.log(findThirdMaximum([1, 2, 3, 4, 5]));




