// Wecome user to loan calculator
// Ask for loan amount. Make sure is valid amount. If not, ask user to retype.
// Ask for the annual interest rate.
// Ask for loan duration in years. Can take estimates.
// Compute and return the monthly payment.

let readline = require('readline-sync');
function carLoanCalculator() {
  while (true) {
    // Loan amount
    let loanAmount = getLoan();

    // Annual percentage rate (APR)
    let annualRate = getAPR(); 
    let monthlyRate = (annualRate / 12) / 100; 

    // Loan duration
    let loanDuration = getDuration(); 

    // Compute the monthly mortgage.  
    let monthlyPaymt = loanAmount * (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanDuration))));

    console.log(`The monthly mortgage payment would be \$${monthlyPaymt.toFixed(2)}.`)

    // Ask to continue. If response is no, break.
    prompt("Would you like to make another calculation?");
    let response = readline.question().toLowerCase(); 
    while (response[0] !== 'n' && response[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      response = readline.question().toLowerCase();
    }

    if (response[0] === 'n') {
      break;
    }
  }
}

// Helper functions
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
  loanAmount = parseFloat(loanAmount); // convert to Number type 
  while (Number.isNaN(loanAmount)) { // validate is valid input
    prompt("It looks like you did not enter an input loan amount properly. Please try again.")
    loanAmount = parseFloat(readline.question());
  }

  // Verify with user the input is correct. 
  while (true) {
    prompt(`The loan amount you've specified is \$${loanAmount} dollars. Is this correct (y/n)?`);
    let response = readline.question().toLowerCase();
    
    while (response!== 'y' && response !== 'n') {
      prompt("Hmm...that is not a valid response. Please select either 'y' or 'n' and hit enter.");
      response = readline.question().toLowerCase();
    }

    if (response === 'n') {
      prompt("No worries. Let's restart the process.\n");
      return getLoan(); // prompts the user to restart the process. Recursive callback.
    } else {
      return loanAmount; 
    }
  }
}

function getAPR() {
  prompt("What is your annual perentage rate? Please enter a number between 0 and 100 (%).");
  let rate = readline.question(); 
  if (rate[rate.length-1] === '%') {
    rate = rate.slice(0,rate.length-1);
  }
  rate = parseFloat(rate); // convert to Number type 

  // Verify is a valid rate
  if (rate < 0 || rate >= 100 || Number.isNaN(rate)) {
    prompt("You need to enter a number between 0 and 100. Please try again.\n");
    return getAPR(); 

  }
  // Check with user the rate is what they inputted. 
  while (true) {
    prompt(`The annual percentage rate (APR) you've specified is ${rate}%. Is this correct (y/n)?`);
    let response = readline.question().toLowerCase();
    
    while (response !== 'y' && response !== 'n') {
      prompt("Hmm...that is not a valid response. Please select either 'y' or 'n' and hit enter.");
      response = readline.question().toLowerCase();
    }

    if (response === 'n') {
      prompt("Okay. Let's try again\n");
      return getAPR(); // prompts the user to restart the process. Recursive callback.
    } else {
      return rate; 
    }
  }
}

function getDuration() {
  prompt("What is the loan duration in months? Please enter an integer.");
  let loanDuration = readline.question(); 

  while ((Number.isNaN(parseInt(loanDuration)))) {
    prompt("Please enter a valid duration.");
    loanDuration = readline.question(); 
  }

  // Verify with user the input is correct. 
  while (true) {
    prompt(`The loan duration is: ${loanDuration} months. Is this correct (y/n)?`);
    let response = readline.question().toLowerCase();
    
    while (response !== 'y' && response!== 'n') {
      prompt("Hmm...that is not a valid response. Please select either 'y' or 'n' and hit enter.");
      response = readline.question().toLowerCase();
    }

    if (response === 'n') {
      prompt("No worries. Let's try again.\n");
      return getDuration(); // prompts the user to restart the process. Recursive callback.
    } else {
      return loanDuration; 
    }
  }
}

// Run the script 
prompt("Welcome to your personal car loan calculator.\n\n=> To calculate your monthly payment, we need you to answer a few questions. Here they are:\n");
carLoanCalculator();