/*
426pm - 

- How do you identify a "prime number" within the string? I understood we are told they must be present as substrings. What do we mean by a substring? Does the number have to be contiguous within the string? 

- What if there are no numbers? What do we print? An empty array? 

- What separates prime numbers in the string...? For example, does the string "2 13" contain only one number substring (213), or TWO number substrings? Does an empty space separate the two? 

- Can we assume we will always get an input?

- Can we assume the input will always be a string? What if it isn't?

- How do you define a prime number again? 

- Should the prime numbers be printed in a certain order? Or does order not matter? 

- Should the output be an array of number types? Do we care?

Questions you missed:
-If the string has three consecutive numbers, like 123. Should I consider 12 and 23 as separate numbers? (pretty important question you missed)

*/

// function primeNumberPrinter(str) {
//   // let cleaned = str.match(/[0-9]+/g)
//   let cleaned = str.split(/[^0-9]+/)
//   console.log(cleaned);
// }
// primeNumberPrinter("a-4bc2k-13d"); 


// SELF NOTE: regexp is GREEDY by default. you can make it lazy with the ? operator. TRY:
// "a-4bc2k-13d".match(/[0-9]+/g) // greedy (default)
// "a-4bc2k-13d".match(/[0-9]+?/g) // lazy

// If split does not make sense, use match instead. lol. 
// Hm.... Why is that? This is important to understand. You are on to something with RegExp. 

// Try the following. See the difference: 
// // 1
// function primeNumberPrinter1(str) {
//   let cleaned = str.split(/[^0-9]/)
//   console.log(cleaned);
// }
// primeNumberPrinter1("a-4bc2k-13d"); // [ '', '4', '2', '13', '' ]

// // 2
// function primeNumberPrinter2(str) {
//   let cleaned = str.match(/[0-9]+/g)
//   console.log(cleaned);
// }
// primeNumberPrinter2("a-4bc2k-13d"); // [ '4', '2', '13' ]

/*
OK, here is what you have learned/gathered... 

I think the split works as intended. You are splitting on exactly what you intended to. 
RegExp just does not have a representation for the empty space i.e., "". It is not represented by \s, which is for all white space characters. 
At the same time, however, String.prototype.split DOES account for empty space. Thus, when you do "a-4bc2k-13d".split(/[^0-9]+/), it will indeed split on all of those non digit characters i.e., "a-", "bc", "k-", and "d", HOWEVER, in doing so, you also have those empty spaces get shown in the resulting array. Dang. 

Other folks have ran into this issue before. Seems like, if you want to continue to work with split to get the intended result, can use "look ahead" whatever that means. But, it is not a concept you've covered. So.... yeah. Someone else also says "Generally for tokenizing you use match, not split:" so I guess match IS more convenient in this instance. 

Link:
https://stackoverflow.com/questions/19918150/javascript-avoiding-empty-strings-with-string-split-and-regular-expression-pre

Another one. This one may or may not be helpful:
https://stackoverflow.com/questions/38261359/why-does-string-split-with-a-regular-expression-that-contains-a-capturing-group

*/
