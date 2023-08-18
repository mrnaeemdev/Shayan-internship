function bubbleSort(inputArray) {
    // traverse the array again and again untill it sorted 
    for (let inputArrayScan = 0; inputArrayScan < inputArray.length - 1; inputArrayScan++) {
        let isInputArraySorted = false;
        // loop to compare the elements of array and swap accordingly
        for (let iterator = 0; iterator < inputArray.length - inputArrayScan - 1; iterator++) {
            if (inputArray[iterator] < inputArray[iterator + 1]) {
                let temporay = inputArray[iterator];
                inputArray[iterator] = inputArray[iterator + 1];
                inputArray[iterator + 1] = temporay;
                isInputArraySorted = true;
            }
        }
        // overcome the extra trvaverses on already sorted array
        if (isInputArraySorted == false) {
            break;
        }
    }
    return inputArray;
}

// call function
console.log(bubbleSort([34, 76, 0, 234, 90]));
console.log(bubbleSort([-3, 32, 345, 45, 90]));
console.log(bubbleSort([83, 32, 3, 45, 90]));
console.log(bubbleSort([3, 0, 324, 34, 3]));
console.log(bubbleSort([19, 32, 345, 3, 2]));
console.log(bubbleSort([1,2,3,4,5]));