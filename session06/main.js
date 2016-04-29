// More Function Exercises!

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smallest one to the console.
console.log("======================");
console.log("QUESTION 1: MINIMUM OF 2");
console.log("======================");
function minimum(a, b) {
  if(a < b) {
    return a;
    }
    else {
    return b;
    }
 }
var x = 5;
var y = 6;
console.log("Your numbers are " + x + " and " + y + "...The lower number is " + minimum(x,y));
var x = 259;
var y = -5;
console.log("Your numbers are " + x + " and " + y + "...The lower number is " + minimum(x,y));
var x = 90;
var y = 91;
console.log("Your numbers are " + x + " and " + y + "...The lower number is " + minimum(x,y));
var x = 5234;
var y = 623;
console.log("Your numbers are " + x + " and " + y + "...The lower number is " + minimum(x,y));


// 2. Create a new function called minimum3() to find the smallest of three numbers
console.log("======================");
console.log("QUESTION 2: MINIMUM OF 3");
console.log("======================");

function minimum3(a, b, c) {
  var winnerA = minimum(a, b);
  var winnerB = minimum(winnerA, c); 
  return winnerB;
}
var x = 5;
var y = 6;
var z = 4;
console.log("Your numbers are " + x + " and " + y + " and " + z + "...The lower number is " + minimum3(x,y,z));
var x = 52;
var y = 16;
var z = 67;
console.log("Your numbers are " + x + " and " + y + " and " + z + "...The lower number is " + minimum3(x,y,z));
var x = 235;
var y = 6403;
var z = -74;
console.log("Your numbers are " + x + " and " + y + " and " + z + "...The lower number is " + minimum3(x,y,z));


// 3. Declare a function called sum() that takes an array of numbers as an argument adds them.
//    i.e. sum([1, 2, 3, 4]) should return 10.

console.log("======================");
console.log("QUESTION 3: SUM");
console.log("======================");

function sum(arrayOfNumbers) {
  var mySum = 0;
  for(var i = 0; i < arrayOfNumbers.length; i++) {
    mySum = mySum + arrayOfNumbers[i];
  }
  return mySum;
}
  

var nums = [1,2,3,4,5,6];
console.log("Numbers: " + nums + "... The SUM is: " + sum(nums));
var nums = [10,20,30,40,50,60];
console.log("Numbers: " + nums + "... The SUM is: " + sum(nums));
var nums = [-1,2,-3,4,-5,6];
console.log("Numbers: " + nums + "... The SUM is: " + sum(nums));



// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.

console.log("======================");
console.log("QUESTION 4: MULTIPLY");
console.log("======================");


function multiply(arrayOfNumbers) {
  var myProd = arrayOfNumbers[0];
  for(var i = 1; i < arrayOfNumbers.length; i++) {
    myProd = myProd * arrayOfNumbers[i];
  }
  return myProd;
}
  
var nums = [1,2,3,4,5,6];
console.log("Numbers: " + nums + "... The PRODUCT is: " + multiply(nums));

var nums = [2,2,2];
console.log("Numbers: " + nums + "... The PRODUCT is: " + multiply(nums));

var nums = [21,-2,30,14,-5,60];
console.log("Numbers: " + nums + "... The PRODUCT is: " + multiply(nums));


// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.

console.log("======================");
console.log("QUESTION 5: FILTER WORDS BY LENGTH");
console.log("======================");

function filterSixPlus(arrayOfWords) {
  var newList = [];
  for (var i = 0 ; i < arrayOfWords.length ; i++) {
    var word = arrayOfWords[i];
    if (word.length >= 6) {
      newList.push(word);
    }
  }
  return newList;
}

var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];
console.log("ORIGINAL LIST: " + words + "\n\nLONG WORDS: " + filterSixPlus(words));

var words = ["frankenstein", "hippo", "colorado", "blanket", "beer"];
console.log("\nORIGINAL LIST: " + words + "\n\nLONG WORDS: " + filterSixPlus(words));

// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.

// 7. Adding to the code in #6, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Alert them with an error if they do not follow the rules.

console.log("======================");
console.log("QUESTION 6 and 7: CONVERTING TEMPERATURES");
console.log("======================");

// NOTE: I GOT RID OF ALL THE PROMPTS BECAUSE THEY WERE ANNOYING

function celsiusToFahrenheit(cText) {
  var c = parseFloat(cText);
  var f = (c * 1.8) + 32;
  return f;
}

function fahrenheitToCelsius(fText) {
  var f = parseFloat(fText);
  var c = (f - 32) / 1.8;
  return c;
}

