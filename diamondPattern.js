function printDiamondPattern(numberOfRows) {
    if(Number.isInteger(numberOfRows) && numberOfRows>0) {
        // draw upper side of diamond 
        for(let upperIterator=1;upperIterator<numberOfRows;upperIterator++) {
            console.log(" ".repeat(numberOfRows - upperIterator) + "* ".repeat(upperIterator));
        }
        // draw lower side of diamond 
        for (let lowerIterator = numberOfRows; lowerIterator >= 1; lowerIterator--) {
          console.log(" ".repeat(numberOfRows - lowerIterator) + "* ".repeat(lowerIterator));
        }
    }
    else{
      console.log("Input must be a positive number");
    }
  }
  
  //call function
printDiamondPattern(4);

