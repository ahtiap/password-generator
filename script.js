// Assignment Code
var generateBtn = document.querySelector("#generate");
// pools of different type of characters user can choose from
var charactersArray = "!@#$%^&*()".split("");
var upperLettersArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerLettersArray = "abcdefghijklmnopqrstuvwxyz".split("");
var numbersArray = "1234567890".split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//function returning a password as value and following the users criterias
function generatePassword() {
  //variable to store the new password
  var passwordNew = [];
  // big pool will contain all the pools the user chose to get characters from
  var bigPool = [];
  

  
 
  // get the length chose by the user through the number input
  // variable to store the length the user chose
  var passLength = document.getElementById("length").value;
  //console.log(passLength);
  // get checkbox status from the DOM
  var numbers = document.getElementById("num").checked;
  var upCase = document.getElementById("upCase").checked;
  var lowCase = document.getElementById("lowCase").checked;
  var spcChar = document.getElementById("spcChar").checked;

  /*make sure the user has checked at least one box and the length
  he chose is within the range to generate a password*/
  if ((numbers || upCase || lowCase || spcChar) && (passLength>=8 && passLength<=128)) {
  
    // if selected make sure at least one number is in the mix
    if (numbers) {
      passwordNew.push(
        numbersArray[Math.floor(Math.random() * numbersArray.length)]
      );
      //update password length
      passLength--;
      // add the numbers to the big pool
      bigPool = bigPool.concat(numbersArray);
      //console.log(bigPool);
    }
    // if selected make sure at least one uppercase letter is in the mix
    if (upCase) {
      passwordNew.push(
        upperLettersArray[Math.floor(Math.random() * upperLettersArray.length)]
      );
      //update password length
      passLength--;
      // add the uppercase letters to the big pool
      bigPool = bigPool.concat(upperLettersArray);
      //console.log(bigPool);
    }
    // if selected make sure at least one lowercase is in the mix
    if (lowCase) {
      passwordNew.push(
        lowerLettersArray[Math.floor(Math.random() * lowerLettersArray.length)]
      );
      //update password length
      passLength--;
      // add the lower letters  to the big pool
      bigPool = bigPool.concat(lowerLettersArray);
      //console.log(bigPool);
    }
    // if selected make sure at least one special character is in the mix
    if (spcChar) {
      passwordNew.push(
        charactersArray[Math.floor(Math.random() * charactersArray.length)]
      );
      //update password length
      passLength--;
      // add the special characters  to the big pool
      bigPool = bigPool.concat(charactersArray);
      //console.log(bigPool);
    }
    // a pool to fill the rest of the password
    //console.log(bigPool);
    for (let i = 0; i < passLength; i++) {
      // add a random character at each iteration
      passwordNew.push(bigPool[Math.floor(Math.random() * bigPool.length)]);
      //console.log(passLength);
    }
    //return password value
    return passwordNew.join("");
  }
  //otherwise let them now in the text box
  else if (passLength<8 || passLength>128) {
    return "The Password Should be a minimum of 8 characters\n and a maximum of 128";
  }
  else {
    return "You have to choose at least one criteria";
  }
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
      //console.log(numberInput);
      isNumber = true;
    }
  }
  return numberInput;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
