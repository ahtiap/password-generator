// Assignment Code
var generateBtn = document.querySelector("#generate");
// pools of different type of characters user can choose from
var charactersArray = "!@#$%^&*()".split("");
var upperLettersArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerLettersArray = "abcdefghijklmnopqrstuvwxyz".split("");
var numbersArray = "1234567890".split("");

//function returning a password as value and following the users criterias
function generatePassword() {
  // prompt the user to choose the length of the password
  var message = "please pick a length for the password";
  //call the function promptCheck I created to check user entry and return a valid value
  var passLength = promptCheck(passLength, message);
  //console.log(passLength);

  //make sure the user choses at least one type of characters to include
  while (!numbers && !upperLetters && !lowerLetters && !characters) {
    var numbers = confirm("Would you like to include numbers?");
    // console.log("Made a choice about NUMBERS.");
    var upperLetters = confirm("Would you like to include uppercase letters?");
    // console.log("Made a choice about UPPER LETTERS.");
    var lowerLetters = confirm("Would you like to include lowercase letters?");
    // console.log("Made a choice about LOWER LETTERS.");
    var characters = confirm("Would you like to include special characters?");
    if (!numbers && !upperLetters && !lowerLetters && !characters) {
      alert("you have to pick at least one criteria");
    }
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// function to check the user input
function promptCheck(numberInput, message) {
  //loop to make sure the user enters a valid value
  // boolean variable to run the loop with
  var isNumber = false;
  //start of the loop
  while (!isNumber) {
    // give the use option to pick a number
    numberInput = prompt(message);
    //check if user clicks on cancel
    if (numberInput == null) {
      //if he does ask him to enter a  value
      alert("please enter a value");
      //check if user enters a correct number
    } else if (isNaN(parseInt(numberInput))) {
      //if he doesnt ask him to enter a valid number
      alert("please enter a valid number");
      //   if both previous conditions are false then pass the value
    } else {
      numberInput = parseInt(numberInput);
      console.log(numberInput);
      isNumber = true;
    }
  }
  return numberInput;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
