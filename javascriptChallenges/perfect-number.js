/*
4:25pm - 4:35pm (this one was pretty quick)
Write a program that can tell whether a number is perfect, abundant, or deficient.

An Aliquot sum refers to the sum of all positive divisors of the number you've inserted. E.g.: the positive divisors of 15 are 1, 3, and 5. Thus, the Aliquot sum is 9. 

Positive divisors refer to the numbers that can be evenly divided into the target number with no remainder, excluding the number itself.

Perfect numbers have an Aliquot sum that is equal to the original number.
Abundant numbers have an Aliquot sum that is greater than the original number.
Deficient numbers have an Aliquot sum that is less than the original number.

Rules: 
-cannot have negative numbers 
-Must create presumably an object of methods. No classes perse
This object has one required method `classify` which takes in one argument, a number. 
The return value of `classify` is a string. You get either `deficient`, `perfect`, or `abundant`. The `classify` method basically calculates the Aliquot sum and then compares with the initial input to determine if it is perfect, deficient, or abundant
*/

let PerfectNumber = {
  classify(num) {
    if (num < 0) {
      throw new Error('Cannot use negative numbers');
    }

    let positiveDivisors = [];
    for (let potentialDivisor = 1; potentialDivisor < num; potentialDivisor +=1) {
      if (num % potentialDivisor === 0) {
        positiveDivisors.push(potentialDivisor);
      }
    }

    let aliquotSum = positiveDivisors.reduce((acc, curr) => acc + curr, 0);

    if (aliquotSum === num) {
      return 'perfect';
    } else if (aliquotSum < num) {
      return 'deficient';
    } else {
      return 'abundant';
    }
  }
};

module.exports = PerfectNumber;