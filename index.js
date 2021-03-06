//We want to COMPLETELY reverse an array by flipping the order of the entries AND flipping the order of characters in each element.

//1) a) Define a 'reverseCharacters' function. Give it one parameter, which will be the string to reverse.
//b) Within the function, split the string into an array, then reverse the array.
//c) Use join to create the reversed string and return that string from the function.
//d) Below the function, define and initialize a variable to hold a string.
//e) Use console.log(reverseCharacters(myVariableName)); to call the function and verify that it correctly reverses the characters in the string.
//f) Use method chaining to reduce the lines of code within the function.
let string1 = 'apple';

//1.a
/*function reverseCharacters(myVariableName) {
  let lettersArray = (myVariableName).split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
}
let string1Reverse = reverseCharacters(string1);
console.log(reverseCharacters(string1));
*/

//1.f
/*function reverseCharacters(myVariableName) {
  let reverseString = (myVariableName).split('').reverse().join('');
  return reverseString;
}*/
//console.log(reverseCharacters(string1));

//2) The 'split' method does not work on numbers, but we want the function to return a number with all the digits reversed (e.g. 1234 converts to 4321 and NOT the string "4321")
//a) Add an if statement to your reverseCharacters function to check the typeof the parameter.
//b - d) If typeof is ‘string’, return the reversed string as before. If typeof is ‘number’, convert the parameter to a string, reverse the characters, then convert it back into a number. Return the reversed number.
//e) Be sure to print the result returned by the function to verify that your code works for both strings and numbers. Do this before moving on to the next exercise.

let string2 = 123456;

function reverseCharacters(myVariableName) {
  if (typeof(myVariableName) === String) {
    let reverseString = (myVariableName).split('').reverse().join('');
      return reverseString;
  } else {
    let reverseString = String(myVariableName).split('').reverse().join('');
      return reverseString;
  }
}
//console.log(reverseCharacters(string2));

//3) Create a new function with one parameter, which is the array we want to change. The function should:
//a) Define and initialize an empty array.
//b) Loop through the old array.
//c) For each element in the old array, call reverseCharacters to flip the characters or digits.
//d) Add the reversed string (or number) to the array defined in part ‘a’.
//e) Return the final, reversed array.
//f) Be sure to print the results from each test case in order to verify your code.

//3.a
function reverseArray(changingArray) {
  let emptyArray = []
  for (let i = 0; i < changingArray.length; i++ ) {
    emptyArray.push(reverseCharacters(changingArray[i]));
  }
  return emptyArray.reverse();
}
console.log(reverseArray(arrayTest2));

let arrayTest1 = ['apple', 'potato', 'Capitalized Words'];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ['hello', 'world', 123, 'orange'];

/* 4) Define a function with one parameter, which will be a string. The function must do the following:
a) Have a clear, descriptive name.
b) Retrieve only the last character from strings with lengths of 3 or less.
c) Retrieve only the first 3 characters from strings with lengths larger than 3. 
d) Use a template literal to return the phrase, "We put the '___' in '___'." Fill the first blank with the modified string, and fill the second blank
with the original string.
*/

let str = 'Functions Rock!';

function stringSlicer(stringToSlice){
  let stringEnd = ''
  //let stringBeginning=''
  if (stringToSlice.length <= 3) {
    stringEnd = stringToSlice.slice(-1);
  } else {
    stringEnd = stringToSlice.slice(0,3);
  }
return console.log(`We put the ${stringEnd} in ${str}.`);
}

console.log(stringSlicer(str));
/* Now test your function:
e) Outside of the function, define the variable str and initialize it with a string (e.g. 'Functions rock!').
*/
