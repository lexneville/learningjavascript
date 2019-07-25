//Javascript Fundamentals - Functions
/*

let custAge = 70;
let priceChild = "£8";
let priceAdult = "£10.95";
let priceSenior = "£7.50";

if (custAge < 18) {
  console.log(
    `Welcome to our cinema, as you are under 18, the ticket price will be ${priceChild}`
  );
} else if (custAge > 59) {
  console.log(
    `Welcome to our cinema, as you are 60+, the ticket price will be ${priceSenior}`
  );
} else {
  console.log(
    `Welcome to our cinema, the ticket price for adults is ${priceAdult}`
  );
}

const pressGrindBeans = () => { //declare new function here
  console.log("grinding for 20 seconds");
};

pressGrindBeans();


let coffeeIsGrinding = false; // Declare new variable with a boolean value

const pressGrindBeans = () => { //Declare new function
  if (coffeeIsGrinding) {
    console.log("Stopping the grind");
    coffeeIsGrinding = false;
  } else {
    console.log("Grinding is about to begin");
    coffeeIsGrinding = true;
  }
};

pressGrindBeans();


//Activity

const coffeeOrder = (size, drinkType) => {
  console.log(`Coffee Order: ${size} ${drinkType}`);
};

coffeeOrder("medium", "cappucino");



let accnumber = 50449921;
const cashWithdrawal = (amount, accnum) => {
 console.log(`Withdrawing ${amount} from account ${accnum}`);
}
cashWithdrawal(300, accnumber);
cashWithdrawal(30, 50449921);
cashWithdrawal(200, 50447921); 


//Returning result/s of a function/operation

const addUp = (num1, num2) => {
  return num1 + num2;
};

addUp(5, 3); // Add the two numbers inputted as parameters and rteturn the result
console.log(addUp(2, 25)); //Add, return and the print the result.

const multiplyByNineFifths = (celsius) => {
  return celsius * (9 / 5);
};

const getFarenheit = (celsius) => {
  return multiplyByNineFifths(celsius) + 32;
};

console.log("The temperature is " + getFarenheit(20) + "°F");

//original celsius value is provided as a function parameter within the console.log instruction


//Function declarations and expressions

//Declaration 1

function square(number) {
  //function name then (parameters)
  return number * number;
}

console.log(square(5));


//Declaration 2

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5));


//Expression

const square = function(number) {
  return number * number;
};

square(5);

// in this example the function has not been given a name
// and the has been stored within the variable anonymously


//Arrow function syntax

const square = (number) => {
  return number * number;
};

square(5);

// => is shorthand for creating a function


//Activity - change code to arrow function syntax

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

//becomes

const factorial = n => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
console.log(factorial(5));

// Functions Activity 1

let orderCount = 0;
const takeOrder = (size, topping) => {
  orderCount++;
  console.log(
    `Order number ${orderCount} is for a ${size} pizza with ${topping}`
  );
};
takeOrder("12 inch", "pineapple");
takeOrder("9 inch", "pepperoni");

*/

//functions Activity 2

let accBalance = 500
let pin = 1234

const withdrawal = (pinNumber, withdrawalAmount) => {
  if (accBalance >= withdrawalAmount && pinNumber === pin) {
  console.log(`Thank you, please take your withdrawal of £${withdrawalAmount}.`)
  }
  else if (accBalance < withdrawalAmount && pinNumber === pin){
    console.log("Sorry, you do not have the necessary funds to withdraw that amount.")
  }
  else if (accBalance >= withdrawalAmount && pinNumber !== pin){
    console.log ("Sorry, wrong pin entered,please try again")
  };
withdrawal("1234", "400")
