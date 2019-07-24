/*
let coffeeIsGrinding = false;

const pressGrindBeans = () => {
  if (coffeeIsGrinding) {
    console.log("Stopping the grind");
    coffeeIsGrinding = false;
  } else {
    console.log("Grinding is about to begin");
    coffeeIsGrinding = true;
  }
};

pressGrindBeans();
*/

//Activity

const coffeeOrder = (size, drinkType) => {
  console.log(`Coffee Order: ${size} ${drinkType}`);
};

coffeeOrder("medium", "cappucino");
