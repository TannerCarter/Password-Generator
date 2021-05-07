


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var passwordLength = "7";
  //PasswordLength
  while(passwordLength < "8" && passwordLength > "128") {
    passwordLength = prompt("How many characters, ranging from a minimum of 8 to 128, in your password would you like?");
    console.log("Password Length is " + passwordLength);
    
  //Cancel
  if (passwordLength == null) 
  break;

  if(!parseInt(passwordLength)) {
    passwordLength = "7";
    continue; 
    }  
  }
}
