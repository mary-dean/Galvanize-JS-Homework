//THE OBJECT OF MY AFFECTION: OBJECTS
//IN CLASS OBJECT EXERCISES

// For any methods that we didn't cover, please refer to the Object Documentation.
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well.
// Use any elements you like!

// ==========================================================================

// 1. Create an object called "me" that describes you with your name, city, and job title.
console.log("Question 1");
var me = {
  name: "Mary",
  city: "Fort Collins",
  title: "Queen"
}
console.log(JSON.stringify(me));


// 2. To your "me" object, add a key of "family" with the value being an array of three of your family members.
// Example of desired output: { name: 'Bob Smith',
//                              city: 'Denver',
//                              jobTitle: 'professional wrestler',
//                              family: ['Joan', 'Kyle', 'Hank'] }

console.log("Question 2");
me.family = ["Matt", "Cash", "Ruby"];
// NOTE TO SELF: YOU CAN ALSO PUSH TO THE ARRAY
me.family.push("John");
console.log(JSON.stringify(me));


// 3. Using the "me" object, use the two different methods to access the value of your city.

console.log("Question 3");
myCity1 = me.city;
myCity2 = me["city"];
console.log("Literal method: " + myCity1);
console.log("Brackets method: " + myCity2);


// Use the following Object for questions 4-9:
var invitees = { adults: [{
                          name: "Penny",
                          table: 10,
                          dinnerChoice: ["salad", "beef", "ice cream"]
                        },
                        {
                          name: "Billy",
                          table: 12,
                          dinnerChoice: ["soup", "beef", "sorbet"]
                        },
                        {
                          name: "Lauren",
                          table: 3,
                          dinnerChoice: ["soup", "chicken", "ice cream"],
                          specialConsiderations: { allergies: "melon",
                                                   seating: "Don't sit her next to ex husband at table 8."}
                        }
                        ],
                  children: [{
                             name: "Junior",
                             table: 4,
                             allergies: ["nuts"]
                            },
                            { name: "Pablo",
                            table: 4,
                            allergies: ["gluten", "following directions"]
                            },
                            { name: "Ada",
                            table: 4,
                            allergies: ["boys"]
                            }
                         ]
                      };

// 4. Access Penny's dinner choice (this will be the second item in his dinnerChoice array)

console.log("Question 4");
var pMeal = invitees.adults[0].dinnerChoice;
console.log("Penny would like to eat: " + pMeal);

// 5. Access Pablo's table number.

console.log("Question 5");
var PabloTableNo = invitees.children[1].table;
console.log("Pablo's table number is " + PabloTableNo);

// 6. Access Lauren's seating specialConsideration.

console.log("Question 6");
var laurenSpec = invitees.adults[2].specialConsiderations;
console.log("Special considerations for Lauren: " + JSON.stringify(laurenSpec));

// 7. Access Billy's dessert choice (this will be the third item in his dinnerChoice array)

console.log("Question 7");
var billyDessert = invitees.adults[1].dinnerChoice[2];
console.log("Billy's dessert choice: " + billyDessert);

// 8. Access Ada's allergies.

console.log("Question 8");
var adaAllergies = invitees.children[2].allergies;
console.log("Ada's allergies are: " + adaAllergies);

// 9. Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."

console.log("Question 9");
var lMeal = invitees.adults[2].dinnerChoice;
console.log("Lauren's appetizer is " + lMeal[0] + ". She will be eating " + lMeal[1] + " for dinner, and has selected " + lMeal[2] + " as her dessert");

// 10. Create an empty object called "jsWorkshop" using Constructor Notation.
console.log("Question 10");
var jsWorkshop = new Object();
console.log("My new empty object: " + jsWorkshop)

// 11. To your "jsWorkshop" object, assign a key of "classmates" with the value being an array of five your classmates.

console.log("Question 11");
jsWorkshop.classmates = ["Dracula", "Frankenstein", "Hulk", "Darth", "Cruella"];
console.log("My classmates: " + jsWorkshop.classmates);

// 12. Get the length of the fourth classmate's name.
console.log("Question 12");
var person4 = jsWorkshop.classmates[3];
console.log("The 4th person, " + person4 + ", has " + person4.length + " letters in his name");

// 13. Clear the classmates value.
console.log("Question 13");
jsWorkshop.classmates.length = 0;
console.log("The students have left the building..." + JSON.stringify(jsWorkshop));

// 14. Create an empty array called "books".
console.log("Question 14");
var books = [];
console.log("My bookshelf is empty..." + JSON.stringify(books));

// 15. Create three book objects that contain book titles, their author, and number of pages.
//     The name of each object should be some kind of made up ISBN number.
//     (Feel free to make up the titles. And the authors. Have fun. No pressure.)
//     Insert the three objects into the "books" array.

// Final desired result:
    // var books = [ISBN22222:  {
    //                             title: "You Had Me at Woof",
    //                             author: "Julie Klum",
    //                             pages: 207
    //                           },
    //              ISBN33333:  {
    //                             title: "The Catcher in the Rye",
    //                             author: "JD Salinger",
    //                             pages: 214
    //                           },
    //              ISBN44444:  {
    //                             title: "Bangkok Haunts",
    //                             author: "John Burdett",
    //                             pages: 569,
    //                           }
    //             ]

console.log("Question 15");
books[0] = new Object();
books[0] = {
  ISBN: "123456789",
  title: "Learn Javascript in your Sleep",
  author: "Rasputin",
  pages: 25
}

books[1] = new Object();
books[1] = {
  ISBN: "987654321",
  title: "Make money by robbing banks",
  author: "Al Capone",
  pages: 175
}

books[2] = new Object();
books[2] = { 
  ISBN: "1212121212",
  title: "Raising Rats for fun and profit",
  author: "Ben Willard",
  pages: 255
} 
console.log("These are the books I just bought" , JSON.stringify(books));
    // 16. Access the author of the first book.
console.log("Question 16");
console.log("The author of the first book is " + books[0].author);
        
// 17. Get the length of the author the the third book.
console.log("Question 17");
console.log("The author of the third book, " + books[2].author + ", has a name that is " + books[2].author.length + " letters long");

// 18. To each book object variable, add a key of "dateRead" with a value of the year you read the book.
//     (Go ahead and make this up, too. Get wild.)
console.log("Question 18");
books[0].dateRead = "1993";
books[1].dateRead = "1964";
books[2].dateRead = "2012";

// 19. Remove the second book from the books Array.
books.splice(1,1);
console.log("These are my remaining books: " , JSON.stringify(books));

// Bonus: Explain, in your own words, the difference between Literal Notation and Constructor Notation.
