// Array for Days!!

// For any methods that we didn't cover, please refer to the Array Documentation.
// Discovering new things is fun and a great way to learn!!

// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!

// ==========================================================================

// 1. Declare a variable whose value is an empty array.
//    Use any method you choose to add at least 4 items to it.

var myArray = [];
myArray = ['fork', 'spoon', 'knife', 'spatula'];
console.log("Question 1");
console.log(myArray);

// 2. Add an additional item to the beginning of your array.

console.log("Question 2");
myArray.push("tablecloth");
console.log(myArray);
// NOTE TO SELF: YOU DON'T NEED A VARIABLE TO OVERWRITE YOUR ARRAY WITH NEW VERSION

// 3. Remove the second and third items in your array.

console.log("Question 3");
myArray.splice(1,2);
console.log(myArray);


// 4. Add two new items after the second item.

console.log("Question 4");
myArray.splice(2,0, 'funnel', 'basket');
console.log(myArray);

// 5. Write 'The current length of the array is....' using the .length method

console.log("Question 5");
console.log("The current length of the array is " + myArray.length);

// Use the following Array for questions 6-11:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'

console.log("Question 6");
things[2] = "keyboard";
console.log(things);

// 7. Combine all of the elements of the array into a string.
//    (Hint: check out the 'join' method.)

console.log("Question 7");
myString = things.join(" !!! ");
console.log(myString);

// 8. Declare a variable called lastItem using .pop() on the things array.
//    Add two new items to lastItem, one at the beginning and one at the end.

console.log("Question 8");
var lastItem = [things.pop()];
lastItem.push("cookies");
lastItem.unshift("pepper");
console.log(lastItem);
//NOTE TO SELF: TO FORCE THE POPPED ITEM TO BE AN ARRAY INSTEAD OF A STRING, WRAP IT IN BRACKETS!

// 9. Create a new Array called itemLast.
//    The items should be the same as lastItem, only in reverse order.

console.log("Question 9");
var itemLast = lastItem.reverse();
console.log(itemLast);

// 10. Remove the first item of itemLast.

console.log("Question 10");
itemLast.shift();
console.log(itemLast);

// 11. Remove all items from itemLast.

//NOTE TO SELF: TWO WAYS TO DELETE EVERYTHING
console.log("Question 11");
backupArray = itemLast.slice();
itemLast.splice(0, itemLast.length);
backupArray.splice(0);
console.log(itemLast);
console.log(backupArray);


// 12. Using the Arrays below, create a single Array
//     called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']

console.log("Question 12");
var array1 = [12, 5, 9, 27];
var array2 = ['fish', 'dog'];
array1.splice(4,0, array2);
console.log(array1);


// Use the following array for questions 13-16:

var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 13. Add two new people after 'Doug'

console.log("Question 13");
people.push("Samantha");
people.push("Frankenstein");
console.log(people);

// 14. Remove everybody except 'Andrea' and 'Ted'

//method 1
console.log("Question 14");
var subset = [people[1], people[3]];
console.log(subset);

//method 2
people.splice(4);
console.log(people);
people.splice(0, 1);
console.log(people);
people.splice(1,1);
console.log(people);

// 15. Add a new person to the beginning of the Array

console.log("Question 15");
people.unshift("Dracula");
console.log(people);

// 16. Arrange the items alphabetically. Store this Array as orderedPeople

console.log("Question 16");
var orderedPeople = people.sort();
console.log(orderedPeople);


// 17. Create an array of arrays with the following three arrays:

console.log("Question 17");

var array1 = ["Fido", "Spot", "Rex", "Sparky"];
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"];
var array3 = ["White", "Black", "Spotted", "Tri-color"];
var superArray = [array1, array2, array3];
console.log(superArray);

// Goal:
var array4 = [
                ["Fido", "Spot", "Rex", "Sparky"],
                ["Bulldog", "Lab", "Dalmation", "Beagle"],
                ["White", "Black", "Spotted", "Tri-color"]
              ]

// 18. Remove "Sparky" and "White" from the above array of arrays.

console.log("Question 18");
var superArray2 = [array1.slice(0,3), array2, array3.slice(1,4)];
console.log(superArray2);


// BONUS 1: Try to arrange the following items from smallest to largest:
// If it doesn't sort as expected, explain why.
console.log("BONUS QUESTION #1");
var sortingNumbers = [2, 5, 98, 55, 77, 300];
console.log("Original list of numbers: " + sortingNumbers);
console.log("METHOD 1: using a bubble sort");
sortingNumbers.sort(function(a, b) {
  return a - b
});
console.log("Sorted list of numbers: " + sortingNumbers);
// METHOD 2: PADDING NUMBERS
var sortingNumbers2 = [175, 22, 15, 3, 65, 250];
console.log("METHOD 2: Padding the numbers with leading zeros");
console.log("Original list of numbers: " + sortingNumbers2);
var paddedNums = [];
for(i=0; i < sortingNumbers2.length; i++){
  var stringNum = sortingNumbers2[i].toString();
  var paddedNum = "00000" + stringNum;
  var shortNum = paddedNum.slice(paddedNum.length - 4, paddedNum.length);
  paddedNums.push(shortNum);
}
paddedNums.sort();
console.log("Padded numbers, sorted: " + paddedNums);
// now convert back to numbers
var sortedNumbers2 = [];
for(i=0; i < paddedNums.length; i++){
  var x = Number(paddedNums[i]);
  sortedNumbers2.push(x);
}
console.log("Now convert them back to numbers: " + sortedNumbers2);

// BONUS 2: Transform array1 into array2 using as few lines of code as you can without directly changing the value of an item (ie array1[0] = item)
// Goal:  array2 = ['plant', 17, 2, 'Bill', 'dog'];
console.log("BONUS QUESTION #2");
console.log("Original list: [2, 'dog', 34, 'Bill', 'plant', 'mug', 17]");
console.log("The goal: ['plant', 17, 2, 'Bill', 'dog']");

var array1 = [2, 'dog', 34, 'Bill', 'plant', 'mug', 17];
//get rid of the 34 and the mug
array1.splice(2,1);
array1.splice(4,1);
// now we have this: [2, "dog", "Bill", "plant", 17]
//move plant and 17 from the end to the beginning
temp1 = array1.pop();
temp2 = array1.pop();
array1.unshift(temp1);
array1.unshift(temp2);
// now reverse bill and dog at the end
temp1 = array1.pop();
temp2 = array1.pop();
array1.push(temp1);
array1.push(temp2);
console.log("***** TA-DA! *****");
console.log(array1);




