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
  var passLength;
  alert(
    "password Length should be no less than 8 characters and no more than 128 characters."
  );
  passLength = parseInt(
    prompt("How many characters would you like your password to be?")
  );
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
