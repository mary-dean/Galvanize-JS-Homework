//Week 1 - Project 1


// Log all answers to the console and write them to document
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// =======================================================
function init(){
    var q;
    var a;
  
    //1. Log your name to the console (as a string).

q = 1;
a = "My name is Mary Dean";
    
console.log("Question " + q + " ==>");
console.log(a);
document.getElementById("Q" + q).innerHTML = "QUESTION " + q + ":<br>" + a + "<br><br>";
q++;

//2. Declare a variable called 'name', and then log it to the console.
    
var name = "Mary Bernadette Dean";
a = "That's " + name +", if you really want to know.";

console.log("Question " + q + " ==>");
console.log(a);
document.getElementById("Q" + q).innerHTML = "QUESTION " + q + ":<br>" + a + "<br><br>";
q++;

//3. Declare two variables with number values. 
//   Add, subtract, multiply and divide them.
    
var val1 = 2573;
var val2 = 99;
var s1 = val1.toString();
var s2 = val2.toString();
a = s1 + " + " + s2 + " = " + (val1 + val2) + ", " +
s1 + " - " + s2 + " = " + (val1 - val2) + ", " +
s1 + " * " + s2 + " = " + (val1 * val2) + ", " +
s1 + " / " + s2 + " = " + (val1 / val2) + "."

console.log("Question " + q + " ==>");
console.log(a);
document.getElementById("Q" + q).innerHTML = "QUESTION " + q + ":<br>" + a + "<br><br>";
q++;  
    

//4. Declare two variables with string values. 
//   Create a third variable that concatenates them.
    
s1 = "Happy Birthday, "
s2 = name;
a = s1 + s2;

console.log("Question " + q + " ==>");
console.log(a);
document.getElementById("Q" + q).innerHTML = "QUESTION " + q + ":<br>" + a + "<br><br>";
q++;

//5. Add, subract, multiply and divide the strings '5' and '3'. 
//   Observe the results and know how to explain the results if asked.
    
s1 = "5";
s2 = "3";
a = s1 + " + " + s2 + " = " + (s1 + s2) + ", " +
s1 + " - " + s2 + " = " + (s1 - s2) + ", " +
s1 + " * " + s2 + " = " + (s1 * s2) + ", " +
s1 + " / " + s2 + " = " + (s1 / s2) + "."

console.log("Question " + q + " ==>");
console.log(a);
document.getElementById("Q" + q).innerHTML = "QUESTION " + q + ":<br>" + a + "<br><br>";
q++;
     
//6. Create a prompt that asks a user to pick a number. 
//   Then double the answer.

userNum = prompt("Enter a number, please: ");
a = userNum + " doubled is " + (2 * userNum);
    
console.log("Question " + q + " ==>");
console.log(a);
document.getElementById("Q" + q).innerHTML = "QUESTION " + q + ":<br>" + a + "<br><br>";
q++;

//7. Create a custom alert.

a = "alert('Look what you did!!!! You are in BIG trouble!!!');"

console.log("Question " + q + " ==>");
console.log(a);
document.getElementById("Q" + q).innerHTML = "QUESTION " + q + ":<br>" + a + "<br><br>";
q++;

//8. Declare three variables called length, width and height. 
//   Calculate area and volume.
    
var length = 25;
var width = 40;
var height = 15;
var surfaceArea =  (2 * (length * width)) + (2 * (width * height)) + (2 * (height * length));
var volume = length * width * height;
a = "The surface area is " + surfaceArea + ". The volume is " + volume;
 
console.log("Question " + q + " ==>");
console.log(a);
document.getElementById("Q" + q).innerHTML = "QUESTION " + q + ":<br>" + a + "<br><br>";
q++;

    
//9. Ask for a user's name, age and city. 
//   In a single command display/log the sentence:
//   "My name is...I'm....years old, and I live in....."
    
var userName = prompt("What is your name?");
var userAge = prompt("How old are you, " + userName + "?");
var userCity = prompt("What city do you live in?", "Fort Collins");
a = "My name is " + userName + ". I'm " + userAge + " years old, and I live in " + userCity; 
    
console.log("Question " + q + " ==>");
console.log(a);
document.getElementById("Q" + q).innerHTML = "QUESTION " + q + ":<br>" + a + "<br><br>";
q++;

//10. Create an alert that uses the response from a prompt.

faveColor = prompt("What is your favorite color?");
a = "What a coincidence! " + faveColor.toUpperCase() + " is MY favorite color, too!";
alert(a);


console.log("Question " + q + " ==>");
console.log(a);
document.getElementById("Q" + q).innerHTML = "QUESTION " + q + ":<br>" + a + "<br><br>";

}

onload=init;