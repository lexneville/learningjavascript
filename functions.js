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

*/

const multiplyByNineFifths = celsius => {
  return celsius * (9 / 5);
};

const getFarenheit = celsius => {
  return multiplyByNineFifths(celsius) + 32;
};

console.log("The temperature is " + getFarenheit(20) + "°F");

//
