function invertedPyramid(numberOfRows) {
  if(Number.isInteger(numberOfRows) && numberOfRows>0) {
    for (let iterator = numberOfRows; iterator >= 1; iterator--) {
        // concate spaces with asteriks
        console.log(" ".repeat(numberOfRows - iterator) + "* ".repeat(iterator));
      }
  }
  else{
    return ("Input must be a positive number");
  }
}

//call function
invertedPyramid(5);



// function check(input) {
//     let res=" ".repeat(10) + input.repeat(2);
//     console.log("Repeated String " + res);
//     console.log("Original String " + input)
// }

// check("Naeem ")

function printInvertedPyramid(numberOfRows) {
  for (let iterator = numberOfRows; iterator >= 1; iterator--) {
    for (
      let countOfSpaces = numberOfRows - iterator;
      countOfSpaces > 0;
      countOfSpaces--
    ) {
      process.stdout.write(" "); 
    }
    for (let startCount = 1; startCount <= iterator; startCount++) {
      process.stdout.write("*");
      if (startCount !== iterator) {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

// printInvertedPyramid(5);

// printInvertedPyramid(5)
