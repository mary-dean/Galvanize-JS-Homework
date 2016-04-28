// JavaScript Function Exercises

// 1. Define a function called "divideByTwo". It should accept one parameter called "number".
//    The function should divide the number by two and output the answer.
console.log("*******************")
console.log("QUESTION 1")
console.log("*******************")
var divideByTwo = function(number) {
  return number / 2;
}
    console.log("26 divided by 2 is " + divideByTwo(26));
    console.log("37 divided by 2 is " + divideByTwo(37));

// 2. Define a function called "greeting". It should accept two parameters, which will be names.
//    The function should output the a greeting to both people.
console.log("*******************")
console.log("QUESTION 2")
console.log("*******************")

var greeting = function(name1, name2) {
  console.log("Howdy, " + name1 + "! Welcome " + name2);
}

greeting("Frank", "Mark");
greeting("Bella", "Thomas");

// 3. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month, but the price keeps changing.
//    Write a function that takes the price per unit and calculates the total for you each month.
console.log("*******************")
console.log("QUESTION 3")
console.log("*******************")

var totalPrice = function(unitPrice) {
  return unitPrice * 6;
}
var price = 16;
console.log("The price per unit is $" + price + " so your total will be $" + totalPrice(price));

var price = 20.73;
console.log("The price per unit is $" + price + " so your total will be $" + totalPrice(price));

// 4. Write a function that accepts the following array and separates the people into two teams.
//    No names next to eachother in the array should be on the same team.
console.log("*******************");
console.log("QUESTION 4");
console.log("*******************");

teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]

var newTeam = function(allPlayers, teamNumber) {
  var list = [];
  for (i = teamNumber - 1; i < allPlayers.length; i += 2) {
    list.push(allPlayers[i]);
  }
  return list;
}

console.log("Team 1 will consist of: " + newTeam(teammates, 1));
console.log("Team 2 will consist of: " + newTeam(teammates, 2));


// 5. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
//    Call the function inside of a conditional statement that prints one statement if the value is even or another statement if the value is odd.
//    In pseudocode:
//                  defining my function here(parameter)
//                      returns a value that divides that parameter by 4
//
//                  if (calling the function with parameter divided by 2 is even)
//                      print out a statement saying the number is even
//                  else
//                      print out a statement saying the number is odd
console.log("*******************");
console.log("QUESTION 5")
console.log("*******************");

var quarter = function(number) {
  return number / 4 ;
}

var value = 6;
var qvalue = quarter(value);
console.log("The result of " + value + "/4 is " + qvalue + ", which is " + ((qvalue % 2 === 0) ? "EVEN" : "ODD" ));

var value = 27;
var qvalue = quarter(value);
console.log("The result of " + value + "/4 is " + qvalue + ", which is " + ((qvalue % 2 === 0) ? "EVEN" : "ODD" ));

var value = 16;
var qvalue = quarter(value);
console.log("The result of " + value + "/4 is " + qvalue + ", which is " + ((qvalue % 2 === 0) ? "EVEN" : "ODD" ));


// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

console.log("*******************");
console.log("QUESTION 6")
console.log("*******************");

var area = function(x,y) {
  return x * y;
}

var perimeter = function(x,y) {
  return (2 * x) + (2 * y);
}

var l = 5;
var w = 12;
console.log("For a rectangle of dimensions " + l + "x" + w + ", the AREA is " + area(l, w) + " and the PERIMETER is " + perimeter(l, w));

var l = 20;
var w = 5.5;
console.log("For a rectangle of dimensions " + l + "x" + w + ", the AREA is " + area(l, w) + " and the PERIMETER is " + perimeter(l, w));

var l = .75;
var w = 1.8;
console.log("For a rectangle of dimensions " + l + "x" + w + ", the AREA is " + area(l, w) + " and the PERIMETER is " + perimeter(l, w));


// 7. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, print a statement to the console about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.
console.log("*******************");
console.log("QUESTION 7")
console.log("*******************");

var sleepings = function(hours) {
  if (hours > 8) {
    console.log(hours + " hours of sleep! That's terrific!");
  }
  else if(hours < 8) {
    console.log("You really need to get more sleep! " + hours + " hours is not enough.");
  }
  else {
    console.log(hours + " hours is just the right amount of sleep!");
  }
}

sleepings(12);
sleepings(6.5);
sleepings(8);

