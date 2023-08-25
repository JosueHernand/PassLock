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

  if (!useUppercase && !useLowercase && !useNumbers && !useSpecialCharacters) {
    alert("You must select at least one criteria.");
    return "";
  }

  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  var allChars = "";
  if (useUppercase) allChars += uppercaseChars;
  if (useLowercase) allChars += lowercaseChars;
  if (useNumbers) allChars += numberChars;
  if (useSpecialCharacters) allChars += specialChars;

  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    generatedPassword += allChars[randomIndex];
  }

  return generatedPassword;
}