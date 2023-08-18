function findLargest(inputArray, inputArraySize) {
    let largest=-1;

    // loop through array and check if current element is greater than previous largest number
    for(let iterator=0;iterator<inputArraySize;iterator++) {
        if(inputArray[iterator]>largest) {
            largest=inputArray[iterator];
        }
    }
    return largest;  // return the largest number function from function
}


console.log(findLargest([1, 4, 7, 13, 99, 0, 8, 5],8));

console.log("ID: 48");
