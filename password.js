// require inquirer
const inquirer = require("inquirer");
const rightLength = function(input) {
  if (input < 8 || input > 128) {
    throw "You need a longer password";
  }
  return true;
};

const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
const numerals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialChars = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "{",
  "|",
  "}",
  "~"
];

class makePassword {
  static generate(passLength, types) {
    let password = "";
    let charOptions = "";

    if (types.includes("Lowercase Letters")) {
      charOptions += lowerCase;
    }
    if (types.includes("Uppercase Letters")) {
      charOptions += upperCase;
    }
    if (types.includes("Numbers")) {
      charOptions += numerals;
    }
    if (types.includes("Symbols")) {
      charOptions += specialChars;
    }

    for (let i = 0; i < passLength; i++) {
      password += charOptions[Math.floor(Math.random() * charOptions.length)];
    }
    return password;
  }
}

inquirer
  .prompt([
    {
      type: "number",
      message: "Choose a length between 8 and 128.",
      name: "passLength",
      validate: rightLength
    },
    {
      type: "checkbox",
      message: "Check what you want included in the password.",
      choices: [
        {
          name: "Lowercase Letters"
        },
        {
          name: "Uppercase Letters"
        },
        {
          name: "Numbers"
        },
        {
          name: "Symbols"
        }
      ],
      name: "checkboxes"
    }
  ])
  .then(function(response) {
    let newPass = JSON.stringify(
      new makePassword(response.passLength, response.checkboxes)
    );

    console.log(`Your password is ${newPass}`);
  });