function convertTemp(tText, conversionType) {
  console.log("convertTemp(" + tText + ", " + conversionType + ") ==> ");
  if (conversionType === 'C to F') {
    var result = celsiusToFahrenheit(tText);
    var message = tText + " degrees C is " + result + " degrees F" ;
  }
  else if (conversionType === 'F to C') {
    var result = fahrenheitToCelsius(tText);
    var message = tText + " degrees F is " + result + " degrees C";
  }
  else {
    message = "We seem to have a misunderstanding";
  }
  console.log(message);
}

convertTemp("32", "F to C");
convertTemp("0", "C to F");
convertTemp("212", "F to C");
convertTemp("-66", "F to ");


// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()

console.log("======================");
console.log("QUESTION 8: COUNT THE NUMBER OF B's");
console.log("======================");

function countBs(myString) { 
  var count = 0;
  for (var i = 0; i < myString.length; i++) {
    if (myString.charAt(i) === 'B') {
      count += 1;
    }
  }
  return count;
 }

var story = "The Big Bad bear known as BABBAR lived in a blue beehive called 'Bee Village'";
console.log("There are " + countBs(story) + " capital letter B's in this story: " + story + "\n\n");

var story = "Martian Mary moved to Minneapolis";
console.log("There are " + countBs(story) + " capital letter B's in this story: " + story + "\n\n");

// 9. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.

console.log("======================");
console.log("QUESTION 8: COUNT ANY CHARACTER");
console.log("======================");

function countChars(myString, myChar) { 
  var count = 0;
  for (var i = 0; i < myString.length; i++) {
    if (myString.charAt(i) === myChar) {
      count += 1;
    }
  }
  return count;
 }

var story = "Zoos animals in Zooville eat ziti every morning";
var lookFor = "Z";
console.log("There are " + countChars(story, lookFor) + " occurrences of the letter " + lookFor + " in this story: " + story + "\n\n");

var story = "One Mississippi, Two Mississippi, Three Mississippi, FOUR!";
var lookFor = "s";
console.log("There are " + countChars(story, lookFor) + " occurrences of the letter " + lookFor + " in this story: " + story + "\n\n");
 

// 10. Declare a function called ohZero that replaces all of the o's in a string with 0's.


console.log("======================");
console.log("QUESTION 10: REPLACE LETTER 'o' WITH NUMBER ZERO");
console.log("======================");

function ohZero(myString) {
  var newString = "";
  for (i = 0; i < myString.length ; i++) {
    if (myString.charAt(i) === "o") {
      newString += "0";
    }
    else {
      newString += myString.charAt(i);
    }
  }
return newString;
}

var story = "Root beer is a favorite beverage on the moon";
console.log("ORIGINAL STRING: " + story + "\n");
console.log("NEW STRING: " + ohZero(story) + "\n\n");

var story = "Scooby Dooby Doo, where are yoooooo?";
console.log("ORIGINAL STRING: " + story + "\n");
console.log("NEW STRING: " + ohZero(story) + "\n\n");

// 11. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

console.log("======================");
console.log("QUESTION 11: 9 BOTTLES OF BEER");
console.log("======================");

function singAboutBeer() {
 
  for (var i = 9; i > 0; i--) {
    console.log(i + " bottles of beer on the wall, " + i + " bottles of beer!");
    console.log("  Take one down, pass it around...");
    console.log("    " + (i - 1) + " bottles of beer on the wall! \n\n");
  }
  console.log("Time to call Uber for a ride home!");
}
singAboutBeer();

// 12. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message with the correct number.


console.log("======================");
console.log("QUESTION 12: GUESSING GAME");
console.log("======================");


function guessingGame() {
  computerNumber = (Math.floor(Math.random() * (100-1+1)+1)).toFixed(0);
  alert("Psst... just in case... the computer's number is " + computerNumber);
  userNumber = prompt("I'm thinking of a number between 1 and 100, inclusive. Guess what it is.");
  console.log("The computer has selected a number between 1 and 100, inclusive.");
  var tries = 1;
  while (userNumber != computerNumber) {
    var hiLow = (userNumber > computerNumber) ? "HIGH" : "LOW" ; 
    console.log("The user has guessed " + userNumber + " which is too " + hiLow);
    userNumber = prompt("No, you are too " + hiLow + "! Try again...");
    tries ++;
  }
  console.log("After " + tries + " tries, the user has guessed " + userNumber + " which is the correct number!");
  alert("Ding, Ding, Ding, we have a WINNER! My number was " + computerNumber + ", which you guessed after " + tries + " tries!");
}

guessingGame();

// 13. http://games.usvsth3m.com/javascript-under-pressure/
//     Have fun with these! Get as far as you can and record your progress and time. We'll try this again in a few weeks!












