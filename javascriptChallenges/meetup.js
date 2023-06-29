/*
2:25pm - 310pm. Took about 45min. This question was particularly difficult because you had to learn about the Date constructor and identify which methods were important while simulating a test environment. Solution is MUCH uglier than suggested one. If go back and have time, would refactor heavily and consider easier logic. Learned a lot about the Date constructor and its quirks.

what did you learn about the Date constructor:
days start from 1 (not 0-index);
to get the last day of a month, can have the day be 0, and change the month to be month + 1. 
-month is 0-indexed i.e., 0 - 11. 
-getDay() returns you the day, where Sunday = 0, Saturday = 6;
-you didn't use getDate(), but the soln did, and it returns the day of the month for this date. 

-class Meetup
  -two inputs. First is number for year (e.g., 2013), second is number representing the month (number 1-12).
-`day()` instance method. Takes in two arguments. 
  -first arg = string representing day of week:'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', and 'Sunday'
  -second arg = string representing descriptor: 'first', 'second', 'third', 'fourth', 'fifth', 'last', and 'teenth'. 
  -NOTE: case unimportant. suggest converting and doing all in lower case. 
-`toString` method. 

thirteenth
fourteenth 
fifteenth
sixteenth
seventeenth
eighteenth
nineteenth

Process:
-`Meetup`. two number inputs. 
  Write as separate properties of child instance i.e.,
  this.month = month;
  this.day = day;

-`day` instance method. Takes in two strings `day` and `descriptor`. Lower case both. convert the `day` to numeric representation of day of week. Use for matching later. Returns date object. 
  -now, check `descriptor'. do brute force process. if `descriptor' === 'teenth', run helper method `teenthDay`, which looks on the 12th through 19th day. Use Date constructor to check. 
  -if `descriptor' === "last", start from the end until you see the right day. 
  -otherwise, use counter and start from the beginning of month to see how many times you see the day. start counter = 0. Once you see the day, add to counter and see if matches. 

///////////////////////////////////////////
// trick is you need to get the dat to put into 

//dictionary converting from string day to their number equivalent. Date.prototypegetDay(), where Sunday = 0, Saturday = 6. Can just check all the days in the month until you see the day you want. 
//if descriptor in ['first', 'second', 'third', 'fourth', 'fifth'], go in order, do this way 
// if descriptor === last, start from the end of the month and count down until the day is the day you specified. 
// if descript === 'teenth' start from the 12th all the way up to the 19th until you see the day you want. 

//TLDR: three dif methods for each type of descriptor.
*/

class Meetup {
  constructor(year, month) {
    this.year = year;
    this.month = month - 1; 
  }

  day(dayOfWeek, descriptor) {
    let toNumberMap = {
      'sunday': 0,
      'monday': 1,
      'tuesday': 2,
      'wednesday': 3, 
      'thursday': 4,
      'friday': 5, 
      'saturday': 6,
    };

    dayOfWeek = dayOfWeek.toLowerCase(); 
    let dayOfWeekNum = toNumberMap[dayOfWeek];
    descriptor = descriptor.toLowerCase();

    if (descriptor === 'teenth') {
      return this.teenth(dayOfWeekNum);
    } else if (descriptor === 'last') {
      return this.last(dayOfWeekNum);
    } else {
      return this.inOrder(dayOfWeekNum, descriptor);
    }
  }


  teenth(dayOfWeekNum) { // input is number 0-6
    for (let index = 13; index <= 19; index +=1) {
      let day = new Date(this.year, this.month, index).getDay(); 
      if (day === dayOfWeekNum) {
        return new Date(this.year, this.month, index);
      }
    }
  }

  last(dayOfWeekNum) {
    let month = this.month + 1; 
    for (let index = 0; index >= -31; index -=1) {
      let day = new Date(this.year, month, index).getDay(); 
      if (day === dayOfWeekNum) {
        return new Date(this.year, month, index);
      }
    }
  }

  inOrder(dayOfWeekNum, descriptor) {
    let toNumberOccurrences = {
      'first': 1,
      'second': 2,
      'third': 3,
      'fourth': 4,
      'fifth': 5, 
    }

    let count = 0;
    let numberOccurrences = toNumberOccurrences[descriptor];
    for (let index = 1; index <= 31; index +=1) {
      let day = new Date(this.year, this.month, index).getDay(); 
      if (day === dayOfWeekNum) {
        count +=1; 
        if (count === numberOccurrences) {
          return new Date(this.year, this.month, index);
        }
      } 
    }

    return null;
  }
}

module.exports = Meetup;


// function dateAsString(year, month, day) {
//   let date = new Date(year, month - 1, day);
//   console.log(date.toString());
// }

// dateAsString(2013, 4, 0); // gets you March 31, 2013
//dateAsString(2013, 4, -1); // // gets you March 30, 2013