// 8. Prompt a user to enter a six digit number. Write a function that reverses the number.
//    (Hint, you will have to turn the integer into a string before you can reverse it.)

// 9. Within the fuction you wrote in #8, write a conditional statement that checks to ensure the user entered a six digit integer.
//    If they have not entered a six digit integer, give them a message about being a failure


console.log("*******************");
console.log("QUESTION 8 and 9")
console.log("*******************");

var reverseString = function(numAsString) {
  console.log("You entered " + numAsString);
  L = numAsString.length;
  message = "";
  if (L !== 6) {
    message = "Sorry, this function only works with 6 digit numbers";
    console.log(message);
    return(alert(message));
  }
  var newString = "";
  //START AT THE END AND WORK FORWARD
  for(i = L - 1 ; i >= 0 ; i--) {
    newString += numAsString[i];
  }
  message = "Ta da! I reversed your number. Now it is " + newString + ".";
  console.log(message);
  return(alert(message));
}

var n = prompt("Please enter a 6-digit number.", "123456");
reverseString(n);


// 10. You've finally gotten around to counting the change in your piggy bank. Write a function that accepts four parameters (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"

console.log("*******************");
console.log("QUESTION 10")
console.log("*******************");

var countMyMoney = function(quarters, dimes, nickels, pennies) {
qValue = quarters * 25;
dValue = dimes * 10;
nValue = nickels * 5;
totalValue = (qValue + dValue + nValue + pennies) / 100;
return totalValue.toFixed(2);
}
console.log("Suzy has 55 quarters, 22 dimes, 3 nickels, and 252 pennies. Her total savings: $" + countMyMoney(55, 22, 3, 252) + ".");
console.log("Darth has 16 quarters, 125 dimes, 98 nickels, and 852 pennies. His total savings: $" + countMyMoney(16, 125, 98, 852) + ".");


// 11. Develop a function that determines a person's age by prompting them for their birth year.
console.log("*******************");
console.log("QUESTION 11")
console.log("*******************");

var howOldAmI = function() {
  var yearOfBirth = prompt("What year were you born?", "1964");
  var today = new Date();
  var currentYear = today.getFullYear();
  var approxAge = currentYear - yearOfBirth;
  var message = "If you were born in " + yearOfBirth + " then you are approximately " + approxAge + " years old.";
  console.log(message);
  alert(message);
}
howOldAmI();

// 12. Write a function that takes a year and reports whether or not it is a leap year.
//     Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is.  1900 is not a leapyear, but 2000 is
console.log("*******************");
console.log("QUESTION 12")
console.log("*******************");

var isLeapYear = function(year) {
  isDivisibleBy4 = year % 4 === 0 ? true : false;
  isDivisibleBy100 = year % 100 === 0 ? true : false;
  isDivisibleBy400 = year % 400 === 0 ? true : false; 
  if (isDivisibleBy4 || (isDivisibleBy100 && isDivisibleBy400)) {
    return(true);
    }
    else {
    return(false);
    }
}
console.log("LEAP YEARS OF THE PAST CENTURY");
for (y = 1916 ; y <= 2016 ; y++) {
  if (isLeapYear(y)){
  console.log(y);
  }
}

// 13. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number
//        If the phone number is more than 11 digits assume that it is a bad number

console.log("*******************");
console.log("QUESTION 13")
console.log("*******************");

var prettyPhoneNumber = function(p) {
  //I wanted to use splice but it said tenDigitNum.splice(0,0,"test") is not a function
  var newNum = 
    "(" + p[0] + p[1] + p[2] + ") " + p[3] + p[4] + p[5] + "-" + p[6] + p[7] + p[8] + p[9];
  return newNum;
}


var cleanUpPhoneNumber = function(phoneNum) {
  console.log("You entered: " + phoneNum);
  var message = "";
  var L = phoneNum.length;
  var newPhoneNum = "";
    
  if (L < 10) {
    return(console.log("That is too short to be a real phone number")) ; 
   }
   
   if (L === 11 && phoneNum[0] === "1") {
    newPhoneNum = phoneNum.slice(1);
    return(console.log("This is nicer: " + prettyPhoneNumber(newPhoneNum)+ "\n\n")) ; 
    }
    
   if (L >= 11) {
    return(console.log("That number is too long for me to handle.\n\n")); 
   }
  
  else {
  return(console.log("This is nicer: " + prettyPhoneNumber(phoneNum) + "\n\n"));
  }
}

