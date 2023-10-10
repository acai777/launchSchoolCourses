function isValidNumber(num) {
  console.log(/^\d*(\.\d+)*$/.test(num));

}

// function isValidNumber(num) {
//   return /^\d*(\.\d+)*$/.test(num);
// }

isValidNumber("5")
isValidNumber("5.")
isValidNumber("5.0")
isValidNumber(".5")
isValidNumber("0.5")
isValidNumber("5a")
isValidNumber("a")
isValidNumber("")


console.log(operator);
if (!isValidNumber(firstNum) || !(isValidNumber(secondNum))) {
  h1.textContent = "Invalid attempt. Check inputs."
  return;
}




