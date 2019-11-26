const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;
let ninetyfive = 9 / 5;
fiftynine = 5 / 9;
let freezing = 32;
let bigNumbah = 273.15;
let dialogue = "";
let dialogue1 = ""; 
let temp = null; 
let finalTemp; 
console.log()

while (dialogue !== "k" && dialogue !== "f" && dialogue !== "c") {
dialogue = (readlineSync.question("Enter an origin scale: ")).toLowerCase();
}
while (destination !== "k" && destination !== "f" && destination !== "c") {
destination = (readlineSync.question("Enter a destination scale: ")).toLowerCase();
}
while (temp > MAX || temp < MIN || temp === null) {
temp = (readlineSync.question("Enter a temperature: "));
finalTemp = temp.toLocaleString("en", { minimumFractionDigits: 0, maximumFractionDigits: 1})
}


if (dialogue === "c") {
  if (dialogue1 = "f") {
temp = (temp * (ninetyfive)) + freezing
console.log(temp)
}


else if (dialogue1 = "k") {
temp = temp + bigNumbah
console.log(temp)
}


else if (dialogue === "f") {
if (dialogue1 = "c") {
temp = (temp - freezing) * (fiftynine)
console.log(temp)
} 
}

else if (dialogue1 = "k") {
temp = (temp - freezing) * (fiftynine) + bigNumbah
console.log(temp)
}

else if (dialogue === "k") {
if (dialogue1 = "c") {
temp = temp - bigNumbah
console.log(temp)
} 
}

else if (dialogue1 = "f") {
temp = (temp - bigNumbah) * (fiftynine) + freezing
console.log(temp)
}
}
