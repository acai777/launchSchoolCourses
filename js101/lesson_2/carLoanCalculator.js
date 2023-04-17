////////////////
// Dependencies
////////////////
let readline = require('readline-sync');

////////////////
// Main calculator function
////////////////
function carLoanCalculator() {
  while (true) {
    let loanAmount = getLoan();
    let annualRate = getAPR();
    let monthlyRate = (annualRate / 12) / 100;
    let loanDuration = getDuration();
    let monthlyPaymt;

    monthlyPaymt = calcMonthlyPaymt(loanAmount, monthlyRate, loanDuration)
    console.log(`The monthly mortgage payment would be ${monthlyPaymt.toFixed(2)} dollars.`);

    let again = playAgain(); 
    if (!again) {
      console.clear()
      console.log('Thank you for using our calculator!');
      break;
    }
    console.clear();
  } 
}

////////////////
// Helper functions
////////////////
function prompt(message) {
  console.log(`=> ${message}`);
}

function formatLoanDuration(input) {
  const strippedInput = input.trimStart().replaceAll(',', '').replaceAll('$', '');
  return parseFloat(strippedInput);
}

function valid(amount) { // will work for loan amount and duration. Not for interest (allow 0 interest)
  const isAPosNumber = (!Number.isNaN(amount)) && amount > 0;
  return isAPosNumber;
}

function getLoan() {
  prompt("First, what is the loan amount? ");
  let loanAmount = formatLoanDuration(readline.question());
  while (!valid(loanAmount)) {
    prompt("It looks like you did not enter an input loan amount properly. Please try again.");
    loanAmount = formatLoanDuration(readline.question());
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
  prompt("What is your annual percentage rate? Please enter a number between 0 and 100 (%).");
  let rate = parseFloat(readline.question().replaceAll('%', ''));
  while (rate < 0 || rate >= 100 || Number.isNaN(rate)) {   // Verify is a valid rate
    prompt("You need to enter a number between 0 and 100. Please try again.");
    rate = parseFloat(readline.question().replaceAll('%', ''));
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
  let loanDuration = formatLoanDuration(readline.question());
  while (!valid(loanDuration)) {
    prompt("Please enter a valid duration.");
    loanDuration = formatLoanDuration(readline.question());
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

function calcMonthlyPaymt(loanAmount, monthlyRate, loanDuration) {
  let monthlyPaymt;
  if (monthlyRate === 0) { // edge case for 0 interest rate.
    monthlyPaymt = loanAmount / loanDuration;
  } else {
    monthlyPaymt = loanAmount *
      (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanDuration))));
  }
  return monthlyPaymt; 
}

function playAgain() {
  prompt("Would you like to make another calculation? (y/n)"); // Ask to continue. If response is no, break.
  let response = readline.question().toLowerCase();
  while (response !== 'n' && response !== 'y') {
    prompt('Please enter "y" or "n".');
    response = readline.question().toLowerCase();
  }

  if (response === 'y') {
    return true; 
  }
  return false; 
}

////////////////
// Running the script
////////////////
console.clear(); 
prompt("Welcome to your personal car loan calculator.\n\n=> To calculate your monthly payment, we need you to answer a few questions. Here they are:\n");
carLoanCalculator();