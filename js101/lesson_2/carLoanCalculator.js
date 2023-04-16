// Wecome user to loan calculator
// Ask for loan amount. Make sure is valid amount. If not, ask user to retype.
// Ask for the annual interest rate.
// Ask for loan duration in years. Can take estimates.
// Compute and return the monthly payment.

let readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function getLoan() {

  prompt("First, what is the loan amount? ");
  let loanAmount = readline.question().trimStart(); 
  if (loanAmount[0] == '$') {   // Note: allow for users to input "$" if desired.
    loanAmount = loanAmount.slice(1, loanAmount.length - 1);
  }

  loanAmount = loanAmount.replaceAll(',', ''); // account for commas
  loanAmount = parseFloat(loanAmount.replaceAll(',', '')); // convert to Number type 
  while (Number.isNaN(loanAmount)) {
    prompt("It looks like you did not enter an input loan amount properly. Please try again.")
    loanAmount = parseFloat(readline.question());
  }

  // Verify with user the input is correct. 
  while (true) {
    prompt(`The loan amount you've specified is \$${loanAmount} dollars. Is this correct (y/n)?`);
    let response = readline.question();
    
    while (response.toLowerCase() !== 'y' && response.toLowerCase() !== 'n') {
      prompt("Hmm...that is not a valid response. Please select either 'y' or 'n' and hit enter.");
      response = readline.question();
    }

    if (response.toLowerCase() === 'n') {
      prompt("No worries. Let's restart the process.\n");
      return getLoan(); // prompts the user to restart the process. Recursive callback.
    } else {
      return loanAmount; 
    }
  }
}

function carLoanCalculator() {

  // LOAN AMOUNT
  loanAmount = getLoan();



}

prompt("Welcome to your personal car loan calculator.\n\n=> To calculate your monthly payment, we need you to answer a few questions. Here they are:\n");
carLoanCalculator();



