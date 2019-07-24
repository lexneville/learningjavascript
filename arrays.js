/*
//Array in square brackets seperated by commas
let favouriteSongs = [
  "Burial - Come Down To Us",
  "808 State - Pacific 909",
  "Innercity Life - Goldie"
];
//address individual array entry using position in list within square brackets

console.log(favouriteSongs);

favouriteSongs[2] = "Walk - Pantera"; //replaces the array item in the specified index position

console.log(favouriteSongs);
console.log(favouriteSongs.length);

favouriteSongs.push("Sir Psycho Sexy - Red Hot Chili Peppers"); //adds an item to the end of an array

console.log(favouriteSongs);

favouriteSongs.pop(); //Removes last item in array

console.log(favouriteSongs);


//Activity 1
let websites = ["Youtube", "Twitch", "Battlelog"];

console.log(websites);
websites.push("BBC News", "Reddit");
console.log(websites);
websites.pop();
console.log(websites);



//activity 2

let websites = ["Youtube", "Twitch", "Battlelog"];
console.log(websites);

websites.shift(); //Removes first item in an array
console.log(websites);

websites.unshift("Reddit", "Twitter"); //Adds items the beginning of the array. Array size will increase.
console.log(websites);

let social = websites.slice(0, 2); //Creates a new array with selected items from the selected array
//Original array remains unchanged.
console.log(websites);
console.log(social);

social.splice(0, "Facebook", "Instagram"); //Can add AND remove items from/to an array. Array will be altered.
console.log(social);

*/
