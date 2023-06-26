/* Write a program to determine whether a triangle is equilateral, isosceles, or scalene.
An equilateral triangle has all three sides the same length.
An isosceles triangle has exactly two sides of the same length.
A scalene triangle has all sides of different lengths.

A triangle must also satisfy two other conditions:
1) all sides must be of length > 0
2) the sum of lengths of any two side must be greater than the length of the third side

E: looked at the test cases. A few observations...


-Must write a Triangle class. Takes in three arguments for each side length. 
-kind() method which returns string indicating what kind of triangle we have. 
-if try to have a Triangle with 0 or negative sides, throw an error 
- triangles violating triangle inequality also throw an error.
*/

class Triangle {
  constructor(l1, l2, l3) {
    Triangle.isValid(l1, l2, l3); // check is valid first
    this.l1 = l1;
    this.l2 = l2;
    this.l3 = l3;
  }

  static isValid(l1, l2, l3) {
    // Check if any lengths are <= 0
    if ((l1 <= 0 || l2 <= 0 || l3 <= 0)) {
      throw new Error('Invalid Triangle!');
    }

    // Check if triangle violates triangle inequality
    if ((l1 + l2 <= l3) || (l1 + l3 <= l2) || (l2 + l3 <= l1)) {
      throw new Error('Invalid Triangle!');
    }

  }

  kind() {
    if (this.l1 === this.l2 && this.l2 === this.l3) {
      return "equilateral";
    } else if (this.l1 !== this.l2 && this.l2 !== this.l3 && this.l1 !== this.l3) {
      return "scalene";
    } else {
      return "isosceles";
    }
  }
}

module.exports = Triangle;