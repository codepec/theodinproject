//You can run scripts from the command line using the node command installed with nodejs: node script.js

console.log("Assignment 1 - Warmup: Fibonacci");
console.log();
//for big values - needs low perfomance

function fibs(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    var sequence = [0, 1];
    while (sequence.length < n) {
      var nextNum =
        sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(nextNum);
    }
    return sequence;
  }
}

var fibNumbers = fibs(8);
console.log("fibNumbers iterative (loop-based) (8): ", fibNumbers);

//for low values - needs high performance

function fibsRec(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    var sequence = fibsRec(n - 1);
    var nextNum = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextNum);
    return sequence;
  }
}

var fibNumbersRec = fibsRec(8);
console.log("fibNumbers recursively (8): ", fibNumbersRec);

console.log();
console.log();
console.log("Assignment 2 - Project: Merge Sort");
console.log();

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  // Split the array into two halves
  const middle = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);

  // Recursively sort the left and right halves
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add the remaining elements from the left and right arrays
  while (leftIndex < left.length) {
    merged.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    merged.push(right[rightIndex]);
    rightIndex++;
  }

  return merged;
}

const array = [
  123, 34, 4, 235, 5235, 6756, 34, 214, 345, 547, 79, 9070, 78657456, 583434567,
  35, 244, 2, 2, 23544, 56, 35, 42, 1, 61, 6, 644, 234, 24,
];

const sortedArray = mergeSort(array);
console.log(sortedArray);
