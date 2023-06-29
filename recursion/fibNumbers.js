//You can run scripts from the command line using the node command installed with nodejs: node fibNumbers.js

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
