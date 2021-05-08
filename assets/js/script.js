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
  var passwordLength = 7;
  password = "";
  let _quit = false;
  //PasswordLength
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(
      "How many characters, ranging from a minimum of 8 to 128, in your password would you like?"
    );
    console.log("Password Length is " + passwordLength);

    //Cancel
    if (passwordLength == null) {
      _quit = true;
      break;
    }
    if (!parseInt(passwordLength)) {
      passwordLength = 7;
      continue;
    }
  }
  if (_quit) return;

  //Character Types Prompts
  let prompts = [
    "Do you want any lowercase letters?",
    "Do you want any capital letters?",
    "Do you want any numeric characters?",
    "Do you want any special characters?",
  ];
  //Character Types
  let charTypes = [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  ];

  let responses = [];

  let stage = 0;

  while (stage < 4) {
    input = prompt(prompts[stage], "Yes/No or Y/N");
    switch (input) {
      case null:
        _quit = true;
        break;
      case "":
        continue;
      default:
        const valid = /(yes|no|y|n)/i.test(input);
        if (!valid) continue;
        const _yes = /(yes|y)/i.test(input);
        responses[stage] = _yes;
        stage++;
    }
    if (_quit) break;

    if (stage === 4) {
      const _check = responses.filter((response) => response);

      if (_check.length === 0) {
        alert("You must select at least one character type");
        responses = [];
        stage = 0;
      }
    }
  }
  if (_quit) return;
  //Selecting index into character type array
  for (i = 0; i < passwordLength; i++) {
    let _rand = false;
    while (!responses[_rand]) {
      _rand = Math.floor(Math.random() * 4);
    }
    //Selecting on character from character type at random
    _typeIndex = Math.floor(Math.random() * charTypes[_rand].length);
    password += charTypes[_rand].charAt(_typeIndex);
  }
  console.log("Password is ${password}");

  return password;
}
