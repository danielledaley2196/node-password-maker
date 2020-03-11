// require inquirer
const inquirer = require("inquirer");
const rightLength = function(input) {
  if (input < 8 || input > 128) {
    throw "You need a longer password";
  }
  return true;
};
//give option of what's in the pass word with inquirer prompts
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
  }
}

inquirer
  .prompt([
    {
      type: "number",
      message: "Choose a length between 8 and 128.",
      name: "length",
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
    console.log(response);
    //display using console.table based on what they chose;
  });
//diplay using console.table
// Password Generator Class that is responsible for concatenating the character options together.
//   Password Class is instantiated when a new password is created.
//  App Class that handles running the actual application that will utilize Inquirer and the other classes to create the password.
