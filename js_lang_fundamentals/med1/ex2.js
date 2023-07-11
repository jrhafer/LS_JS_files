let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// - the above code will loop infinitely, logging 0 to the screen
// - i is never incremented and the condition for the while 
//   statement evaluates to true on the first iteration 
// - the expression in the else clause is never executed, so the 
//   variable i is never incremented, therefor i never increments 
//   above zero - the condition needed to terminate the while loop
//   never evaluates to true





