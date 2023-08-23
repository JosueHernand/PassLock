var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = parseInt(prompt("Enter the desired password length (between 8 and 128 characters):"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return "";
  }

  var useUppercase = confirm("Do you want to include uppercase letters?");
  var useLowercase = confirm("Do you want to include lowercase letters?");
  var useNumbers = confirm("Do you want to include numbers?");
  var useSpecialCharacters = confirm("Do you want to include special characters?");

}