cleanUpPhoneNumber("6177768944");
cleanUpPhoneNumber("19702214433");
cleanUpPhoneNumber("912345678910234");
cleanUpPhoneNumber("123");


// 14. Create a function that determines whether a parameter is a number or not (Hint: google "isNan")
//     Iterate over the elements in the following array to determine if each is a number.
console.log("*******************");
console.log("QUESTION 14")
console.log("*******************");

arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]
a = arrayOfAllTheThings;
console.log("Original array: " + a);
for (var i = 0; i < a.length ; i++) {
  x = a[i];
  console.log(x + " is a " + typeof(x));
}

// 15. Create a die rolling function that accepts two parameters (the two six-sided dice) and outputs an array of the two values rolled.
// But what would be the inputs? Are the dice pre-rolled? 

// 16. Create another fuction called "whichSide". It will accept the array from above as it's only parameter.
//     This function will mimic a Monopoly board. Start playerOne at the Go space (0) and add the two values from your die array to determine
//     how many spaces the player will move. Log to the console which side of the board the player is on.
//     Hint: each side has 11 spaces. You can call the sides of the board: north, east, south, west or top, right, bottom, left.

// 17. Using the game above, use the same function(s) and add additional code to determine if the player is on a corner spot.
//     Log to the console which corner the player is located.

console.log("*******************");
console.log("QUESTION 15 and 16 -- ROLLING DICE GAME")
console.log("*******************");

// FUNCTIONS

var roll2Dice = function() {
  var d1 = Math.floor((Math.random() * 6) + 1);
  var d2 = Math.floor((Math.random() * 6) + 1);
  var total = d1 + d2;
  return([d1, d2, total]);
}

var whichSide = function(currentPosition) {
// attempting to use SETS
var left = new Set([1,2,3,4,5,6,7,8,9,10,11,45,46,47,48,49,50,51,52,53,54,55]);
var top = new Set([12,13,14,15,16,17,18,19,20,21,22]);
var right = new Set([23,24,25,26,27,28,29,30,31,32,33]);
var bottom = new Set([34,35,36,37,38,39,40,41,42,43,44]);

if (left.has(currentPosition)) {currentSide = "left"};
if (top.has(currentPosition)) {currentSide = "top"};
if (right.has(currentPosition)) {currentSide = "right"};
if (bottom.has(currentPosition)) {currentSide = "bottom"};

return currentSide;
}

var isCorner = function(currentPosition) {
var corners = new Set([11, 22, 33,44]);
if (corners.has(currentPosition)) {
  return true
}
else {
  return false
}
}



//Draw my board
console.log("");
console.log("      >>>   MONOPOLY BOARD   <<<");
console.log("   12 13 14 15 16 17 18 19 20 21 22");
var z = 12;
for (var i = 11; i > 9 ; i--) {
console.log('  |' + '-- '.repeat(10) + '--|');
console.log(i + '| ' + ' | '.repeat(11) + (i + z));
z += 2;
}
var y = 16;
for (var i = 9; i > 0 ; i--) {
console.log('  |' + '-- '.repeat(10) + '--|');
console.log(i + ' | ' + ' | '.repeat(11) + (i + y));
y += 2;
}
console.log('  |-- ' + '-- '.repeat(9) + '--|');
console.log("   44 43 42 41 40 39 38 37 36 35 34");
console.log("");

// START GAME
var yourPosition = 1;
var gameOver = false;
console.log("You are starting in position " + yourPosition);

// GIANT DO WHILE LOOP SHOULD STOP WHEN PAST SPOT 44
do {
  
var roll1 = roll2Dice();
yourPosition = yourPosition + roll1[2];
if (yourPosition >= 44) {gameOver = true};

var yourSide = whichSide(yourPosition).toUpperCase();
var cornerBonus = isCorner(yourPosition) ? true : false;

console.log("You rolled " + roll1[0] + " and " + roll1[1] + ", so you have moved to position " + (yourPosition <= 44 ? yourPosition : yourPosition - 44) + ", which is on the " + yourSide + " side of the board");

if (cornerBonus) {
  console.log("CONGRATULATIONS! You landed on a CORNER, so you get a $200 bonus");
  }
    if (gameOver === true) {
  console.log("YOU HAVE PASSED GO!  YOU HAVE WON THE GAME! YABBA DABBA DOO!");
  break;
  }
  console.log("");
} while (gameOver !== true);





