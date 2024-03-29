// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const passwordLength = prompt("Enter desired password length:");
  const convertInt = parseInt(passwordLength);

  // Check if length entered is a valid number

  if (isNaN(convertInt)) {
    alert("Invalid input. Please enter a valid number.");
    return "";
  }

  // Check password length

  if (convertInt < 8 || convertInt > 128) {
    alert("Password length must be between 8 and 128.");
    return "";
  }
  // Define options for password generation

  const lowerAbc = "qwertyuiopasdfghjklzxcvbnm".split("").sort(); 
  const upperAbc = "QWERTYUIOPASDFGHJKLZXCVBNM".split("").sort();
  const num = "1234567890".split("").sort();
  const specialChar = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~\\".split("");

  const lowerAbcPass = confirm("Would you like to include lowercase letters?");
  const upperAbcPass = confirm("Would you like to include uppercase letters?");
  const numPass = confirm("Would you like to include numbers?");
  const specialCharPass = confirm("Would you like to include special characters?");

  // If confirmed, the password criteria will be added to the character set array

  let charSet = [];

  if (lowerAbcPass) {
    charSet = charSet.concat(lowerAbc);
  }

  if (upperAbcPass) {
    charSet = charSet.concat(upperAbc);
  }

  if (numPass) {
    charSet = charSet.concat(num);
  }

  if (specialCharPass) {
    charSet = charSet.concat(specialChar);
  }

  // Use character set array to randomize password

  let password = "";

  for (let i = 0; i < convertInt; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password = password + charSet[randomIndex];
  }
  return password;
}

// Write password to the #password input

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
