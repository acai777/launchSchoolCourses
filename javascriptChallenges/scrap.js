function delayLog() {
  for (let delay = 1; delay <= 10; delay += 1) {
    setTimeout(() => console.log(delay), 1000);
  }
}

//delayLog();

/*
I believe this question tests our understanding of closure, and of how the event loop, in relation with the callback stack and task queue, work. 
We first define the function `delayLog` on lines 1-5, and then invoke it on line 7. Once invoked, JS will then call each 
`setTimeout` function. It will run through the entire for loop inside completely, finish executing each setTimeout invocation, and then pop `delayLog` off from the call stack (though, 
due to the asynchronous nature of `setTimeout` the callback function inside won't actually be invoked until after the callstack is empty and the timer 
finishes... more on that below). Note that, due to closure, because `delay` is declared via `let` here, it is block scope. This means that each 
callback function inside the `setTimeout` function, when invoked, will invoke a DIFFERENT `delay` each time. 

While the `setTimeout` function has finished running, what happens is each `setTimeout` call sets off a timer. That is, each `setTimeout` 
invocation sets a timer on an API (according to the video we watched on the event loop, on Node, is some C++ API), and the API will handle the asynchronous nature. This is because `setTimeout` is an API provided to us by an external C++ API. 
 
Once the timer finishes (which is dependent on the amount of time you told `setTimeout` to wait), the API will send the callback function to the task queue. Once your entire program finishes running (the call stack is empty), only then will the event loop grab the callback function from the task queue, pop it, and put it on the call stack to be invoked. The event loop basically looks at the call stack and the task queue, and will only move things from the task queue onto the call stack when the callstack is empty.

The event loop waits until the call stack is before before moving anything from the task queue to the call stack. why something like setTimeout(cb, 0) only invokes the cb function at the end of  your program once the other sequential stuff finishes 
*/

function startCounting() {
  let num = 1;
  let id = setInterval(() => {
    console.log(num);
    num += 1;
  }, num * 1000);

  return id; 
}

//startCounting();

function stopCounting(id) {
  clearInterval(id);
}

/*
Some terminology/notes from the event loop video:

@ 11:15 the callback function inside the setTimeout function would be called an asynchronous callback. It won't be invoked and processed synchronously. Instead, we delay the callback invocation until a later specified point. 

@11:50 event loop intro starts. I think you just have to focus from this point forward, and can get the right terminology down. 

We can think of setTimeout as an API provided to us via the browser/C++ api. 


Actually, just read the following link. Way more concise and helpful: 
https://gist.github.com/gokulkrishh/d493ecdcb0e2dbb6fe5ad3e678dd9f89#:~:text=Executing%20setTimeout%20actually%20calls%20out,like%20this%20available%20in%20node.&text=setTimeout%20is%20then%20finished%20executing,amount%20of%20time%20(1000ms).

@ 13:00 is pretty critical too. 
*/



