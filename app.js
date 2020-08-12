// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var ProGrad1 = "Chaitra";
console.log("The driver's name is " + ProGrad1);
document.write("The driver's name is " + ProGrad1);
var ProGrad2 = "Radha";
console.log("The driver's name is " + ProGrad2);
document.write("The driver's name is " + ProGrad2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if (ProGrad1.length > ProGrad2.length) {
  console.log(
    ProGrad1 +
      " " +
      "has the longes name, it has " +
      ProGrad1.length +
      " " +
      "characters"
  );
} else if (ProGrad2.length > ProGrad1.length) {
  console.log(
    ProGrad2 + "has the longes name, it has " + ProGrad2.length + "characters"
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${ProGrad1.length} characters!`
  );
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5.
var str = "ProGrad";
var n = str.length;
for (var ch = 0; ch < n; ch++) {
  if (
    str[ch] == "a" ||
    str[ch] == "e" ||
    str[ch] == "i" ||
    str[ch] == "o" ||
    str[ch] == "u" ||
    str[ch] == "A" ||
    str[ch] == "E" ||
    str[ch] == "I" ||
    str[ch] == "O" ||
    str[ch] == "U"
  ) {
    console.log("Prograd" + str[ch] + " " + ch);
  } else {
    console.log("no vowels");
  }
}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
var str1 = "ProGrad";
var n = str1.length;
var up = 0;
var low = 0;
for (var i = 0; i < n; i++) {
  var ch = str1.charAt(i);
  if (ch.isUpperCase()) {
    up++;
  } else {
    low++;
  }
}
console.log("Upper Case Characters is " + up);
console.log("Lower Case Characters is " + low);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
for (var i = 0; i < ProGrad1.length; i++) {
  var ch = ProGrad1.charAt(i);
  console.log(ch.toUpperCase() + " ");
}

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

n = ProGrad2.length - 1;
var rev = [];
for (var r = n; r >= 0; r--) {
  rev.push(ProGrad2[r]);
}
console.log(rev.join(""));

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad".
for (var i = 0; i < 2; i++) {
  if (i % 2 == 0) {
    console.log(ProGrad1 + " " + ProGrad2);
  } else {
    console.log(ProGrad2 + " " + ProGrad1);
  }
}

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
let arr = [];
arr[0]=ProGrad1;
arr[1]=ProGrad2;
arr.sort();
for(var i=0;i<arr.length;i++){
return arr[i];
}
    // Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'
