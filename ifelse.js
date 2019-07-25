/*

let age = 18;
let country = "UK";

if (age > 17 && country == "UK") {
  console.log("You are old enough");
} else {
  console.log("I cannot serve you");
}

//challenge 1
let password = "1234567";
if (password.length < 8) {
  console.log("The password is too short");
} else {
  console.log(password);
}

//challenge 2

let num = 23;
if (num % 5 == 0 || num % 3 == 0) {
  console.log("This number is divisible by 3 or 5");
} else {
  console.log("This number is not divisible by 3 or 5");
}

//challenge 3

let numb = "15";
if (numb % 5 == 0 && numb % 3 == 0) {
  console.log("fizz buzz");
} else if (numb % 5 == 0) {
  console.log("buzz");
} else if (numb % 3 == 0) {
  console.log("fizz");
}

*/

//moodle challenge 1

let num = 10201;
let revNum = num.split("");
console.log(revNum);

/*

//moodle challenge 2

let time = "9.15";
let placeOfWork = "CodeNation";
let townOfHome = "Manchester";

if (time >= 8 && time < 9) {
  console.log(
    `It's ${time} O'Clock and I am on my way to work at ${placeOfWork}`
  );
} else if (time < 8) {
  console.log(`It's ${time} O'Clock and I am at home in ${townOfHome}`);
} else if (time > 9) {
  console.log(`It's ${time} O'Clock and I am at ${placeOfWork}`);
}


// moodle challenge 3

let string1 =
  "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

let aind = string1.lastIndexOf("a");
let eind = string1.lastIndexOf("e");
let iind = string1.lastIndexOf("i");
let oind = string1.lastIndexOf("o");
let uind = string1.lastIndexOf("u");
let Aind = string1.lastIndexOf("A");
let Eind = string1.lastIndexOf("E");
let Iind = string1.lastIndexOf("I");
let Oind = string1.lastIndexOf("O");
let Uind = string1.lastIndexOf("U");

let lastVowelIndex = Math.max(
  aind,
  eind,
  iind,
  oind,
  uind,
  Aind,
  Eind,
  Iind,
  Oind,
  Uind
);
let lastvcharacter = string1.charAt(lastVowelIndex);

console.log(
  `The index number of the last vowel in the string is ${lastVowelIndex} and the character is ${lastvcharacter}`
);

//Moodle challenge 4 

let word = "level";
let last = word.length - 1;

if (word.charAt(0) == word.charAt(last)) {
  console.log("True");
} else {
  console.log("False");
}

//Moodle challenge 6

let space1 = " ";
let space2 = "x";
let space3 = "x";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "0";
let space8 = " ";
let space9 = " ";

if (space1 == space2 && space2 == space3) {
  console.log("WINNER!!!");
} else {
  console.log("LOSER!!!");
}

console.log("      |       |      ");
console.log(`  ${space1}   |   ${space2}   |   ${space3}  `);
console.log("      |       |      ");
console.log("- - - - - - - - - - -");
console.log("      |       |      ");
console.log(`  ${space4}   |   ${space5}   |   ${space6}  `);
console.log("      |       |      ");
console.log("- - - - - - - - - - -");
console.log("      |       |      ");
console.log(`  ${space7}   |   ${space8}   |   ${space9}  `);
console.log("      |       |      ");



//Moodle challenge 5

let num1 = 3;
let num2 = 5;

if ((num1 + num2) % 2 == 0) {
  console.log(num1 + num2);
} 

else {
  console.log(num1 * num2);
}

*/
