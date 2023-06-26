/* 
12:15pm - 12:30pm (15min)
Write a program that can calculate the Hamming distance between two DNA strands.

[P]roblem is fairly easy to understand. The TLDR is you will be given two strands of DNA of equal length. Need to determine the "Hamming distance," which is essentially the number of differences between the two homologous DNA stands. You determine the "number of differences" by comparing bases from each strand. You compare in order. So if the first strand is "ABCD" and the second strand is "ABCE", then the hamming distance is 1, as D !== E. 

[E]
Rules (gathered from test cases):
-must create a DNA class to deal with the problem. 
-Class takes in one argument to start, is the first strand.
-hammingDistance method accepts one argument, is the second strand. hammingDistance method returns a Number, indicating the hamming distance
-edge case for empty DNA strand. 
-must also IGNORE extra length on either length, if either is longer. 
-no changes should be made to the original strand you entered if you compare with strands of smaller/greater length

[D]
Can honestly just compare using strings. No complex DS needed. That is, store the first DNA strand as a string.

[A]
Create Class DNA.
Takes in one argument. Can be empty string. 
Class has one necessary method, hammingDistance, which takes in a second arg (for the second DNA strand) and returns the hammingDistance as a number type. Edge case of empty string to take care of. 

[C]
*/

class DNA {
  constructor(firstStrand) {
    this.firstStrand = firstStrand;
  }

  hammingDistance(secondStrand) {
    let minLength = Math.min(this.firstStrand.length, secondStrand.length);
    let hammingDistance = 0;
    let firstStrand = this.firstStrand; 
    for (let index = 0; index < minLength; index +=1) {
      if (firstStrand[index] !== secondStrand[index]) {
        hammingDistance += 1;
      }
    }

    return hammingDistance;
  }
}

module.exports = DNA;