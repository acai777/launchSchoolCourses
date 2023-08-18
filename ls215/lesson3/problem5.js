/*
725pm - 

Goal: want to implement encoding AND decoding for rail fence cipher. So two problems. Let's just start off with the first problem, encoding. 

Input:
1) a number indicating "rails" i.e., the number of rows. 
2) the input string itself. Seem to ignore white space and just insert the letters. 
Output: A string...? We don't actually want a string of the zig zag format. Just a string of the reorganized letters, without spaces, it seems. 

Questions:
-For the encoding problem, can we assume the input string only contains letters and white space? Or can we expect other potential input characters?
-Can the rows/rails be as wide as possible? By "wide", I mean how long the rail extends for. I assume it can be as wide as possible...
-How to figure out how long the rails need to be? Honestly, seems like might not know until the end. Prioritize getting the zig zag done. 
function encode(railCount, msg) 
function encode(3, "WE ARE DISCOVERED FLEE AT ONCE")

"WE ARE DISCOVERED FLEE AT ONCE"
"WEAREDISCOVEREDFLEEATONCE"

rail1 W       E          T       E
rail2   E   R      . . .   O   C
rail3     A                  N

Need to keep TWO positions in mind:
  1) Which rail to be inserting the next letter
  2) At what position to be inserting the next rail. 
    - How might we want to envision knowing how to position the next rail? 
      - Maybe using the last most rail's length as the indicator? For example, if know I inserted the last letter on rail3 on length/position 2, know that the next letter in the next rail must be inserted on length/position 3. 

Also, how do you which is the next rail? Can have a helper function `determineNextRail(currRailNumber, railCount)`

THe last rail you worked on, the length of that rail, is the length of the entire rail (doesn't really matter, but yeah).

Once you have each rail filled out completely with the letters and empty spaces denoted by the `.`, can use a helper method to grab all the letters from that row. Each rows letters, when concatted together from the first rail to the last rail, forms the encrypted message. 

Data Structure/Algorithm/Process: 
-For the input string, can keep it as a string. But clean it. Replace all non-letters with empty space. 
-Initialize the rails. Have a separate variable for each rail. Use a for loop to initialize and declare each rail. Use the provided `railCount` input to determine how many rails. Can use either an array DS or have rails as strings. Will use as arrays, to start. Wait...to encode, you don't even really need to care about the shape. Just need to keep in mind the next rail, and which to insert into. 


======================================== 
========================================
========================================
========================================
[WECRLTE]
[ERDSOEEFEAOC]    <==========>  "WECRLTEERDSOEEFEAOCAIVDEN"
[AIVDEN]

Yeah, though we have the illustration, don't really care and can just work arrays and just keep track of which array to insert the letter into, and which array to go to next. 


let zigDown = true;
determineNextArray(currRailCount, zigDown)

`encode(railCount, msg)`
encode(2, 'hello') = 'hloel'

[hlo]
[el]

To decode
`decode(railCount, encryptedMsg)`
`decode(2, 'hloel')`

[hlo]
[el]

Decoding is harder with this initial approach, because you need to know how many of the encrypted msg to leave on the first rail, how many on the second, and so on. 


OK, scratch the easier approach you just thought of. Your easier approach works for encoding, but does not for decoding. As such, will need to keep track of the sparse elements too.... yeah. 


Well.... maybe can keep the easier encode approach. And, for the decode approach, need to generate the zig zag pattern. Can reuse helper functions in the encode function. Envision getting something like 

rail 1 = ['X', '_', '_', '_', 'X',  ...] where the 'X' needs to be filled in. 
rail 2 = ['_', 'X', '_', 'X', '_', ...]
rail 3 = ['_', '_', 'X', '_', '_', ...] 

Once have this, can fill in the `X`'s with the encrypted message from top to bottom, left to right (from first rail to second rail and so on). Once you do this, can grab the decrypted msg and return as a string...! Yes, I think that works. 


=============================
=============================
=============================
=============================
*/


/*
General things you've learned from struggling with the problem from above:

1) Make sure to really understand what is asked of you before you even go into the test cases or trying to work with the test cases. Above, you first started off not thinking you can just focus on the `encode` function and forget the `decode` part. You started working on the `encode` function etc. You have a process, seems to work. However, once you move on to the `decode` function, because you didn't account for it, your original method for the `encode` function might not be the best. This wasted some time. Be sure to spend time understanding what is asked of you, and try to consider both together, before you move on to the test cases. Actually, I mean, I think you could've solved both on your own eventually... but yeah. Maybe not in a timed interview. 

2) Also, something you realized while watching the video, is that you CAN'T initialize new variables for each rail like you can in Stata (lol). You cannot do that. You basically cannot have a variable amount that can vary for each function invocation. As such, have an array of arrays, where each nested array is a rail/row. That can work. 
*/
