/*
610pm - 6:50pm (this q was hard)
Create a clock that is independent of date.

You should be able to add minutes to and subtract minutes from the time represented by a given Clock object. Note that you should not mutate Clock objects when adding and subtracting minutes -- create a new Clock object.

Two clock objects that represent the same time should be equal to each other.

You may not use any built-in date or time functionality; just use arithmetic operations.

============================
General ideas: make a Clock class. The add/subtract methods return new Clock objects
Tricky part with this question is there are many moving parts. Let's break it down. 

[E]
Rules:
-Clock class. Maybe trick is the static `at` method just returns an instance of the Clock class. So does `add` and `subtract`. 

-`at(hr, min)` static method. Can take in two arguments, first is required. `hr` refers to the hour. hr can be between 0 and 23, inclusive. Assume that `min` must also be between 0 and 59, inclusive. Let's say this method returns a new Clock instance and you set two properties: the hour and minutes. Store as number types. 

-`toString()` INSTANCE method. Is instance method because, based on how you've set up the class, you call `toString` on a clock instance object. Format is always `HH:MM`. Conver the hours and minutes into this format. 

-`add(minutes)` instance method. Takes one required argument, is total number of minutes to add. Must be able to account for if >= 60minutes. Make changes to the hour and minutes properties accordingly. Bc want to return a new clock object, do not change the original data properties. Just use temp variables to manipulate the hours and minutes.
  -easiest might be to first add all the minutes to the minutes property. If >= 60, change into hours and add over to the hours property. If hours property is > 23 at the end, mod 24 from it to reset the clock. Set minutes equal to the remaining minutes. 
  -return a NEW clock object! 

-`subtract` instance method. similar to the `add` method, but slightly trickier. How to deal with the 0th hour edge case? Honestly, how about this: convert everything into minutes. So both the hour property and minutes property into one sum representing the total minutes. Can be a value between 0 and (60 * 24) - 1 = 1439. Then, subtract the minutes you gave as input. If is a vallue less than 0, add 1440 to it until it is positive. Now, calculate the new hour and minute, and return as a new clock object.

-`isEqual` should just check to make sure the hour and minute properties are equal between the two class objects you are comparing. isEqual takes in one argument representing the class object you are comparing with. 
*/

class Clock {
  constructor(hour, minutes) {
    this.hour = hour; 
    this.minutes = minutes;
  }

  static at(hour, minutes = 0) {
    return new Clock(hour, minutes);
  }

  toString() {
    let paddedHour = this.pad(this.hour, 2);
    let paddedMinute = this.pad(this.minutes, 2);

    return `${paddedHour}:${paddedMinute}`;
  }

  pad(number, length) {
    let stringNum = String(number);
    let lengthNeeded = length - stringNum.length; 
    return '0'.repeat(lengthNeeded) + stringNum; 
  }

  add(minutes) {
    let currMin = this.minutes;
    let currHour = this.hour; 
    let newMin = currMin + minutes; 

    let addHours = Math.floor(newMin / 60); 
    newMin = newMin % 60; 

    let newHour = currHour + addHours; 
    newHour = newHour % 24; 

    return new Clock(newHour, newMin);
  }

  subtract(minutes) {
    let totalMinutesInDay = 1440; 

    let currHour = this.hour; 
    let currMin = this.minutes; 

    let totalMin = (currHour * 60) + currMin; 
    let newMin = totalMin - minutes; 

    while (newMin < 0) {
      newMin += totalMinutesInDay; 
    }

    let newHour = Math.floor(newMin / 60) % 24;
    newMin = newMin % 60; 

    return new Clock(newHour, newMin);
  }

  isEqual(clockObj) {
    return this.hour === clockObj.hour && this.minutes === clockObj.minutes; 
  }
}

module.exports = Clock;