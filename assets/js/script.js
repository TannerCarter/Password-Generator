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

function generatePassword() {
  var passwordLength = "7";
  //PasswordLength
  while (passwordLength < "8" && passwordLength > "128") {
    passwordLength = prompt(
      "How many characters, ranging from a minimum of 8 to 128, in your password would you like?"
    );
    console.log("Password Length is " + passwordLength);

    //Cancel
    if (passwordLength == null) break;

    if (!parseInt(passwordLength)) {
      passwordLength = "7";
      continue;
    }
  }
  //Character Types
  let prompts = [
    "Do you want any lowercase letters?",
    "Do you want any capital letters?",
    "Do you want any numeric characters?",
    "Do you want any special characters?",
  ];

  let responses = [];

  let stage = 0;

  while (stage < 4) {
    input = prompt(prompts[stage], "Yes/No or Y/N");
    switch (input) {
      case null:
        break;
      case "":
        continue;
      default:
        const valid = /(yes|no|y|n)/i.test(input);
        if (!valid) continue;
        responses[stage] = input;
        stage++;
    }
    if (stage === 4) {
      const _check = responses.filter((response) => /(yes|y)/i.test(response));

      if (_check.length === 0) {
        alert("You must select at least one character type");
        responses = [];
        stage = 0;
      }
    }
  }
}
