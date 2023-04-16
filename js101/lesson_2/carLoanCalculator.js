// Dependencies
let readline = require('readline-sync');

// Main calculator function
function carLoanCalculator() {
  while (true) {
    let loanAmount = getLoan();
    let annualRate = getAPR();
    let monthlyRate = (annualRate / 12) / 100;
    let loanDuration = getDuration();
    let monthlyPaymt;

    if (monthlyRate === 0) { // edge case for 0 interest rate.
      monthlyPaymt = loanAmount / loanDuration;
    } else {
      monthlyPaymt = loanAmount *
        (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanDuration))));
    }
    console.log(`The monthly mortgage payment would be ${monthlyPaymt.toFixed(2)} dollars.`);

    prompt("Would you like to make another calculation?"); // Ask to continue. If response is no, break.
    let response = readline.question().toLowerCase();
    while (response[0] !== 'n' && response[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      response = readline.question().toLowerCase();
    }
    if (response[0] === 'n') break;
  }
}

// Helper functions
function prompt(message) {
  console.log(`=> ${message}`);
}

function getLoan() {
  prompt("First, what is the loan amount? ");
  let loanAmount = parseFloat(readline.question().trimStart().replaceAll(',', '').replaceAll('$', ''));
  while (Number.isNaN(loanAmount)) {
    prompt("It looks like you did not enter an input loan amount properly. Please try again.");
    loanAmount = parseFloat(readline.question().trimStart().replaceAll(',', '').replaceAll('$', ''));
  }

  while (true) {  // Verify with user the input is correct.
    prompt(`The loan amount you've specified is ${loanAmount} dollars. Is this correct (y/n)?`);
    let response = readline.question().toLowerCase();

    while (response !== 'y' && response !== 'n') {
      prompt("Hmm...that is not a valid response. Please select either 'y' or 'n' and hit enter.");
      response = readline.question().toLowerCase();
    }
    if (response === 'n') {
      return getLoan(); // prompts the user to restart the process. Recursive callback.
    }
    return loanAmount;
  }
}

function getAPR() {
  prompt("What is your annual perentage rate? Please enter a number between 0 and 100 (%).");
  let rate = parseFloat(readline.question().replaceAll('%', ''));
  if (rate < 0 || rate >= 100 || Number.isNaN(rate)) {   // Verify is a valid rate
    prompt("You need to enter a number between 0 and 100. Please try again.\n");
    return getAPR();
  }

  while (true) { // Check with user the rate is what they inputted.
    prompt(`The annual percentage rate (APR) you've specified is ${rate}%. Is this correct (y/n)?`);
    let response = readline.question().toLowerCase();

    while (response !== 'y' && response !== 'n') {
      prompt("Hmm...that is not a valid response. Please select either 'y' or 'n' and hit enter.");
      response = readline.question().toLowerCase();
    }

    if (response === 'n') {
      return getAPR(); // prompts the user to restart the process. Recursive callback.
    }
    return rate;
  }
}

function getDuration() {
  prompt("What is the loan duration in months? Please enter an integer.");
  let loanDuration = readline.question();
  while ((Number.isNaN(parseInt(loanDuration, 10)))) {
    prompt("Please enter a valid duration.");
    loanDuration = readline.question();
  }

  while (true) { // Verify with user the input is correct.
    prompt(`The loan duration is: ${loanDuration} months. Is this correct (y/n)?`);
    let response = readline.question().toLowerCase();

    while (response !== 'y' && response !== 'n') {
      prompt("Hmm...that is not a valid response. Please select either 'y' or 'n' and hit enter.");
      response = readline.question().toLowerCase();
    }

    if (response === 'n') {
      return getDuration(); // prompts the user to restart the process. Recursive callback.
    }
    return loanDuration;
  }
}

// Running the script
prompt("Welcome to your personal car loan calculator.\n\n=> To calculate your monthly payment, we need you to answer a few questions. Here they are:\n");
carLoanCalculator();